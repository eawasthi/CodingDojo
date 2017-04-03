nfunction mix(){
	var arr=[-1,0,0,-4];
	var max=arr[0];
	var min=arr[0];
	var avg=arr[0];
	var sum=0;
	for(var i=0; i<arr.length; i++){
		if(max<arr[i]){
			max=arr[i];
		}
		if (min>arr[i]){
			min=arr[i];
		}
		sum=sum+arr[i];
		avg=sum/arr.length;
	}

console.log("maximum is " + max + " minimum is " + min + " avgerage is " + avg);
}
mix();