var f = require('fs').readFileSync('enigma.bin'), key='turtle', m=[], i, t;
for(i=0;i<f.length;i++){
	m[i] = f[i] ^ key.charCodeAt(Math.floor(i%6));
}
t = m.map(function(c){ return (Math.floor(c/2));});
console.log('here: ', String.fromCharCode.apply(String, t));
