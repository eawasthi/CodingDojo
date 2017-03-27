function greaterthen(arr){
	var count=0;
	var arr1=[ ];
	for(var i=0; i<arr.length; i++){
		if(arr[i]>arr[1]){
			count=count+1;
			arr1.push(arr[i]);
		}
	}
	console.log(arr1, count);
}
greaterthen([12,3,3,4,5,6,0,9]);
