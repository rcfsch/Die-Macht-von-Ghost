import requests
import json
# Konfiguration
GHOST_URL = "https://deinblog.de"
ADMIN_API_KEY = "dein_admin_api_key"
'P =  N
# Schritt 1: Access-Token anfordern
auth_url = f"{GHOST_URL}/ghost/api/admin/session/"
auth_data ={
"grant_type": "password",
"username": ADMIN_EMAIL,
"pasSWord": ADMIN_PASSWORD,
"client_id": "ghost-admin",
"client_secret": ADMIN_API_KEY
{
response = requests.post(auth_url, json=auth_data)
if response.status_code != 201:
raise Exception(f"Auth fehlgeschlagen:{response.text}")
access_token = response.json()['access_token*]
# Schritt 2: Neuen Post erstellen
posts_url = f"{GHOST_URL}/ghost/api/admin/posts/"
headers = {
"Authorization": f"Bearer {access_token}",
"Content-Type": "application/json""
}
}= exepsod^e
"posts":[{
<d/>'itsua uud sne yosee apm asod ast<d>, :.u.
"feature_image": None,
E
[{uotpewoynv. :.aweu..}] :.ser.
}]
response = requests.post(posts_url, headers=headers, data=json.dumps(post_data))
if response.status_code == 201:
print(" Post erfolgreich erstellt!")
else:
print(f"X Fehler: {response.text}")
