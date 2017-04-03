function tryingout(arr){
	var temp=arr[0];
	arr[0]=arr[arr.length-1];
	arr[arr.length-1]=temp;
	console.log(arr);
}
tryingout([2,3,4,5]);