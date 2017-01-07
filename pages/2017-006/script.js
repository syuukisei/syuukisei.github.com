var xmlhttp = new XMLHttpRequest();
var obj = [];
var myCity = [];
xmlhttp.open('GET','https://api.heweather.com/x3/weather?cityid=CN101280601&key=598a1fc824c04a4cb74c8334698a6195',true);
xmlhttp.onload = function () {
	parsedJSON = JSON.parse(this.responseText);
	console.log(parsedJSON)
	obj = JSON.parse(xmlhttp.response);
	myCity = obj["HeWeather data service 3.0"][0];
}
xmlhttp.send();
function weather(){
document.getElementById('cnty').innerHTML=myCity.basic.cnty;
document.getElementById('city').innerHTML=myCity.basic.city;
document.getElementById('qlt').innerHTML=myCity.aqi.city.qlty;
document.getElementById('aqi').innerHTML=myCity.aqi.city.aqi;
document.getElementById('max').innerHTML=myCity.daily_forecast[0].tmp.max;
document.getElementById('min').innerHTML=myCity.daily_forecast[0].tmp.min;
document.getElementById('tmp').innerHTML=myCity.now.tmp;
document.getElementById('pm25').innerHTML=myCity.aqi.city.pm25;
document.getElementById('pm10').innerHTML=myCity.aqi.city.pm10;
document.getElementById('air_txt').innerHTML=myCity.suggestion.air.txt;
console.log('2017')
}
var a = (function (){
	setTimeout(weather,1000)
	console.log('2017')
})();
