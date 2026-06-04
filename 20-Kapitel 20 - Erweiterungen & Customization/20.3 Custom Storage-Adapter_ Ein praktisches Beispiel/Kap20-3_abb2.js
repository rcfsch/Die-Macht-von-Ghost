const B2 = require('backblaze-b2');
class BackblazeStorage {
v
constructor(config）{
this.b2 = new B2({
applicationKeyId: config.applicationKeyId,
applicationKey: config.applicationKey
1)；
this.bucketId = config.bucketId;
this.bucketName = config.bucketName;
async save(image){
// Authentifiziere dich bei Backblaze
await this.b2.authorize();
// Hole die Upload-URL
const uploadUrl = await this.b2.getUploadUrl({ bucketId: this.bucketId });
// Lade die Datei hoch
const response = await this.b2.uploadFile({
uploadUrl: uploadUrl.data.uploadUrl,
uploadAuthToken: uploadUrl.data.authorizationToken,
fileName: image.name,
data: image.buffer
});
// Gebe die offentliche URL zuruck
async exists(fileName, targetDir) {
// Optional:Prufe,ob die Datei bereits existiert
return false;
async delete(fileName,targetDir）{
//Optional:LoscheDateivonBackblaze
E
module.exports = BackblazeStorage;
