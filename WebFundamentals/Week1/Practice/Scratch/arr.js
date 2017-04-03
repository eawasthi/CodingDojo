function arr(){
	var arr=[5,1,7,8];
	var temp=arr[0];
	arr[0]=arr[arr.length-1];
	arr[arr.length-1]=temp;
	console.log(arr); 
}
arr();

	var arr=[5,1,7,8];
	for ( var i = 0; i < arr.length; i++) {
		var temp=arr[i];
		arr[i]=arr[arr.length-1-i];

	}
