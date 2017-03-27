function spaces(x){
	var k="";
	for(var i=1; i<=50/2; i++){
		k=k+"A";
	}
	for(var i=1; i<=x; i++){
		k=k+"*";
	}
	for (var i=1; i<50/2; i++){
		k=k+"A";
	}
	console.log(k);
	//return k;
}


function array(){
	var arr=[-1,2,0,10];
	var arr1=[];
	var test= spaces(10)
	for (var i=0; i<arr.length; i++)
	{
		if (arr[i]>0){
			arr1.push("big");
		}
		
		else if (arr[i]<0)
		{
			arr1.push("small");
		}

		else if (arr[i]==0)
		{
			arr1.push("lol");
		}	
	}
	console.log(arr1);
}
array();

