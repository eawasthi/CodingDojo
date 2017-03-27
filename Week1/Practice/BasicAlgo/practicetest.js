function avg(arr){
var sum=0;
var avg=0;
	for(var i=0; i<arr.length; i++){
		sum=sum+arr[i];
		avg=sum/arr.length;
	}
console.log("average is "+ avg + "  and sum is " + sum);
}
avg([1,3,4,0]);