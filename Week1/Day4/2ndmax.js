function secondmax(arr){
	var max=[arr[0]];
	var max2=[arr[0]];
	for(var i=0; i<arr.length; i++){
			if(arr[i]>max){
				max=arr[i];
			}
		}
	arr.pop(max);
	for(var i=0; i<arr.length; i++){
			if(arr[i]>max2){
				max2=arr[i];
			}
	}
console.log(max2);
}
secondmax([1,3,4,5,9]);