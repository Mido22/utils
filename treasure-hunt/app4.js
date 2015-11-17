
var http = require('http'), url='http://hunters.redmart.com/api/things/step3/x/', x, y, z,k,i=0;
function pGet(x,y,z,i){
	setTimeout(function(){
		http.get(url+x+'/y/'+y+'/z/'+z, function(res){
			var body = '';
			res.on('data', function(c){body+=c});
			res.on('end', function(){
				body = JSON.parse(body);
				console.log(x,y,z,i);
				if(body.valid){
					console.log(x,y,z, body);
					process.exit(0);
				}
			});
		});
	}, 500*i);
}
for(k=0;k<10;k++){
	for(x=0;x<10;x++){
		for(y=0;y<10;y++){
			for(z=0;z<10;z++){
				if(k || (x && y && z)){
					i++;
					pGet(k*10+x, k*10+y, k*10+z, i);
				} 
			}
		}
	}	
}