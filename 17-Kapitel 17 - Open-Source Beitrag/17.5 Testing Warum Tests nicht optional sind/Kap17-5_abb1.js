test("
excerpt helpershould
truncateto26wordsbydefault'，（)=>{
const html
<p>
+'Wort
.repeat（5θ）+'</p>'；
const result
=excerpt（{
html
expect(result.split('').length).toBeLessThan0rEqual(26);
});
