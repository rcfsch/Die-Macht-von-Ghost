try{
await sendNewsletter(member);
catch(err）{
logging.error('Failed to send newsletter'，{
member: member.id,
error: err.message,
timestamp:new Date().toISoString()
});
//Der Newsletter-VersandfurdiesesMitglied scheitert，
//aber das System fahrt mitdem nachsten fort.
{
