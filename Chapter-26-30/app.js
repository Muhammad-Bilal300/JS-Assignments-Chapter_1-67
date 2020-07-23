// //  TASK # 1

// var pos_Num = prompt("Enter any positive number.");
// for (var i = 0; ; i++) {
//     if (pos_Num <= 0) {
//         alert("Please Enter any Positive Number/ greater than 0.")
//         pos_Num = prompt("Enter any positive number.");
//     }
//     else {
//         break;
//     }
// }
// pos_Num = Number(pos_Num);
// document.write("Number: " + pos_Num + "<br>");
// var round_Value = Math.round(pos_Num);
// document.write("Round Off Value: " + round_Value + "<br>");
// var floor_Value = Math.floor(pos_Num);
// document.write("Floor Value: " + floor_Value + "<br>");
// var ceil_Value = Math.ceil(pos_Num);
// document.write("Ceil Value: " + ceil_Value + "<br><br><br>");


// //  TASK # 2

// var neg_Num = prompt("Enter any negative number.");
// for (var i = 0; ; i++) {
//     if (neg_Num >= 0) {
//         alert("Please Enter any Negative Number/ less than 0.")
//         neg_Num = prompt("Enter any positive number.");
//     }
//     else {
//         break;
//     }
// }
// neg_Num = Number(neg_Num);
// document.write("Number: " + neg_Num + "<br>");
// var round_Value_2 = Math.round(neg_Num);
// document.write("Round Off Value: " + round_Value_2 + "<br>");
// var floor_Value_2 = Math.floor(neg_Num);
// document.write("Floor Value: " + floor_Value_2 + "<br>");
// var ceil_Value_2 = Math.ceil(neg_Num);
// document.write("Ceil Value: " + ceil_Value_2 + "<br><br><br>");



//  TASK # 3


var val = -4;
document.write("The value is: " + val + "<br>")
var abs_val = (val * val) / -(val);
document.write("The absolute value of -4 is " + abs_val + "<br><br><br>");


//  TASK # 4


var big_decimal = Math.random();
var dice_Num = (big_decimal * 6) + 1;
dice_Num = Math.floor(dice_Num);
document.write("Random dice value: " + dice_Num + "<br><br><br>");


//  TASK # 5


var random = Math.random();
var heads_tails = (random * 2) + 1;
heads_tails = Math.floor(heads_tails);
if (heads_tails == 1) {
    document.write(heads_tails + "<br>")
    document.write("Random coin value: Tails")

}

if (heads_tails == 2) {
    document.write(heads_tails + "<br>")
    document.write("Random coin value: Heads")

}
document.write("<br><br><br>")



//  TASK # 6


var dec = Math.random();
var num = (dec * 100) + 1;
num = Math.floor(num);
document.write("Random number between 1 and 100: " + num + "<br><br><br>");


//  TASK # 7


// var weight = prompt("Enter your Weight in Kilograms.");
// var copy = "";
// for (var i = 0; i < weight.length; i++) {
//     code = weight.charCodeAt(i)
//     if (weight.charCodeAt(i) >= 48 && weight.charCodeAt(i) <= 57 || weight.charCodeAt(i) == 46) {
//         char = weight.charAt(i);
//         copy = copy + char;
//     }
// }
// var abc = Number(copy);
// document.write("The weight of user is " + abc + " kilograms.");
// document.write("<br><br><br>")



//  TASK # 8


var secret = Math.random();

secret = (secret * 10) + 1;
secret = Math.floor(secret);
var userNum = prompt("Enter any Number To Check.");
if(userNum == secret){
    alert("Congratulations");
}
else{
    alert("Try Again")
}

