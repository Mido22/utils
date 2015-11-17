var s = require('fs').readFileSync('numbers.txt', 'utf8').split(' '), n = s.length, pair ={}, i=0, key=0;
console.log('length: ', n);

/*s.forEach(function(v, i){
	pair[i] = v;
});*/

while(i<10005){
	key = s[+key];
	if(i>9995){
		console.log(i, key);
	}
	i++;
}