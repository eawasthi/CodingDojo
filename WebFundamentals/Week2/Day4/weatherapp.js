$(document).ready(function(){
$('form').submit(function(){

var city = $('.ekta').val();
$.get("http://api.openweathermap.org/data/2.5/weather?q="+city+",us&appid=39111fbb990c26708868d2f6176ffdd7",function(response){
var name=response.name;
var hum=response.main.humidity;
var tem=response.main.temp;
var pres=response.main.pressure;
var tem_min=response.main.temp_min;
var tem_max=response.main.temp_max;
$('.name').html("<h1>Name:"+name+"</h1>");
$('.hum').html("<h1>Humidity:"+hum+"</h1>");
$('.tem').html("<h1>Temperature:"+tem+"</h1>");
$('.pres').html("<h1>Pressure:"+pres+"</h1>");
$('.tem_min').html("<h1>Temp Min:"+tem_min+"</h1>");
$('.tem_max').html("<h1>Temp Max:"+tem_max+"</h1>");

}, 'json');
return false;
})
})
