/*file: jonathanWydola.github.io/myPage/js/main.js/main
name: Jonathan Wydola
date: Oct 18 2016
class: GUI 1
Assignment: 5

This file is owned by jonathan wydola and is intended for use for educational purposes only
*/

var time = new Date();
var message = '';
var hour = time.getHours();

/*custom greeting for the time of day*/
if(hour>=18){
	message = "Good Evening, it is: ";
}
else if(hour>=12){
	message = "Good Afternoon, it is: ";
}
else{
	message = "Good Morning, it is: ";
}
var timerBox = time.toDateString();

message = message + timerBox;
document.getElementById("timer").innerHTML = message;