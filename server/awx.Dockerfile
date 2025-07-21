FROM quay.io/ansible/awx:24.1.0

# settings.py dosyasını imaj içine kopyala
RUN echo "from awx.settings.production import *" > /etc/tower/settings.py
