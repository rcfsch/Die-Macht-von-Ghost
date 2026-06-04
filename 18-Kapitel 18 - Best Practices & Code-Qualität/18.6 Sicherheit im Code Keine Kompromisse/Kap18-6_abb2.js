//SCHLECHT:Kann zu Remote Code Execution fuhren
const themePath = req.query.theme;
const theme = require(themePath);
//GUT:WhitelisterlaubterPfade
const allowedThemes =['default'，'modern'，'classic'];
const themeName = req.query.theme;
yif (!allowedThemes.includes(themeName)){
throw new errors.BadRequestError('Theme not allowed');
const theme =require(./themes/${themeName});
