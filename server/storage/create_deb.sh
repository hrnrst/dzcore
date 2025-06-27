#!/bin/bash

# Parameters
# 1.Sandbox Branch
# 2.Extension Templates Branch
# 3.Go Engine Branch
# 4.Dz Branch
# 5.Build Number
# 6.Commit Message


# PHP SANDBOX
COPY server/php-sandbox-master.zip /tmp/sandbox.zip
RUN unzip -qq /tmp/sandbox.zip -d /tmp/ && \
    mkdir -p package/dz/sandbox/php && \
    mv /tmp/php-sandbox-master/* package/dz/sandbox/php/ && \
    rm -rf /tmp/sandbox.zip /tmp/php-sandbox-master

#UI
COPY server/ui-master-1.zip /tmp/
RUN unzip /tmp/ui-master-1.zip -d package/dz/ui && mv package/dz/ui /dz/



#Setup variables and version codes.
VERSION=$(cat package/dz/server/storage/VERSION)
echo $5 >package/dz/server/storage/VERSION_CODE
DATE=$(date)

#Install/Update dependencies
composer install --no-dev -d package/dz/server
composer install --no-dev -d package/dz/sandbox/php
rm -rf package/dz/server/node_modules
rm -rf package/dz/server/docs
mv package/dz/server/storage/build_tools/DEBIAN package/
mv package/dz/server/storage/build_tools/rhel/dz.spec dz.spec
mv package/dz/server/storage/build_tools/rhel/dz-system-worker.ini dz-system-worker.ini
mv package/dz/server/storage/build_tools/rhel/dz-high-availability-syncer.ini dz-high-availability-syncer.ini
rm -rf package/dz/server/storage/build_tools

#Build Package
cd package
touch DEBIAN/md5sums
touch DEBIAN/md5sums
touch DEBIAN/control

find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} + 1>/dev/null 2>/dev/null || true

mkdir -p dz/hashes
find . -type f ! -regex '.*.hg.*' ! -regex '.*?debian-binary.*' ! -regex '.*?DEBIAN.*' -printf '%P ' | xargs md5sum > dz/hashes/core.md5 || true
sed -i '/nginx.conf/d' dz/hashes/core.md5
sed -i '/dz/hashes/d' dz/hashes/core.md5
gpg --batch --yes --passphrase $6 --default-key aciklab@havelsan.com.tr --sign dz/hashes/core.md5
rm dz/hashes/core.md5

chmod 775 DEBIAN/preinst
chmod 775 DEBIAN/postinst

echo """Package: dz
Version: $VERSION-$5
Installed-Size: 77892
Maintainer: scncore <scncore@dz.dev>
Section: admin
Date : $DATE
Architecture: amd64
Priority: important
Description: DZ MYS
Depends: curl, gpg, zip, unzip, nginx, redis, php8.1-redis, php8.1-fpm, php8.1-gd, php8.1-curl, php8.1, php8.1-sqlite3, php8.1-snmp, php8.1-mbstring, php8.1-xml, php8.1-zip, php8.1-posix, libnginx-mod-http-headers-more-filter, libssl1.1 | libssl3, supervisor, postgresql-15, php8.1-pgsql, pgloader, php8.1-bcmath, rsync, dnsutils, php8.1-ldap, php8.1-smbclient, krb5-user, php8.1-ssh2, smbclient, nodejs""" > DEBIAN/control
cat DEBIAN/control
cd ../
dpkg-deb -Zgzip --build package

rm -rf DEBIAN
VERSION=$(cat package/dz/server/storage/VERSION | tr - .)
sed -i s/%VERSION%/$VERSION.$5/g dz.spec
mkdir -p ./package/etc/supervisord.d
cp dz-system-worker.ini ./package/etc/supervisord.d/dz-system-worker.ini
cp dz-high-availability-syncer.ini ./package/etc/supervisord.d/zd-high-availability-syncer.ini
rpmbuild -ba dz.spec --define "_app_dir $(pwd)/package" --define "_rpmdir /tmp" --define "_rpmfilename package.rpm"
rm -rf package
