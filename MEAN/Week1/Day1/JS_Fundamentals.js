function sum(x,y){
	var sum=0;
	for(var i=x;  i<=y; i++){
		sum=sum+i;
	}
	return sum;
}


function array1(arr){
var min=arr[0];
for(var i =0; i<arr.length; i++){
	if (arr[i]<min)
		min=arr[i];
}
	return min;
}

function array2(arr){
var avg=0;
var sum=0;
for (var i=0; i<arr.length; i++){
	sum=sum+arr[i];
}
avg=sum/arr.length;
return avg;
}


var sumXY=function(x,y){
	var sum=0;
	for(var i=x;  i<=y; i++){
		sum=sum+i;
	}
	return sum;
}

var findingMin=function(arr){
var min=arr[0];
for(var i =0; i<arr.length; i++){
	if (arr[i]<min)
		min=arr[i];
}
	return min;
}


var findingavg=function(arr){
var avg=0;
var sum=0;
for (var i=0; i<arr.length; i++){
	sum=sum+arr[i];
}
avg=sum/arr.length;
return avg;
}


var myobject = {
	sumXY: function(x,y){
	var sum=0;
	for(var i=x;  i<=y; i++){
		sum=sum+i;
	}
	return sum;
	},

	min: function(arr){
	var min=arr[0];
	for(var i =0; i<arr.length; i++){
	if (arr[i]<min)
		min=arr[i];
	}
	return min;
	},

	avg: function(arr){
	var avg=0;
	var sum=0;
	for (var i=0; i<arr.length; i++){
		sum=sum+arr[i];
	}
	avg=sum/arr.length;
	return avg;
	}
}



var person = {
	name : "Ekta",
	distance_traveled : 0,
	say_name : function(){
		console.log(person.name);
	},
	say_something : function(parameter){
		console.log('${person.name} says: ${parameter}');
	},
	walk : function(){
		console.log('${person.name} is walking!'):
		person.distance_traveled= distance_traveled+3;
		return person;
	},
	run : function(){
		console.log('${person.name} is running!'):
		person.distance_traveled= distance_traveled+10;
		return person;
	},
	crawl : function(){
		console.log('${person.name} is crawling!'):
		person.distance_traveled= distance_traveled+1;
		return person;
	},
	chewGum : function(){
		console.log("I can walk and chew gum, but i cant chew gum and walk");
	}
}


