function swap(){
	var arr=[1,-2,-3,4,0];
	for(var i=0; i<arr.length; i++){
		if(arr[i]<0){
			arr[i]="dojo";
		}
	}
	console.log(arr);
}
swap();