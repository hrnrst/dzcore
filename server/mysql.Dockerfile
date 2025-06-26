FROM mysql:8.0.36
COPY ./server/init.sql /docker-entrypoint-initdb.d/init.sql
