function factorial(i) {
	var result=1;
	//for(var x=i; x>=1; x--){
	for(var x=1; x<=i; x++){
		result=result*x;
	}
	
	console.log(result);
}
factorial(5);

