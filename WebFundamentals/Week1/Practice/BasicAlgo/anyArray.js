function anyarray(arr){
	var array=[ ];
	count=0;
	for (var i=arr[3]; i<=arr.length; i++){
		count=count+1;
		array.push(i);
	}
	console.log(array, count);
}
anyarray([1,2,3,4,5,0,11,1]);