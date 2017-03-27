function test(arr){
//var max=0;
var max=arr[0];
for(var i=0; i<arr.length; i++){
	if(max<arr[i])
		max=arr[i];
}
console.log(max);
}
test([-20,-10,-1,2]);