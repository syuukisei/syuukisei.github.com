/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	name: '周启生',
	role: '前端开发 & 设计师',
	contacts: {
		mobile: '13246687075',
		email: 'syuukisei@foxmail.com',
		github: 'https://github.com/syuukisei',
		twitter: 'syuukisei',
		location: '深圳',
	},
	welcomeMessage: '一起写function吧！',
	skills:[ '前端','动画设计','平面设计'],
	biopic: 'images/pic.jpg',
	live:'深圳市宝安区固戍',
	display: function() {
		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
		$("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile),
		HTMLemail.replace("%data%",bio.contacts.email),
		HTMLgithub.replace("%data%",bio.contacts.github),
		HTMLtwitter.replace("%data%",bio.contacts.twitter),
		HTMLlocation.replace("%data%",bio.contacts.location));
   		// $("#header").append(HTMLskills);
    		$("#header").append(HTMLbioPic,HTMLwelcomeMsg,HTMLskillsStart);
    		bio.skills.forEach(function(e){$("#skills").append(`<li>${e}`)})
    		return console.log("bio is display.")
		// body...
	}
}
// var tnum = 0;
var education = {
	schools:[{
		name: '深圳技师学院',
		location: '深圳',
		degree: '中专',
		majors:['计算机动画'],
		// education.schools[0].majors
		dates: '2009-2015',
		url: 'http://www.ssti.net.cn/main/'
	},{
		name: '木棉湾实验学校',
		location: '深圳',
		degree: '初中',
		majors:["-"],
		// education.schools[0].majors
		dates: '2007-2009',
		url: ''
	}],
	onlineCourses:[{
		title:'前端工程师纳米学位',
		school: '优达学城',
		dates: '2017年至今',
		classUrl:'https://cn.udacity.com/courses/web-development',
		url: 'https://cn.udacity.com/'
	}],
	display: function() {
		for(var i = 0;i<education.schools.length; i++){
		$("#education").append(HTMLschoolName.replace("%data%",education.schools[i].name),
		HTMLschoolDegree.replace("%data%",education.schools[i].degree),
		HTMLschoolDates.replace("%data%",education.schools[i].dates),
		HTMLschoolLocation.replace("%data%",education.schools[i].location));
			for(var j = 0;j<education.schools[i].majors.length; j++){
			$("#education").append(HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]))
			}
		}
		for(var k = 0;k<education.onlineCourses.length; k++){
		$("#education").append(HTMLonlineClasses.replace("%data%",education.onlineCourses[k].name),
		HTMLonlineTitle.replace("%data%",education.onlineCourses[k].title),
		// HTMLonlineTitle.replace("%url%",education.onlineCourses[k].classUrl),
		HTMLonlineSchool.replace("%data%",education.onlineCourses[k].dates),
		HTMLonlineDates.replace("%data%",education.onlineCourses[k].dates),
		HTMLonlineURL.replace("%data%",education.onlineCourses[k].url)
		// HTMLonlineURL.replace("%url%",education.onlineCourses[k].url)
		);
		// console.log(education.schools[i].name);
		// console.log(i);
		}
	}
}
var work  = {
	jobs: [{
		employer: '深圳市盈天下广告有限公司',
		title: '视觉设计师',
		location: '深圳',
		dates: '201406-201511',
		description: '视觉相关的动画和平面设计',
		url: 'http://www.iwinad.com/'
	}],
	display: function() {
		for(var i = 0;i<work.jobs.length; i++){
		$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[0].employer),
		// HTMLworkEmployer.replace("%url%",work.jobs[0].url),
		HTMLworkTitle.replace("%data%",work.jobs[0].title),
		HTMLworkDates.replace("%data%",work.jobs[0].dates),
		HTMLworkLocation.replace("%data%",work.jobs[0].location),
		HTMLworkDescription.replace("%data%",work.jobs[0].description)
		);
    		return console.log("work is display.")
		// body...
	}}
}
var projects = {
	projects:[{
		title: '华为快速部署家庭宽带项目',
		dates: '201701-201702',
		description: '因盈天下广告有限公司公司（设计外包公司）华为快速部署家庭宽带项目无法达到客户华为公司的需求，被返聘为短期合同工，负责展墙六大块屏幕的动画设计。完好解决华为方对该项目动画效果精致细腻的需求，得到华为领导客户的肯定评价。',
		images: ["images/route.jpg"],
		url:'http://www.huawei.com/cn/events/mwc/2017/maxmizing-network-value/home-broadband'
	}],
	display: function() {
		for(var i = 0;i<projects.projects.length; i++){
		$("#projects").append(HTMLprojectTitle.replace("%data%",projects.projects[0].title),
		// HTMLprojectTitle[0].replace("%url%",projects.projects.url),
		HTMLprojectDates.replace("%data%",projects.projects[0].dates),
		HTMLprojectDescription.replace("%data%",projects.projects[0].description)
		// HTMLprojectImage.replace("%data%",projects.projects.images)
		);
		for(var j = 0;j<projects.projects[i].images.length; j++){
		$("#projects").append(HTMLprojectImage.replace("%data%",projects.projects[i].images[j]))
		}
    		return console.log("projects is display.")
		// body...
	}
	}
}

console.log(`The jQuery version is ${$.fn.jquery}`);
var br = '<hr/>';
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
HTMLbioPic = HTMLbioPic.replace("%data%",bio.biopic);
var skillsList ='<li>%data%</li>';
// googleMap = googleMap.replace("%data%",bio.live);
// var HTMLmap = '<div id="map"></div>';

$("#mapDiv").append(googleMap);
$('#workExperience').addClass('center-content')
$('#projects').addClass('center-content')
$('#education').addClass('center-content')
$('#workExperience').addClass('center-content')

// $('#workExperience').addClass('center-content')
// $('#projects').addClass('center-content')
// $('#education').addClass('center-content')
// $('#workExperience').addClass('center-content')

bio.display();
work.display();
projects.display();
education.display();
