FROM quay.io/ansible/awx:24.1.0

USER root

# settings.py dosyasını oluştur
RUN mkdir -p /etc/tower && \
    echo "from awx.settings.production import *" > /etc/tower/settings.py && \
    chown awx:awx /etc/tower/settings.py

USER awx
