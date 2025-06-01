# LIMAN DOCKERFILE
# PYTHON/WinRM entegre

FROM ubuntu:jammy
EXPOSE 80 443

# DEPENDENCIES
RUN echo SCNCORE.COM.TR
RUN export DEBIAN_FRONTEND=noninteractive;
ARG DEBIAN_FRONTEND=noninteractive
ENV DEBIAN_FRONTEND noninteractive
ENV TZ=Europe/Istanbul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt -yqq update
RUN DEBIAN_FRONTEND=noninteractive apt -yqq install software-properties-common gnupg2 ca-certificates wget curl

# PHP + Node.js kaynakları
RUN add-apt-repository --yes ppa:ondrej/php
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt -yqq update

# LIMAN + PYTHON DEPS
RUN DEBIAN_FRONTEND=noninteractive apt -yqq install \
    sudo nodejs gpg zip unzip nginx sysstat \
    php8.2-redis php8.2-fpm php8.2-gd php8.2-curl php8.2 \
    php8.2-sqlite3 php8.2-snmp php8.2-mbstring php8.2-xml php8.2-zip \
    php8.2-posix libnginx-mod-http-headers-more-filter libssl3 supervisor \
    php8.2-pgsql pgloader php8.2-bcmath rsync dnsutils php8.2-ldap \
    php8.2-smbclient krb5-user php8.2-ssh2 smbclient novnc \
    python3 python3-pip iputils-ping && \
    pip3 install pywinrm

# FILES
RUN bash -c 'mkdir -p /liman/{server,certs,logs,database,sandbox,scripts,keys,extensions,packages,ui}'

# UI
#RUN wget https://github.com/limanmys/next/releases/download/release.master.150/ui-master-150.zip
COPY server/ui-master-1.zip /tmp/
#RUN unzip ui*.zip -d ui
RUN unzip /tmp/ui-master-1.zip -d /tmp/ui && mv /tmp/ui /liman/



# CORE
COPY server /liman/server

COPY scripts /liman/scripts


# PHP SANDBOX
RUN wget "https://github.com/limanmys/php-sandbox/archive/refs/heads/master.zip" -O "sandbox.zip"
RUN unzip -qq sandbox.zip
RUN mkdir -p /liman/sandbox/php
RUN mv php-sandbox-master/* /liman/sandbox/php/
RUN rm -rf sandbox.zip php-sandbox-master

# RENDER ENGINE
RUN curl -s https://api.github.com/repos/limanmys/fiber-render-engine/releases/latest | grep "browser_download_url.*zip" | cut -d : -f 2,3 | tr -d \" | wget -qi -
RUN unzip liman_render*.zip
RUN mkdir -p /liman/server/storage
RUN mv liman_render /liman/server/storage/liman_render

# COMPOSER
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN rm -rf composer-setup.php

RUN composer install --no-dev --no-scripts -d /liman/server
RUN composer install --no-dev -d /liman/sandbox/php

# USERS
RUN groupadd -g 2800 liman
RUN useradd liman -u 2801 -g 2800 -m
RUN useradd extuser -u 2802 -g 2800 -m

# PERMS
RUN cp -f /liman/server/storage/limanctl /usr/bin/limanctl

# VNC SETTINGS
RUN rm -rf /liman/keys/vnc
RUN mkdir /liman/keys/vnc
RUN chmod 700 /liman/keys/vnc
RUN touch /liman/keys/vnc/config
RUN chown liman:liman /liman/keys/vnc /liman/keys/vnc/config
RUN chmod 700 /liman/keys/vnc/config

# SETTINGS
RUN sed -i "s/www-data/liman/g" /etc/php/8.2/fpm/pool.d/www.conf
RUN sed -i "s/www-data/liman/g" /etc/nginx/nginx.conf
COPY server/storage/build_tools/docker/config/nginx_default /etc/nginx/sites-available/default 
COPY server/storage/build_tools/docker/config/nginx.conf /etc/nginx/sites-available/liman.conf
RUN ln -s /etc/nginx/sites-available/liman.conf /etc/nginx/sites-enabled/liman.conf

# SERVICES
RUN mkdir /run/php
COPY server/storage/build_tools/docker/config/supervisor.conf /etc/supervisor/supervisor.conf
COPY server/storage/build_tools/docker/config/supervisor /etc/supervisor/conf.d

# START LIMAN
COPY server/storage/build_tools/docker/init.sh /tmp/init.sh
RUN ["chmod", "755", "/tmp/init.sh"]
RUN ["chmod", "+x", "/tmp/init.sh"]

# CLEANUP
RUN apt clean -yqq
RUN apt autoclean -yqq

ENTRYPOINT ["/tmp/init.sh"]
