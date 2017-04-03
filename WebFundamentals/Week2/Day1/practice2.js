function revarr(arr){
	for(var i=arr.length-1; i>=0; i--){
	arr.push(arr[i]);
}
console.log(arr);
}
revarr([1,2,3,4]);