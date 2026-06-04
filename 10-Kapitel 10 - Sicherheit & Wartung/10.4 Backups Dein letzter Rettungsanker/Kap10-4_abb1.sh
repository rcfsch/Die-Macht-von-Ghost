#!/bin/bash
DATE=$(date +%Y%m%d-%H%M)
BACKUP_DIR="/backups"
GHOST_DIR="/var/www/ghost"
# 1.Datenbank sichern (fur MySQL/MariaDB)
# 2.content-Verzeichnis sichern
# 3.Beides verschlusseln (optional,aber empfohlen)
gPg --Symmetric --cipher-algo AES256 --output "$BACKUP_DIR/db-$DATE.sql·gPg""$BACKUP_DIR/db-$DATE.sql"
# 4.Alte, unverschlusselte Dateien loschen
rm"$BACKUP_DIR/db-$DATE.sql""$BACKUP_DIR/content-$DATE.tar·gz"
# 5. In die Cloud hochladen (Beispiel mit rclone fur S3-kompatiblen Speicher)
rclone copy"$BACKUP_DIR/"remote:ghost-backups/
# 6.Lokale Backups älter als 7 Tage bereinigen
find "$BACKUP_DIR"-name "*·gPg"-mtime +7 -delete
