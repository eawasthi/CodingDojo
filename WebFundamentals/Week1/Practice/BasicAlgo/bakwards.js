function backwards(arr){
	var arr1=[ ];
	for(var i=arr.length-1; i>=0; i--){
		arr1.push(arr[i]);
	}
	console.log(arr1);
}
backwards([1,2,3,4,5]);
