function fibonacci() {
	var arr=[0,1, ];
	for (var i=2; i<=20 ; i++){
		arr[i]=arr[i-2]+arr[i-1];
		console.log(arr);
	}
}
fibonacci()