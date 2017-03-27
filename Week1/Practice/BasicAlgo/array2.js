function array2(){
	var array=[1,-4,-3,3];
	var array2=[];
	for(var i=0; i<array.length; i++){
		if(array[i]>0){
			array2.push("big");
		}
		else{
			array2.push(array[i]);
		}
	}
	console.log(array2);
}
array2();