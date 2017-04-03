function reverse() {
	var arr1=['a','b','c','d','e'];
	var arr2=[];
	for (var i= arr1.length-1; i>=0; i--){
		arr2.push(arr1[i]);
	}
	console.log(arr2);
}
reverse()