#!/bin/bash

# Script de déploiement pour résoudre les problèmes Composer
echo "🚀 Déploiement PBP - Résolution des problèmes Composer"

# Étape 1: Sauvegarder le composer.json original
if [ -f "composer.json" ]; then
    cp composer.json composer.json.backup
    echo "✅ Composer.json sauvegardé"
fi

# Étape 2: Utiliser le fichier de production
if [ -f "composer-production.json" ]; then
    cp composer-production.json composer.json
    echo "✅ Composer.json de production activé"
else
    echo "❌ Fichier composer-production.json non trouvé"
    exit 1
fi

# Étape 3: Installation sans scripts
echo "📦 Installation des dépendances..."
composer install --no-dev --optimize-autoloader --no-scripts

# Étape 4: Commandes Laravel manuelles
echo "🔧 Configuration Laravel..."
php artisan package:discover --ansi
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize

# Étape 5: Génération du sitemap SEO
echo "🗺️ Génération du sitemap..."
php artisan sitemap:generate

# Étape 6: Permissions
echo "🔐 Configuration des permissions..."
chmod -R 755 storage bootstrap/cache
chmod -R 755 public

# Étape 7: Vérification
echo "✅ Déploiement terminé!"
echo "📊 Vérification des fichiers générés:"
ls -la public/sitemap.xml
ls -la bootstrap/cache/
ls -la storage/framework/cache/

echo "🎉 Déploiement réussi!"
