function greetings(fname, today) {

var hour = today.getHours();

if(hour < 12){

var greeting = "✨ Good Morning!";

}else if(hour < 18){

var greeting = "💜 Good Afternoon!";

}else{

var greeting = "🌙 Good Evening!";

}

return greeting + " " + fname + "<br>Welcome to Glow Jewelry!";
}

function starTime(){

var today = new Date();

var weekday = today.getDay();

var days = [

"Sunday",

"Monday",

"Tuesday",

"Wednesday",

"Thursday",

"Friday",

"Saturday"

];

var dayName = days[weekday];

var day = today.getDate();

var month = today.getMonth();

var monthNames = [

"January",

"February",

"March",

"April",

"May",

"June",

"July",

"August",

"September",

"October",

"November",

"December"

];

var monthName = monthNames[month];

var year = today.getFullYear();

var hour = today.getHours();

var min = today.getMinutes();

var sec = today.getSeconds();

document.getElementById("dateTime").innerHTML =

dayName +

", " +

day +

" " +

monthName +

" " +

year +

" | " +

addZero(hour) +

":" +

addZero(min) +

":" +

addZero(sec);

setTimeout(starTime,1000);

}

function addZero(i){

if(i < 10){

i = "0" + i;

}

return i;

}

function daysInMonths(DateTime){

var currentMonth = DateTime.getMonth()+1;

var days30 = [4,6,9,11];

var days31 = [1,3,5,7,8,10,12];

if(days30.includes(currentMonth)){

return 30;

}

else if(days31.includes(currentMonth)){

return 31;

}

else{

var year = DateTime.getFullYear();

if((year % 4 == 0 && year % 100 != 0)

||

(year % 400 == 0)){

return 29;

}

return 28;

}

}

function FormValidation(registrationForm){

document

.getElementById(registrationForm)

.addEventListener(

"submit",

function(event){

event.preventDefault();

document

.getElementById(

"validation_result"

)

.textContent="";

let isValid=true;

const fullname=

document

.getElementById(

"fullname"

)

.value

.trim();

if(fullname===""){

isValid=false;

}

const email=

document

.getElementById(

"email"

)

.value

.trim();

if(email===""){

isValid=false;

}

if(isValid){

document

.getElementById(

"validation_result"

)

.innerHTML=

"✨ Thank you for contacting Glow Jewelry!";

}

}

);

}

function darkMode(){

document.body.classList.toggle(

"dark"

);

}
