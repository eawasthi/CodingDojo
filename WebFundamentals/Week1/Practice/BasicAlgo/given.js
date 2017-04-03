function array(){
	var arr=[-1,2,0,10];
	var arr1=[];
	for (var i=0; i<arr.length; i++)
	{
		if (arr[i]>0){
			arr1.push("big");
		}
		else if (arr[i]==0)
		{
			arr1.push("lol");
		}	
		else if (arr[i]<0){
			arr1.push("too small")
		}
	}
	console.log(arr1);
}
array();