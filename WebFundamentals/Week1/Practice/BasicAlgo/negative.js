function negative(){
	var array=[1,-2,-5,3,0];
	for(var i=0; i<array.length; i++){
		if(array[i]<0){
			array[i]=0;
		}
	}
console.log(array);
}
negative();