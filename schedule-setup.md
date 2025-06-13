# Configuration du Planificateur Laravel

## 🕰️ Étape 1: Configurer le Cron sur le serveur

Ajoutez cette ligne dans votre crontab :

```bash
* * * * * cd /path/to/your/project && php artisan schedule:run >> /dev/null 2>&1
```

### Sur un serveur Linux/Ubuntu :
```bash
# Éditer le crontab
crontab -e

# Ajouter cette ligne (remplacez le chemin)
* * * * * cd /home/votre-utilisateur/patrimoine-bati && php artisan schedule:run >> /dev/null 2>&1
```

### Sur un hébergement partagé (cPanel) :
1. Aller dans "Tâches Cron" 
2. Ajouter une nouvelle tâche cron
3. Fréquence : `* * * * *` (toutes les minutes)
4. Commande : `cd /home/votre-compte/public_html && php artisan schedule:run`

## 🔍 Étape 2: Vérifier que ça fonctionne

```bash
# Tester le planificateur manuellement
php artisan schedule:run

# Voir les tâches planifiées
php artisan schedule:list

# Tester une commande spécifique
php artisan news:update-reading-times
```

## 📊 Étape 3: Surveiller les logs

Les logs sont sauvegardés dans :
```
storage/logs/reading-times-update.log
```

## ⚠️ Important

- Le cron Laravel doit s'exécuter **toutes les minutes**
- Laravel détermine ensuite quelles tâches doivent vraiment s'exécuter
- Sans le cron configuré, aucune tâche planifiée ne s'exécutera 