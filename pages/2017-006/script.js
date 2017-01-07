var xmlhttp = new XMLHttpRequest();
var obj = [];
var myCity = [];
xmlhttp.open('GET','https://api.heweather.com/x3/weather?cityid=CN101280601&key=598a1fc824c04a4cb74c8334698a6195',true);
xmlhttp.onload = function () {
	parsedJSON = JSON.parse(this.responseText);
	// console.log(parsedJSON['HeWeather data service 3.0'])
	console.log(parsedJSON)
	// parsedJSON = JSON.parse(parsedJSON);
	// console.log(xmlhttp.response)
	obj = JSON.parse(xmlhttp.response);
	// objSZ =
	myCity = obj["HeWeather data service 3.0"][0];
	// console.log(obj["HeWeather data service 3.0"][0].aqi.city.pm25)
}
xmlhttp.send();
// xmlDoc=xmlhttp.responseXML;
// var obj = eval('('+xmlhttp+')');
// var obj = xmlhttp.parseJSON();
// var obj = JSON.parse(xmlhttp);
// window.
// setTimeout(a,3000)
var a = (function (){
	setTimeout(weather,500)
	console.log('2017')
})();
// var b = (function (){
// 	setInterval(a,1000)
// })();

function weather(){
document.getElementById('cnty').innerHTML=myCity.basic.cnty;
document.getElementById('city').innerHTML=myCity.basic.city;
document.getElementById('qlt').innerHTML=myCity.aqi.city.qlty;
document.getElementById('aqi').innerHTML=myCity.aqi.city.aqi;
document.getElementById('max').innerHTML=myCity.daily_forecast[0].tmp.max;
document.getElementById('min').innerHTML=myCity.daily_forecast[0].tmp.min;
document.getElementById('tmp').innerHTML=myCity.hourly_forecast[0].tmp;
document.getElementById('pm25').innerHTML=myCity.aqi.city.pm25;
document.getElementById('pm10').innerHTML=myCity.aqi.city.pm10;
document.getElementById('air_txt').innerHTML=myCity.suggestion.air.txt;
console.log('2017')
// document.getElementById('uv_txt').innerHTML=myCity.suggestion.uv.txt;
// document.getElementById('test2').innerHTML=obj["HeWeather data service 3.0"][0].aqi.city.pm25;
// console.log(obj)
}
// window.onload = test();
