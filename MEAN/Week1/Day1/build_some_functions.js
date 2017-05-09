function runningLogger(){
	console.log("I am running");
}


function mulitiplyByTen(number){
	return number*10;
}
mulitiplyByTen()

function stringReturnOne(){
	return "awesome";
}

function stringReturnTwo(){
	return "CodingDojo";
}

function caller(parameter){
	if (typeof(parameter) =='function'){
		parameter();
	}
}

function myDoubleConsoleLog(parameter1, parameter2){
	if (typeof(parameter1) == 'function' && typeof(parameter2) == 'function'){
		console.log(parameter1(), parameter2());
	}
}


function caller2(parameter){
	console.log('starting');
	var b = settimeout(function(){
		
	}
}