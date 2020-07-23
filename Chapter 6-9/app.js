//  TASK # 1

document.write("<h1>Task # 1</h1>");

var a = 10;
document.write("The value of a is: " + a + "<br>");
++a;
document.write("Now the value of a is: " + a + "<br>");
a++;
document.write("Now the value of a is: " + a + "<br>");
--a;
document.write("Now the value of a is: " + a + "<br>");
a--;
document.write("Now the value of a is: " + a + "<br><br>");


//  TASK # 2

document.write("<h1>Task # 2</h1>");

var a = 2;
var b = 1;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("Result is: " + result + "<br><br>");


//  TASK # 3

document.write("<h1>Task # 3</h1>");

var name = prompt("Enter Your Name.");
alert("Hello " + name);
document.write("Hello " + name + "<br><br>");


//  TASk # 4

var table_Number = Number(prompt("Enter any Number", 5));
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


//  TASK # 5

document.write("<h1>Task # 5</h1>");

var sub_1 = prompt("Enter 1st Subject Name.");
var sub_2 = prompt("Enter 2nd Subject Name.");
var sub_3 = prompt("Enter 3rd Subject Name.");
var total_Marks_per_Sub = 100;
var marks_Obtained_of_1st_Sub = Number(prompt("Enter " + sub_1 + " Marks"));
var marks_Obtained_of_2nd_Sub = Number(prompt("Enter " + sub_2 + " Marks"));
var marks_Obtained_of_3rd_Sub = Number(prompt("Enter " + sub_3 + " Marks"));
var percentage_oF_1st_Sub = (marks_Obtained_of_1st_Sub / total_Marks_per_Sub) * 100;
var percentage_oF_2nd_Sub = (marks_Obtained_of_2nd_Sub / total_Marks_per_Sub) * 100;
var percentage_oF_3rd_Sub = (marks_Obtained_of_3rd_Sub / total_Marks_per_Sub) * 100;
var total_Marks = total_Marks_per_Sub * 3;
var total_Obtained_Marks = marks_Obtained_of_1st_Sub + marks_Obtained_of_2nd_Sub + marks_Obtained_of_3rd_Sub;
var final_Percentage = (total_Obtained_Marks / total_Marks)*100;
document.write(`<table>
<tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
</tr>
<tr>
    <td>${sub_1}</td>
    <td>${total_Marks_per_Sub}</td>
    <td>${marks_Obtained_of_1st_Sub}</td>
    <td>${percentage_oF_1st_Sub}%</td>
</tr>
<tr>
    <td>${sub_2}</td>
    <td>${total_Marks_per_Sub}</td>
    <td>${marks_Obtained_of_2nd_Sub}</td>
    <td>${percentage_oF_2nd_Sub}%</td>
</tr>
<tr>
    <td>${sub_3}</td>
    <td>${total_Marks_per_Sub}</td>
    <td>${marks_Obtained_of_3rd_Sub}</td>
    <td>${percentage_oF_3rd_Sub}%</td>
</tr>
<tr>
    <th></th>
    <th><b>${total_Marks}</b></th>
    <th><b>${total_Obtained_Marks}</b></th>
    <th><b>${final_Percentage}%</b></th>
</tr>
</table>
`)
