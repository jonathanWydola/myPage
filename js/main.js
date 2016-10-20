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
var parkersAge = 2;
var parkersBirthYear = new Date(2014, 6, 13, 3, 33, 33, 0)

function parkersAgeGenerator(day, birthdate){
	return day.getFullYear() - birthdate.getFullYear()
}

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
document.getElementById("sonsAge").innerHTML = "I have a lovely blonde headed baby boy. He is " + parkersAgeGenerator(time,parkersBirthYear) + " years of age as of today thanks to javaScript";


