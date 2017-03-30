function random(input)
{
	var quarters=1;	
	while(quarters<=input)
	{

		var to_win=Math.trunc(Math.random()*100);
			if(to_win==41)
				{
				var win=Math.floor(Math.random()*50+51);
				console.log("Congratulations you won on" + quarters + " chance and you won " + quarters;
				quarters=quarters+win;}
			else{
				console.log("Sorry not a winner")
			}
			quarters++;
	}
	


}
random(100);