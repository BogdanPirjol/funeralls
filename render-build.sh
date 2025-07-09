#!/usr/bin/env bash
set -o errexit

# Instalări
npm install
cd funeralls && npm install && npm run build

# Configurează cache-ul
PUPPETEER_CACHE_DIR=/opt/render/.cache/puppeteer
mkdir -p "$PUPPETEER_CACHE_DIR"

# Instalează Chrome
npx puppeteer browsers install chrome

# Sincronizează cache-ul între build și project
cp -R "$PUPPETEER_CACHE_DIR" ./node_modules/.cache/puppeteer
