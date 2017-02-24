var integral = function (){document.getElementById('integral').innerHTML = Number(document.getElementById('integral').innerHTML) + 1;}
var total = function (){document.getElementById('total').innerHTML = Number(document.getElementById('total').innerHTML) + 1;}
var winner =function(){
	document.getElementById('alert').innerHTML = 'Just a mistake!';
	document.getElementById('computer').style.backgroundColor="#ffe4e4";
}
var loser =function(){
	document.getElementById('alert').innerHTML = 'Lalala, I win!~';
	document.getElementById('computer').style.backgroundColor="#e1ffd6";
}
var tie =function(){
	document.getElementById('alert').innerHTML = 'Not bad~';
	document.getElementById('computer').style.backgroundColor="#f4f4f4";
}
var computer_shitou = function(){document.getElementById('computer').src ="https://syuukisei.github.io/pages/2017-002/img/quantou.gif";}
var computer_jiandao = function(){document.getElementById('computer').src ="https://syuukisei.github.io/pages/2017-002/img/jiandao.gif";}
var computer_bu = function(){document.getElementById('computer').src ="https://syuukisei.github.io/pages/2017-002/img/bu.gif";}
var my_shitou = function(){document.getElementById('my').innerHTML = 'Rock';}
var my_jiandao = function(){document.getElementById('my').innerHTML = 'Scissors ';}
var my_bu = function(){document.getElementById('my').innerHTML = 'Paper';}
function computer(){return Math.random();}
function _shitou() {
	total();
	my_shitou();
	if(computer()<0.33){
		computer_shitou();
		tie();
	}
	else if (computer()<0.66){
		computer_jiandao();
		winner();
		integral() ;

	}
	else{
		computer_bu();
		loser();
	}
}
function _jiandao() {
	total();
	my_jiandao();
	if(computer()<0.33){
		computer_shitou();
		loser();
	}
	else if (computer()<0.66){
		computer_jiandao();
		tie();
	}
	else{
		computer_bu();
		winner();
		integral() ;
	}
}
function _bu() {
	total();
	my_bu();
	if(computer()<0.33){
		computer_shitou();
		winner();
		integral() ;
	}
	else if (computer()<0.66){
		computer_jiandao();
		loser();
	}
	else{
		computer_bu();
		tie();
	}
}
function refresh(){
	window.location.href='https://syuukisei.github.io/pages/2017-002.html';
}
