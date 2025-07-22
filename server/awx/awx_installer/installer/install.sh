#!/bin/bash
set -e

# install.sh script'i /installer dizininde çalışıyor olacak
cd /installer

echo "[INFO] AWX kurulum başlatılıyor..."

# Ansible varsa versiyonunu kontrol et
ansible --version || { echo "[ERROR] Ansible yüklü değil!"; exit 1; }

# Envanteri kontrol et
if [ ! -f inventory ]; then
  echo "[ERROR] 'inventory' dosyası bulunamadı!"
  exit 1
fi

# Playbook çalıştır
ansible-playbook -i inventory install.yml

echo "[INFO] AWX kurulumu başarıyla tamamlandı."
