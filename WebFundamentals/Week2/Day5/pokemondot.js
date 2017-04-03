$(document).ready(function(){
	for(var i=1; i<151; i++){
		$('.pics').append("<img id='"+i+"' src='http://pokeapi.co/media/img/"+i+".png'>");
	}

	$('.pics').on('click', 'img', function(){
		//$('.images').empty();
		var temp=this.id;
		$('.images').html("<img id='"+temp+"' src='http://pokeapi.co/media/img/"+temp+".png'>");
		
	


	 $.get("http://pokeapi.co/api/v1/pokemon/"+ temp +"/", function(res){
	 	console.log(res);
			   for(var i = 0; i < res.types.length; i++) {
			   	var typo1=res.types[i].name;
    }
		console.log(res);
	$('.name').html("<h4>Name: "+res.name+"</h4>");
	 $('.types').html("<h4>Types:"+typo1+"</h4>");
	 $('.height').html("<h4>Height:"+res.height+"</h4>");
	 $('.weight').html("<h4>weight:"+res.weight+"</h4>");

	}, "json");
})
});