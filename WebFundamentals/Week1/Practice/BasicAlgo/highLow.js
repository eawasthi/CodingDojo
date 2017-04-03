function highlow(arr){
	var min=arr[0];
	var max=0;
for(var i=0; i<arr.length; i++)
	if(min>arr[i]){
		min=arr[i];
	}
console.log(min);
return max;
}

function high2(){
	var test=highlow([1,2,3,4,5]);
	console.log(test);
}


