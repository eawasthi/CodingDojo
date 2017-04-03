function reverse() {
	var arr=[2,4,6,8,9];
	for (var i = arr.length - 1; i >=arr.length/2; i--) {
		var temp=arr[i];
		console.log("This is temp" + temp);
		arr[i]= arr[arr.length-1-i];
		arr[arr.length-1-i]=temp;
		console.log(arr	);
	}

}
reverse();