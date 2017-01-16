var URL= 'http://news-at.zhihu.com/api/4/news/latest';
var URLRes = '';
function demo(url){
	fetch(url,{method: 'GET',mode: 'cors',cache: 'default'}).then(function(res){
	res.json().then(function(date){
		URLRes = date;
})
})}
	demo(URL);
function title(){
	if(URLRes.date.length==8){
	for (var i = 0; i < URLRes.stories.length; i++) {
	document.getElementsByTagName('p')[i].innerHTML=URLRes.stories[i].title;
}
}}
setTimeout(title,500);
