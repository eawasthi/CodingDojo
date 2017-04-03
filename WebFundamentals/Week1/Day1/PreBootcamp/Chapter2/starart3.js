function starart(x)
{
	if(x>75 || x<0){
		console.log("Idiot put a number between 0 and 75")
	}

else{
		var spaces ="";
		for(var i=1; i<=((14-x)/2); i++)
		{
			spaces = (spaces + i);
		}
		for(var j=1 ; j<=x; j++)
		{
			spaces = (spaces + "*")
		}
		for(var k=1; k<=((14-x)/2); k++)
		{
			spaces = (spaces + k);
		}
		console.log(spaces);
	}

}
starart(2);
