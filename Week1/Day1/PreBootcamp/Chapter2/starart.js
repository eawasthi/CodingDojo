function starart(x)
{
	if(x>75 || x<0){
		console.log("Idiot put a number between 0 and 75")
	}

else{
		var spaces ="";
		for(var i=1; i<=(75-x); i++)
		{
			spaces = (spaces + "a");
		}
		for(var j=1 ; j<=x; j++)
		{
			spaces = (spaces + "*")
		}
		console.log(spaces);
	}

}
starart(20);
