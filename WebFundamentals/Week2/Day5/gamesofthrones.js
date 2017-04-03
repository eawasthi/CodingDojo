$(document).ready(function(){
$('.box1').click(function(){
$.get("https://anapioficeandfire.com/api/houses/362", function (response){
	var arr=[];
	for(var i = 0; i < response.titles.length; i++) {
		arr.push(response.titles[i]);
		}
		console.log(arr);
	$('.titl').html(arr);
$('.name1').html("<h6>Name:"+response.name+"</h6>");
$('.words1').html("<h6>Words:"+response.words+"</h6>");

}, 'json');

})
$('.box2').click(function(){
$.get("https://anapioficeandfire.com/api/houses/378", function (response){
	for(var i = 0; i < response.titles.length; i++) {
		var vip= vip+response.titles[i] + ",";
		}
		console.log(vip);
	$('.titl').html(vip);
$('.name1').html("<h6>Name:"+response.name+"</h6>");
$('.words1').html("<h6>Words:"+response.words+"</h6>");

}, 'json');

})
$('.box3').click(function(){
$.get("https://anapioficeandfire.com/api/houses/229", function (response){
	for(var i = 0; i < response.titles.length; i++) {
		var vip= vip+response.titles[i] + ",";
		}
		console.log(vip);
	$('.titl').html(vip);
$('.name1').html("<h6>Name:"+response.name+"</h6>");
$('.words1').html("<h6>Words:"+response.words+"</h6>");

}, 'json');

})
$('.box4').click(function(){
$.get("https://anapioficeandfire.com/api/houses/15", function (response){
	for(var i = 0; i < response.titles.length; i++) {
		var vip= vip+response.titles[i] + ",";
		}
		console.log(vip);
	$('.titl').html(vip);
$('.name1').html("<h6>Name:"+response.name+"</h6>");
$('.words1').html("<h6>Words:"+response.words+"</h6>");

}, 'json');

})











})