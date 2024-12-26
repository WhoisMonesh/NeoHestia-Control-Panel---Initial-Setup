#!/bin/bash

# NeoHestia Control Panel Installer
# Based on Hestia Control Panel - https://github.com/hestiacp/hestiacp

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Check if running as root
if [ "$(id -u)" != "0" ]; then
   echo -e "${RED}Error: This script must be run as root${NC}" 
   exit 1
fi

# Check OS compatibility
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
    VERSION=$VERSION_ID
else
    echo -e "${RED}Cannot determine OS version${NC}"
    exit 1
fi

# Validate OS
case $OS in
    debian|ubuntu)
        case $VERSION_ID in
            12|11|24.04|22.04|20.04)
                echo -e "${GREEN}OS Version supported${NC}"
                ;;
            *)
                echo -e "${RED}Unsupported OS version${NC}"
                exit 1
                ;;
        esac
        ;;
    *)
        echo -e "${RED}Unsupported OS${NC}"
        exit 1
        ;;
esac

echo "Installing NeoHestia Control Panel..."

# Install dependencies
apt-get update
apt-get install -y curl wget gnupg2 ca-certificates lsb-release debian-archive-keyring

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Install NGINX
apt-get install -y nginx

# Install MariaDB
apt-get install -y mariadb-server

# Install required PHP versions
apt-get install -y \
    php8.2-fpm php8.2-common php8.2-mysql \
    php8.2-xml php8.2-curl php8.2-mbstring \
    php8.2-zip php8.2-gd

# Install Mail Services
apt-get install -y \
    postfix dovecot-imapd dovecot-pop3d \
    amavisd-new spamassassin clamav-daemon

# Install DNS Server
apt-get install -y bind9

# Install SSL
apt-get install -y certbot python3-certbot-nginx

# Install Firewall
apt-get install -y ufw fail2ban

# Clone NeoHestia repository
git clone https://github.com/yourusername/neohestia.git /opt/neohestia

# Install NeoHestia dependencies
cd /opt/neohestia
npm install
npm run build

# Configure NGINX for NeoHestia
cat > /etc/nginx/conf.d/neohestia.conf << EOF
server {
    listen 80;
    server_name _;

    root /opt/neohestia/dist;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF

# Restart services
systemctl restart nginx
systemctl restart php8.2-fpm
systemctl restart mariadb
systemctl restart bind9
systemctl restart postfix
systemctl restart dovecot

# Configure firewall
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw allow 53/tcp
ufw allow 53/udp
ufw allow 25/tcp
ufw allow 143/tcp
ufw allow 993/tcp
ufw enable

echo -e "${GREEN}NeoHestia Control Panel has been installed successfully!${NC}"
echo -e "You can access the panel at: http://your-server-ip"
echo -e "Please configure your DNS to point to this server and setup SSL certificates."