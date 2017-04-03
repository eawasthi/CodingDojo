function greater(){
	var array=[1,2,4,5];
	var y=3;
	var count=0;
	var array2=[];
	for(var i=0; i<array.length; i++){
		if(y<array[i]){
			count=count+1;
			array2.push(array[i]);
		}
	}
	console.log("values greater than y are " + array2 + " and Total count " + count);
}
greater();