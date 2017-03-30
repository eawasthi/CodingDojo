<!DOCTYPE html>
<html>
<head>
<script type="text/javascript"
"use strict";
function time(hour,min,period){
	if(min<30 && period=='am'){
		console.log("it's just past " + hour + " in the morning");
	}
	else if (min<30 && period=="pm"){
		console.log("its just past " + hour + " in the evening");
	}
	else if(min>30 && period=="pm"){
		console.log("its almost " + (hour+1)+ " in the evening");
	}
	else {
		console.log("its almost " + (hour+1) + " in the morning");
	}
}

time(7,10,"am");
</script>
</head>
<html>