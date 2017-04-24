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
		$("#topContacts,#footerContacts").append(HTMLmobile,HTMLemail,HTMLtwitter,HTMLgithub,HTMLlocation);
   		// $("#header").append(HTMLskills);
    		$("#header").append(HTMLbioPic,HTMLwelcomeMsg,HTMLskillsStart,HTMLskills);
    		return console.log("bio is display.")
		// body...
	}
}
var education = {
	schools:[{
		name: '深圳技师学院',
		location: '深圳',
		degree: '中专',
		majors: '计算机动画',
		dates: '2009-2015',
		url: 'http://www.ssti.net.cn/main/'
	}],
	onlineCourses:[{
		title:'前端工程师纳米学位',
		school: '优达学城',
		dates: '2017年至今',
		classUrl:'https://cn.udacity.com/courses/web-development',
		url: 'https://cn.udacity.com/'
	}],
	display: function() {
		$("#education").append(HTMLschoolStart,HTMLschoolName,HTMLschoolDegree,HTMLschoolDates,HTMLschoolLocation,HTMLschoolMajor);
    		$("#education").append(HTMLonlineTitle,HTMLonlineSchool,HTMLonlineDates,HTMLonlineURL);
    		return console.log("education is display.")
		// body...
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
		$("#workExperience").append(HTMLworkStart,HTMLworkEmployer,HTMLworkTitle,HTMLworkDates,HTMLworkDescription);
    		return console.log("work is display.")
		// body...
	}
}
var projects = {
	projects:{
		title: '华为快速部署家庭宽带项目',
		dates: '201701-201702',
		description: '因盈天下广告有限公司公司（设计外包公司）华为快速部署家庭宽带项目无法达到客户华为公司的需求，被返聘为短期合同工，负责展墙六大块屏幕的动画设计。完好解决华为方对该项目动画效果精致细腻的需求，得到华为领导客户的肯定评价。',
		images: null,
		url:'http://www.huawei.com/cn/events/mwc/2017/maxmizing-network-value/home-broadband'
	},
	display: function() {
		$("#projects").append(HTMLprojectStart,HTMLprojectTitle,HTMLprojectDates,HTMLprojectDescription);
    		return console.log("projects is display.")
		// body...
	}
}
