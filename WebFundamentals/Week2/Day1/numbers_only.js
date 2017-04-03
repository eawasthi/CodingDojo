function number(){
	var arr=[1,3,4,"vipul", "ekta"];
	var newarray=[];
	for(var i=0; i<arr.length; i++){
		if(typeof arr[i] ==="number"){
			newarray.push(arr[i]);
		}
		else
			newarray.push("sorry its not a number");
	}
	console.log(newarray);
}
number();