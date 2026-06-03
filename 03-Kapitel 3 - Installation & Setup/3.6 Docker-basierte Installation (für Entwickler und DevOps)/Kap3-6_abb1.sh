Beispiel- docker-compose.yml :
yaml
version: '3'
v
services:
ghost:
image: ghost:5-alpine
v
ports:
-"2368:2368"
environment:
url:http://localhost:2368
database_client: mysql
database_connection_host: db
database_
_connection_user: root
database_
_connection_
_password:example
database_connection_
database:ghost
v
volumes:
-./content:/var/lib/ghost/content
v
depends_on:
-db
v
db:
image: mysql:8
v
environment:
MYSQL_ROOT_PASSWORD: eXample
MYSQL_DATABASE: ghost
v
volumes:
./mysql:/var/lib/mysql
