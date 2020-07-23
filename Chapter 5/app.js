//  TASK # 1

var first_Number = 3;
var second_Number = 5;
document.write("<h1>Task # 1 & 2</h1>")
document.write("Sum of " + first_Number + " and " + second_Number + " is <b><u>" + (first_Number + second_Number) + "</b></u><br>");
document.write("Subtraction of " + first_Number + " and " + second_Number + " is <b><u>" + (first_Number - second_Number) + "</b></u><br>")
document.write("Multiplication of " + first_Number + " and " + second_Number + " is <b><u>" + (first_Number * second_Number) + "</b></u><br>")
document.write("Division of " + first_Number + " and " + second_Number + " is <b><u>" + (first_Number / second_Number) + "</b></u><br>")
document.write("Modulus of " + first_Number + " and " + second_Number + " is <b><u>" + (first_Number % second_Number) + "</b></u><br>" + "<br>" + "<br>")


//  TASk # 3

document.write("<h1>Task # 3</h1>");

var number;
document.write("Value after variable declaration is " + number + "<br>");
number = 5;
document.write("Initial value " + number + "<br>");
number++;
document.write("Value after increment is : " + number + "<br>");
number = number + 7;
document.write("Value after addition is : " + number + "<br>");
number--;
document.write("Value after decrement is : " + number + "<br>");
number = number % 3;
document.write("The remainder is : " + number + "<br>" + "<br>" + "<br>");


//  TASK # 4

document.write("<h1>Task # 4 </h1>");

var ticket_Price = 600;
var no_of_Tickets = 5;
document.write("Price of 1 ticket is : " + ticket_Price + "<br>");
document.write("Total No. of Tickets are : " + no_of_Tickets + "<br>")
document.write("Total cost to buy " + no_of_Tickets + " tickets to a movie is " + (ticket_Price * no_of_Tickets) + " PKR" + "<br>" + "<br>");


//  TASK # 5

document.write("<h1>Task # 5</h1>");

var table_Number = 5;
document.write("Table of  " + table_Number + "<br>");
document.write(table_Number + " x 1 = " + (table_Number * 1) + "<br>");
document.write(table_Number + " x 2 = " + (table_Number * 2) + "<br>");
document.write(table_Number + " x 3 = " + (table_Number * 3) + "<br>");
document.write(table_Number + " x 4 = " + (table_Number * 4) + "<br>");
document.write(table_Number + " x 5 = " + (table_Number * 5) + "<br>");
document.write(table_Number + " x 6 = " + (table_Number * 6) + "<br>");
document.write(table_Number + " x 7 = " + (table_Number * 7) + "<br>");
document.write(table_Number + " x 8 = " + (table_Number * 8) + "<br>");
document.write(table_Number + " x 9 = " + (table_Number * 9) + "<br>");
document.write(table_Number + " x 10 = " + (table_Number * 10) + "<br>");


//  TASK # 6


document.write("<h1>Task # 6: Temperature Converter</h1>")

var temp_in_Celsius = 25;
var temp_in_Fahrenheit = 70;
var celsius_Into_Fahrenheit = (temp_in_Celsius * (9 / 5) + 32);
var Fahrenheit_Into_Celsius = ((temp_in_Fahrenheit - 32) * (5 / 9));
document.write(temp_in_Celsius + "&degC is " + celsius_Into_Fahrenheit + "&degF" + "<br>");
document.write(temp_in_Fahrenheit + "&degF is " + Fahrenheit_Into_Celsius + "&degC" + "<br>");


//  TASK # 7

document.write("<h1>Task # 7: Shipping Cart</h1>");


var price_of_1st_Item = 650;
var quantity_of_1st_Item = 3;
var price_of_2nd_Item = 100;
var quantity_of_2nd_Item = 2;
var shipping_Charges = 100;
var total_Cost = (price_of_1st_Item * quantity_of_1st_Item) + (price_of_2nd_Item * quantity_of_2nd_Item)
document.write("Price of Item 1 is " + price_of_1st_Item + "<br>");
document.write("Quantitu of Item 1 is" + quantity_of_1st_Item + "<br>");
document.write("Price of Item 2 is " + price_of_2nd_Item + "<br>");
document.write("Quantity of Item 2 is " + quantity_of_2nd_Item + "<br>");
document.write("Shipping Charges are" + shipping_Charges + "<br>" + "<br>");

document.write("Total cost of your order is " + total_Cost + "<br>" + "<br>");


//  TASK # 8

document.write("<h1>Task # 8: Marks Sheet</h1>");

var total_Marks = 1000;
var marks_Obtained = 855;
var percentage = (marks_Obtained / total_Marks) * 100;
document.write("Total Marks: " + total_Marks + "<br>");
document.write("Marks Obtained: " + marks_Obtained + "<br>");
document.write("Percentage: " + percentage + "<br>" + "<br>" + "<br>");

// TASK # 9

document.write("<h1>Task # 9: Currency in PKR</h1>");

var Qty_of_US_Dollars = 10;
var Qty_of_Saudi_Riyals = 25;
var price_of_1_US_Dollar_in_PKR = 163.3;
var price_of_1_Saudi_Riyal_in_PKR = 43.82;
var total_Currency = (Qty_of_US_Dollars * price_of_1_US_Dollar_in_PKR) + (Qty_of_Saudi_Riyals * price_of_1_Saudi_Riyal_in_PKR);
document.write("Total Currency in PKR: " + total_Currency + "<br><br>");


//  TASK # 10

document.write("<h1>Task # 10</h1>");

var number = 10;
number = ((number + 5) * 10) / 2;
document.write("The final result is: " + number + "<br><br>");

//  TASK # 11

document.write("<h1>Task # 11: The Age Calculator</h1>");

var current_Year = 2020;
var birth_Year = 2001;
var age = current_Year - birth_Year;
document.write("Current Year: " + current_Year + "<br>");
document.write("Birth Year: " + birth_Year + "<br>");
document.write("Your Age is: " + age);


//  TASk # 12

document.write("<h1>Task # 12: The Geometrizer</h1>");

var radius = 20;
var pi = 3.142;
var circumference_of_Circle = 2 * pi * radius;
var area_of_Circle = pi * (radius * radius);
document.write("Radius of Circle is: " + radius + "<br>");
document.write("The circumference is: " + circumference_of_Circle + "<br>");
document.write("The area is: " + area_of_Circle + "<br>");


//  TASK # 13

document.write("<h1>Task # 13: The Lifetime Supply Calculator</h1>");

var fav_Snack = "Chocolate Chip";
var current_age = 19;
var maximum_age = 70;
var no_of_snacks_per_day = 5;
var total_snacks_in_Life = (maximum_age - current_age) * 365 * no_of_snacks_per_day;
document.write("You will need " + total_snacks_in_Life + " " + fav_Snack + " to last you until the ripe old age of " + maximum_age)
