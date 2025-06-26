#!/usr/bin/env sh

# Update files on the persistent storage
#cp -r /dz_files/* /dz
#rm -rf /dz_files

# Set permissions
chown dz:dz /dz
chmod -R 700 /dz/certs
chown -R dz:dz /dz/certs
chmod -R 700 /dz/database
chown -R dz:dz /dz/database
chmod -R 755 /dz/extensions
chown dz:dz /dz/extensions
chmod -R 755 /dz/keys
chown -R dz:dz /dz/keys
chmod -R 700 /dz/logs
chown -R dz:dz /dz/logs
chmod -R 755 /dz/sandbox
chown -R dz:dz /dz/sandbox
chmod -R 700 /dz/server
chown -R dz:dz /dz/server
chmod -R 700 /dz/modules
chown -R dz:dz /dz/modules
chmod -R 700 /dz/packages
chown -R dz:dz /dz/packages
chmod -R 700 /dz/ui
chown -R dz:dz /dz/ui
chmod -R 700 /dz/scripts
chown -R dz:dz /dz/scripts

chmod 755 /dz/server/storage/dz_render
chmod 755 /dz/server/storage/dz_system
chmod 755 /dz/server/storage/dzctl

#runuser dz -c '$(which gpg) --batch --yes --delete-keys aciklab@havelsan.com.tr'
#runuser dz -c '$(which gpg) --import /dz/server/storage/aciklab.public'

# Generate environment variables if does not exist
if [ -f "/dz/server/.env" ]; then
    echo "/dz/server/.env exists."
else
    cp /dz/server/.env.example /dz/server/.env
    chown -R dz:dz /dz/server/.env
    sleep 1
    php /dz/server/artisan key:generate
    php /dz/server/artisan jwt:secret
fi

# JWT Secret creation
JWT_EXISTS=$(grep JWT_SECRET /dz/server/.env && echo "1" || echo "0")
if [ $JWT_EXISTS == "0" ]; then
    php /dz/server/artisan jwt:secret
else
    echo "JWT secret already set."
fi


# Set container mode to true
grep -E "^CONTAINER_MODE" /dz/server/.env >/dev/null && sed -i '/^CONTAINER_MODE/d' /dz/server/.env && echo "CONTAINER_MODE=true" >> /dz/server/.env || echo "CONTAINER_MODE=true" >> /dz/server/.env

# Set redis information
grep -E "^REDIS_HOST" /dz/server/.env >/dev/null && sed -i '/^REDIS_HOST/d' /dz/server/.env && echo "REDIS_HOST=${REDIS_HOST}" >> /dz/server/.env || echo "REDIS_HOST=${REDIS_HOST}" >> /dz/server/.env
grep -E "^REDIS_PORT" /dz/server/.env >/dev/null && sed -i '/^REDIS_PORT/d' /dz/server/.env && echo "REDIS_PORT=${REDIS_PORT}" >> /dz/server/.env || echo "REDIS_PORT=${REDIS_PORT}" >> /dz/server/.env
grep -E "^REDIS_PASSWORD" /dz/server/.env >/dev/null && sed -i '/^REDIS_PASSWORD/d' /dz/server/.env && echo "REDIS_PASSWORD=${REDIS_PASS}" >> /dz/server/.env || echo "REDIS_PASSWORD=${REDIS_PASS}" >> /dz/server/.env

# Database values
sed -i "s/^DB_HOST=.*/DB_HOST=${DB_HOST}/g" /dz/server/.env 
sed -i "s/^DB_PORT=.*/DB_PORT=${DB_PORT}/g" /dz/server/.env 
sed -i "s/^DB_DATABASE=.*/DB_DATABASE=${DB_DATABASE}/g" /dz/server/.env 
sed -i "s/^DB_USERNAME=.*/DB_USERNAME=${DB_USERNAME}/g" /dz/server/.env 
sed -i "s/^DB_PASSWORD=.*/DB_PASSWORD=${DB_PASS}/g" /dz/server/.env 

# Permission fix
touch /dz/logs/dz.log
touch /dz/logs/dz_new.log
chown -R dz:dz /dz/logs

# Set needed values
sed -i "s#QUEUE_DRIVER=database#QUEUE_DRIVER=redis#g" /dz/server/.env
sed -i "s/memory_limit.*/memory_limit = 1024M/g" /etc/php/8.2/fpm/php.ini
sed -i "s/post_max_size.*/post_max_size = 128M/g" /etc/php/8.2/fpm/php.ini
sed -i "s/upload_max_filesize.*/upload_max_filesize = 100M/g" /etc/php/8.2/fpm/php.ini

# Dynamic nginx port
sed -i "s/listen 443 ssl http2.*/listen ${NGINX_PORT} ssl http2;/g" /etc/nginx/sites-available/dz.conf
#sed -i "s/127.0.0.1:8888/dz-webssh:8888/g" /etc/nginx/sites-available/dz.conf

# Generate certificate variables if does not exist
if [ -f "/dz/certs/dz.key" ]; then
    echo "/dz/certs/dz.key exists."
else
    openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 -subj "/C=TR/ST=Ankara/L=Merkez/O=Havelsan/CN=dz" -keyout /dz/certs/dz.key -out /dz/certs/dz.crt
fi

# Laravel initialization
chown -R dz:dz /dz/server/.env
php /dz/server/artisan migrate --force 
php /dz/server/artisan cache:clear 
php /dz/server/artisan view:clear 
php /dz/server/artisan config:clear

# Re-init CA Certs
update-ca-certificates

# Set container mode to true
grep -E "^CONTAINER_MODE" /dz/server/.env >/dev/null && sed -i '/^CONTAINER_MODE/d' /dz/server/.env && echo "CONTAINER_MODE=true" >> /dz/server/.env || echo "CONTAINER_MODE=true" >> /dz/server/.env

# Update executable perms
chmod +x /usr/bin/dzctl
chmod +x /dz/server/storage/dzctl

# Start dz services
sleep 3;
/usr/bin/supervisord -c /etc/supervisor/supervisor.conf 
