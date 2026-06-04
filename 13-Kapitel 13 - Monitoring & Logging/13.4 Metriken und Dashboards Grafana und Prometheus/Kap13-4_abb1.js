const client = require('prom-client');
//Metrikenregistrieren
const httpRequestDuration = new client.Histogram({
name:'http_request_duration_seconds'
L
help:'API Antwortzeit inSekunden'
labelNames:['method'，'route','status
buckets:[0.1,0.3,0.6,1,2，5]
});
