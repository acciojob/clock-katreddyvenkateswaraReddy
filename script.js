//your JS code here. If required.
// Get the element where the time is to be displayed
let timerDisplay=document.getElementById("timer");
// set the current date and time
let currentDate=new Date();
//Update the time in every second
setInterval(
	function(){
		//Get the current date and time
		currentDate=new Date();

		//Update the timer Display
		timerDisplay.innerHTML=currentDate.toLocaleString();
	},1000
)