function sigma(i){
	var result=0;
	//for(x=i; x>0; x--){
	for(var x=1; x<=i; x++){
		result=result+x;
	}
	console.log(result);

}
sigma(4);