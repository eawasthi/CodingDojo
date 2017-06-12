function QuickSort(myArr){
	var smallArr = [];
	var bigArr = [];
	if(myArr.length < 2){
		return myArr;
	}
	for(var idx =1; idx<myArr.length; idx++){
		if(myArr[idx] > myArr[0]){
			bigArr.push(myArr[idx]);
		}
		else {
			smallArr.push(myArr[idx]);
		}
	}
	return QuickSort(smallArr).concat(myArr[0], QuickSort(bigArr));
}
console.log(QuickSort([2,0,-1,-4]));