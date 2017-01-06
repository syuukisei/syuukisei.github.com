function setH() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);   
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('h').innerHTML = h;
  t = setTimeout('setH()', 50);
}


function setM() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);   
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('m').innerHTML =m ;
  t = setTimeout('setM()', 50);
}


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function setS() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);   
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('s').innerHTML = s;
  T = setTimeout('setS()', 50);
}





window.onload = function() {
  var todayS = new Date();
  var hS = todayS.getHours();
  if (hS >= 12) {
    document.getElementById('day').innerHTML = "PM";
  } else {
    document.getElementById('day').innerHTML = "AM";
  }
}
