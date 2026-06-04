//SCHLECHT:Vertraue niemals externen Daten
constuserInput
t=req.body.data;
const
parsed= JSoN.parse（userInput);//Gefahrlich!
GUT:Validierezuerst
const safeInput
t=validator.escape（req.body.data);
parsed =JSoN.parse(safeInput);// Sicherer
/
const
