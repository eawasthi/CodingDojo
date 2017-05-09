var x=[3,5,"Dojo", "rocks", "Michael", "Sensei"]
for (var i=0; i<x.length; i++){
	console.log(x[i]);
}

x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

function add(){
var sum=0;
for(var i=1; i<501; i++){
	sum=sum+i;	
}
console.log(sum);
}
add();

function minval(arr){
var min=arr[0];
for (var i=0; i<arr.length; i++){
	if(arr[i]<min){
		min=arr[i];
	}
}
console.log(min);
}
minval([1, 5, 90, 25, -3, 0]);

function avg(arr){
var sum=0;
var avg=0;
for (var i=0; i<arr.length; i++){
	sum=sum+i;
}
console.log(sum/arr.length);
}
avg([1, 5, 90, 25, -3, 0]);


var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', 
 dojo: 'Dallas'
}
for(var key in newNinja){
	console.log(key);
	console.log(newNinja[key]);
}