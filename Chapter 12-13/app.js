//  TASK # 1



var character = prompt("Enter any Character or number from 1 to 9");
var ASCII_Code = character.charCodeAt(0);
if (ASCII_Code >= 65 && ASCII_Code <= 90) {
    alert("The given input is an Uppercase Letter.")
}
else if (ASCII_Code >= 97 && ASCII_Code <= 122) {
    alert("The given input is an Lowercase Letter.")
}
else if (ASCII_Code >= 48 && ASCII_Code <= 57) {
    alert("The given input is a Number.")
}



//  TASK # 2

var integer_1 = Number(prompt("Enter First Integer."));
var integer_2 = Number(prompt("Enter Second Integer."));
if (integer_1 > integer_2) {
    alert(integer_1 + " is greater than " + integer_2 + ".\nInteger 1 =  " + integer_1 + "\nInteger 2 =  " + integer_2);
}
else if (integer_1 < integer_2) {
    alert(integer_1 + " is less than " + integer_2 + ".\nInteger 1 =  " + integer_1 + "\nInteger 2 = " + integer_2);
}
else {
    alert("Both the Integers are Equal.\nInteger 1 =  " + integer_1 + "\nInteger 2 = " + integer_2)
}




//  TASk # 3

var number = prompt("Enter any number.");
if (number > 0) {
    alert("The Number User entered is Positive.")
}
else if (number < 0) {
    alert("The Number User entered is Negative.")
}
else if (number == 0) {
    alert("The Number User entered is Zero.")
}



//  TASK # 4

var user_Character = prompt("Enter a character for checking It's a Vowel or Not.");
user_Character = user_Character.toLowerCase();
if (user_Character === "a" || user_Character === "e" || user_Character === "i" || user_Character === "o" || user_Character === "u") {
    alert(true);
    alert("It is a vowel.")
}
else {
    alert(false);
    alert("It is not a vowel.")
}



//  TASK # 5


var correct_password = "123456";
var user_password = prompt("Please Enter Your Password.");
if (user_password === "") {
    alert("Please Enter Your Password.");
    for (i = 0; ; i++) {
        if (user_password === "") {
            var user_password = prompt("Please Enter Your Password.");

            if (user_password === correct_password) {
                alert("Correct! The password you entered matches the original password");
                break;
            }
            else if (user_password !== correct_password && user_password !== "") {
                alert("Incorrect Password");
                break;
            }
            alert("Please Enter Your Password.");

        }

    }
}
else if (user_password === correct_password) {
    alert("Correct! The password you entered matches the original password");

}
else if (user_password !== correct_password && user_password !== "") {
    alert("Incorrect Password");

}



//  TASK # 6


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting)
}
else {
    greeting = "Good evening";
    alert(greeting)
}



//  TASK # 7

var time = Number(prompt("Enter time in 24 Hour Format."));
if (time > 0 && time <= 12) {
    alert("It's " + time + ":00 a.m");
}
else if (time > 12 && time <= 24) {
    alert("It's " + (time - 12) + ":00 p.m");
}