function shifting(){
	var arr=[1,2,3,4];
	var arr1=[];
	for (var i=1; i<arr.length; i++){
		arr1.push(arr[i]);
	}
	arr1.push(0);
	console.log(arr1);
}
shifting();
