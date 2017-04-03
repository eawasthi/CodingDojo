function practice(arr){
	var y=3;
	var count=0;
	var arr1=[];
	for(var i=0; i<arr.length; i++){
		if(y<arr[i]){
			count=count+1;
			arr1.push(arr[i]);
		}
	}
console.log(count, arr1);
}
practice([1,2,3,4,5]);s