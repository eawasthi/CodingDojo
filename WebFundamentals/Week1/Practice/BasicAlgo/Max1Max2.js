function add(){
	var arr=[1,2,10,100,-80,12];
	var max1=arr[0];
	var max2=arr[0];
	for(var i=1; i<arr.length; i++){
		if(arr[i]>max1){
			max2=max1;
			max1=arr[i];
			}
		if (arr[i]<max1 && arr[i]>max2){
			max2=arr[i];
		}

	}
	console.log(max1, max2);
}
add();