//  TASK # 1

document.write("<h1>Task # 1</h1>");

var city = prompt("Enter your city.");
city = city.toLowerCase();
if (city === "karachi") {
    alert("Welcome to the city of Lights.");
}


//  TASK # 2

document.write("<h1>Task # 2</h1>");

var gender = prompt("Enter your Gender.");
gender = gender.toLowerCase()
if (gender === "male") {
    alert("Good Morning sir");
}
else if (gender === "female") {
    alert("Good Morning Ma'am");

}


//  TASK # 3

document.write("<h1>Task # 3</h1>");

var traffic_Signal = prompt("Enter Color of Traffic Signal.");
traffic_Signal = traffic_Signal.toLowerCase();
if (traffic_Signal === "red") {
    alert("Must Stop");
}
else if (traffic_Signal === "yellow") {
    alert("Ready to Move");
}
else if (traffic_Signal === "green") {
    alert("Move Now");
}



//  TASK # 4

document.write("<h1>Task # 4</h1>");

var current_fuel = prompt("Enter the Amount of your Fuel in litres.");
if (current_fuel < 0.25) {
    alert("Please refill the fuel in your car.")
}


//  TASK # 5

document.write("<h1>Task # 5</h1>");

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
};



//  TASK # 6

document.write("<h1>Task # 6</h1>");

var marks_Obtained = Number(prompt("Enter your Obtained Marks."));
var total_Marks = Number(prompt("Enter your Total Marks."));
var percentage = (marks_Obtained / total_Marks) * 100;
var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve"
}
else if (percentage < 60) {
    grade = "Fail";
    remarks = "Sorry"
}
document.write("Total Marks: " + total_Marks + "<br>");
document.write("Marks Obtained: " + marks_Obtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");



//  TASK # 7

document.write("<h1>Task # 7: The guess Game</h1>");

var user_guess = prompt("Guessing a secret number from 1 to 10");

if (user_guess > 10 || user_guess == "") {
    for (i = 0; ; i++) {
        alert("Please Enter a number from 1 to 10")
        user_guess = prompt("Guessing a secret number from 1 to 10");
        if (user_guess == "") {
            alert("Please Enter a Number")
        }
        else if (user_guess <= 10) {
            break;
        }
    }
}
var sec_Number = 4;
if (user_guess == sec_Number) {
    alert("“Bingo! Correct answer");
}
else if (user_guess == (sec_Number + 1)) {
    alert("Close enough to the correct answer")
}
else if (user_guess == (sec_Number - 1)) {
    alert("Close enough to the correct answer")
}
else {
    alert("Try again")
}



//  TASK # 8

document.write("<h1>Task # 8</h1>");

var number = Number(prompt("Enter any number."));
var result = number % 3;
if (result === 0) {
    alert(number + " is divisible by 3")
}
else {
    alert(number + " is not divisible by three.")
}



//  TASK # 9

document.write("<h1>Task # 9</h1>");


var user_input = Number(prompt("Enter any number for checking even or odd."));
var check = user_input % 2;
if (check === 0) {
    alert(user_input + " is an even numnber.")
}
else {
    alert(user_input + " is an odd number.")
}



//  TASK # 10

document.write("<h1>Task # 10</h1>");

var temperature = prompt("Enter today;s temperature.");
if (temperature > 40) {
    alert("It is too hot outside.")
}
else if (temperature > 30) {
    alert("The Weather today is Normal")
}
else if (temperature > 20) {
    alert("Today's Weather is cool.")
}
else if (temperature > 10) {
    alert("OMG! Today's Weather is so Cool.")
}



//  TASK # 11

document.write("<h1>Task # 11</h1>");

var first_Number = Number(prompt("Enter first number."));
var operator = prompt("Enter Operator.");
var second_Number = Number(prompt("Enter Second Number."));
var calculated_Result;
if (operator === "+") {
    calculated_Result = first_Number + second_Number;
}
else if (operator === "-") {
    calculated_Result = first_Number - second_Number;
}
else if (operator === "x" || operator === "*") {
    calculated_Result = first_Number * second_Number;
}
else if (operator === "/") {
    calculated_Result = first_Number / second_Number;
}
else if (operator === "%") {
    calculated_Result = first_Number % second_Number;
}
alert(first_Number + " " + operator + " " + second_Number + " = " + calculated_Result)