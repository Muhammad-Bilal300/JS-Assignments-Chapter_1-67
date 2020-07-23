// TASK # 1

// var first_Name = prompt("Enter First Name.");
// var last_Name = prompt("Enter Last Name.");
// var full_Name = first_Name + " " + last_Name;
// alert(full_Name);


//  TASK # 2


// var fav_Mobile = prompt("Enter Your Favourite Mobile Phone Model.");
// var len = fav_Mobile.length;
// document.write("My favourite Phone is: " + fav_Mobile + "<br>" + "Length of String : " + len + "<br><br><br>");


//  TASk # 3


var word = "Pakistani";
var index = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index + "<br><br><br>");
//  TASK # 4


var greet = "Hello World";
var ind = greet.lastIndexOf('l');
document.write("String: " + greet + "<br>");
document.write("Last index of 'l': " + ind + "<br><br><br>");


// TASK # 5

var str = "Pakistani";
var char_At_3rd = str.charAt(3);
document.write("String: " + str + "<br>");
document.write("Character at Index 3: " + char_At_3rd + "<br><br><br>");



//  TASK # 6

var f_Name = prompt("Enter First Name.");
var l_Name = prompt("Enter Last Name");
var ful_Name = f_Name.concat(" ", l_Name);
alert(ful_Name);


//  TASK # 7


// var city = "Hyderabad";
// var replace_Character = "Hyder";
// var len_replace_Character = replace_Character.length;
// var new_Character = "Islam";
// var after_replacement = new_Character + city.slice(len_replace_Character);
// document.write(after_replacement + "<br><br><br>");

var a = "Hyderabad";
var after_replace = a.replace("Hyder", "Islam");
document.write(after_replace + "<br><br><br>");


//  TASK # 8

var message = "Ali and Sami are best friends.They play cricket and football together.";
var new_Message = message.replace(/and/g, "&");
document.write(new_Message + "<br><br><br>");


// for (var i = 0; i < message.length; i++) {
//     var index = i;
//     copy = message.slice(i, i + 3);
//     if (copy === "and") {
//         message = message.slice(0, i) + "&" + message.slice(i + 3)
//     }

// }
// document.write(message)



//  TASK # 9


var str = "472";
document.write("Value: " + str + "<br>")
document.write("Type: " + typeof (str) + "<br>");
var str_to_Num = Number(str);
document.write("Value: " + str_to_Num + "<br>")
document.write("Type: " + typeof (str_to_Num) + "<br><br.<br>");


//  TASk # 10


var userInput = "peanuts";
document.write("User Input: " + userInput + "<br>")
var capital = userInput.toUpperCase();
document.write("Upper Case: " + capital + "<br><br><br>")



//  TASK # 11


var user_Input2 = "javascript";
document.write("User Input: " + user_Input2 + "<br>")
var firstChar = user_Input2.slice(0, 1);
firstChar = firstChar.toUpperCase();
var otherChars = user_Input2.slice(1)
otherChars = otherChars.toLowerCase();
var capCase = firstChar + otherChars;
document.write("Title Case: " + capCase + "<br><br><br>")


//  TASK # 12

var num = 35.36;
document.write("Number: " + num + "<br>")
var str = num.toString();
var num_Without_Dot = str.replace(".", "");
num_Without_Dot = Number(num_Without_Dot);
document.write("Result: " + num_Without_Dot + "<br><br><br>");



//  TASk # 13

// var user_Name = prompt("Enter Your Name / User Name");
// for (var i = 0; ; i++) {
//     code = user_Name.charCodeAt(i);
//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         alert("Please Enter a valid User Name.");
//         user_Name = prompt("Enter Your Name / User Name\nNote: It does Not contain characters like @,.!");
//     }

// }


//  TASk # 14



var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am.");
search = search.toLowerCase();
var matchFound = false;
for (var i = 0; i < A.length; i++) {
    if (search == A[i]){
        alert(search + " is available at index " + i + " in our bakery.");
        matchFound = true;
    }
}
if(matchFound == false){
    alert("We are sorry." + search + " is not available in our bakery.")
}
