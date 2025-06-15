FROM mysql:5.7
COPY ./server/init.sql /docker-entrypoint-initdb.d/init.sql
