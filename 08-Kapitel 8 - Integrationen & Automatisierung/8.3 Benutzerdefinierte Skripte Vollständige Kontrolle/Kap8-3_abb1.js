from flask import Flask, request, jsonify
import hmac
import hashlib
app = Flask(_name_
WEBHOOK_SECRET = "dein_geheimer_schluessel"
@app.route('/ghost-webhook'，methods=['POST'])
def handle_ghost_webhook():
signature = request.headers.get('x-ghost-signature')
body = request.get_data()
# Prufe die Signatur, um sicherzustellen, dass die Nachricht wirklich von Ghost kommt
expected = hmac.new(
WEBHOOK_SECRET.encode(),
body,
hashlib.sha256
).hexdigest()
if not hmac.compare_digest(f"sha256={expected}", signature):
return jsonify({"error":"Ungultige Signatur"}), 401
data = request.json
if 'post' in data:
[,atttt.].nsod,]ezep = att]
print(f"Neuer Beitrag veroffentlicht:{title}")
#Hier konnte z.B.ein Slack-Bot benachrichtigt werden
# Oder eine Datenbank aktualisiert werden
return jsonify({"status":"ok"})
