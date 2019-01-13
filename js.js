var display = function() {
	alert(dateTime);
	console.log(dateTime);
}

var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
"Aug", "Sep", "Oct", "Nov", "Dec"];

var today = new Date
var month = monthList[today.getMonth()];
var date = month + "-" + today.getDate() + "-" + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

