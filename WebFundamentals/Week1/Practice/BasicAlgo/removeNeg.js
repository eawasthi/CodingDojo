function removeneg(){
	var arr=[1,-2,3,-4];
	var arr2=[];
	for(var i=0; i<arr.length; i++){
		if(arr[i]<0){
			arr2.push(arr[i]);
		}
	}
	console.log(arr2);
}
removeneg();