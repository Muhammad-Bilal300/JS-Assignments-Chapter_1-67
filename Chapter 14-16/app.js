//  TASK # 1


var arr = [];


//  TASK # 2


var arr_Obj = new Array();


//  TASK # 3


var str_arr = ["Bilal", "Danish", "Ibrahim", "Saleem", "Ismail"];



//  TASK # 4


var num_arr = [10, 20, 30, 40, 50, 60];



//  TASK # 5


var bool_arr = [true, false];


//  TASK # 6


var mixed_arr = [10, 20, "Bilal", true, "Danish", "Muzammil", 30, false];


//  TASK # 7


document.write("<h1>Task # 7</h1>")

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("1) " + qualifications[0] + "<br>");
document.write("2) " + qualifications[1] + "<br>");
document.write("3) " + qualifications[2] + "<br>");
document.write("4) " + qualifications[3] + "<br>");
document.write("5) " + qualifications[4] + "<br>");
document.write("6) " + qualifications[5] + "<br>");
document.write("7) " + qualifications[6] + "<br>");
document.write("8) " + qualifications[7] + "<br><br><br><br>");


// TASK # 8

document.write("<h1>Task # 8</h1>");

var stu_Names = ["Bilal", "Danish", "Rizwan"];
var stu_Scores = [320, 230, 480];
var total_Marks = 500;

document.write("Score of " + stu_Names[0] + " is " + stu_Scores[0] + ".Percentage: " + ((stu_Scores[0] / total_Marks) * 100) + "%<br>");
document.write("Score of " + stu_Names[1] + " is " + stu_Scores[1] + ".Percentage: " + ((stu_Scores[1] / total_Marks) * 100) + "%<br>");
document.write("Score of " + stu_Names[2] + " is " + stu_Scores[2] + ".Percentage: " + ((stu_Scores[2] / total_Marks) * 100) + "%<br>");


//  TASK # 9


document.write("<h1>Task # 9</h1>");

var color_Names = ["Red", "Orange", "Blue"];
document.write(color_Names + "<br>");
var Element_at_Start = prompt("Enter a Color to add to the Beginning of the Color Names.");
color_Names.unshift(Element_at_Start)
document.write(color_Names + "<br>");
var Element_at_End = prompt("Enter a Color to add to the End of the Color Names.");
color_Names.push(Element_at_End)
document.write(color_Names + "<br>");
for (i = 0; i < 2; i++) {
    var two_Ele_at_Start = prompt("Enter two Colors to add to the Beginning of the Color Names.");

    color_Names.unshift(two_Ele_at_Start)
}
document.write(color_Names + "<br>");
color_Names.shift();
document.write(color_Names + "<br>");
color_Names.pop();
document.write(color_Names + "<br>");
var at_what_Index = prompt("At which Index you want to add The color.");
var ASCII_Code = at_what_Index.charCodeAt(0);
alert(ASCII_Code)
if (ASCII_Code < 48 || ASCII_Code > 57 || ASCII_Code === "") {
    alert("Please Enter a digit number for specifying Indexes.");
    for (i = 0; ; i++) {
        at_what_Index = prompt("At which Index you want to add The color.");
        ASCII_Code = at_what_Index.charCodeAt(0);
        if (ASCII_Code >= 48 && ASCII_Code <= 57) {
            break;
        }
        alert("Please Enter a digit number for specifying Indexes.");
    }
}
var add_at_Index = prompt("Enter a Color name to place at your desired location.");
color_Names.splice(at_what_Index, 0, add_at_Index);
document.write(color_Names + "<br>");
var del_at_what_Index = prompt("At which Index you want to delete The colors.");
var ASCII_Code_2 = del_at_what_Index.charCodeAt(0);
alert(ASCII_Code_2)
if (ASCII_Code_2 < 48 || ASCII_Code_2 > 57 || ASCII_Code_2 === "") {
    alert("Please Enter a digit number for specifying Indexes.");
    for (i = 0; ; i++) {
        del_at_what_Index = prompt("At which Index you want to add The color.");
        ASCII_Code_2 = del_at_what_Index.charCodeAt(0);
        if (ASCII_Code_2 >= 48 && ASCII_Code_2 <= 57) {
            break;
        }
        alert("Please Enter a digit number for specifying Indexes.");
    }
}
var no_Of_Items = prompt("Enter No.of Items to Delete the colors.");
if (no_Of_Items > 1) {
    color_Names.splice(del_at_what_Index, no_Of_Items);
}
else {
    color_Names.splice(del_at_what_Index, no_Of_Items);
}
document.write(color_Names + "<br>")



//  TASK # 10;

document.write("<h1>Task # 10</h1>");

var scores = [320, 230, 1200, 480];
// scores.splice
document.write("Scores Of Students: " + scores + "<br>");
var index;
var ascending_order = [];
var largest = scores[0];
for (j = 0; j < scores.length; j++) {

    largest = scores[0]
    for (i = 0; i < scores.length; i++) {
        if (largest < scores[i]) {
            largest = scores[i];

        }




    }
    index = scores.indexOf(largest);
    document.write(index + "<br>");


}
document.write(scores + "<br>")



//  TASK # 11


document.write("<h1>Task # 11</h1>");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities List: <br>" + cities + "<br><br>");
var selected_Cities = cities.slice(2, 5);
document.write("Selected Cities List: <br>" + selected_Cities + "<br><br>" + "<br><br>");


//  TASK # 12


document.write("<h1>Task # 12</h1>");

var arr = ["This", "is", "my", "cat"];
document.write("Array: <br>" + arr + "<br><br>");
var str = arr.join(" ");
document.write("String: <br>" + str + "<br><br>");


//  TASK # 13

document.write("<h1>Task # 13</h1>");

var FIFO = [];
FIFO.push("Keyboard");
document.write(FIFO + "<br>");
FIFO.push("Mouse");
document.write(FIFO + "<br>");
FIFO.push("Printer");
document.write(FIFO + "<br>");
FIFO.push("Monitor");
document.write(FIFO + "<br><br>");
var out = FIFO.shift();
document.write("Out:<br>" + out + "<br>");
document.write(FIFO + "<br>");
out = FIFO.shift();
document.write("Out:<br>" + out + "<br>");
document.write(FIFO + "<br>");
out = FIFO.shift();
document.write("Out:<br>" + out + "<br>");
document.write(FIFO + "<br>");
out = FIFO.shift();
document.write("Out:<br>" + out + "<br>");
document.write(FIFO + "<br>");


//  TASK # 14

document.write("<h1>Task # 14</h1>");

var LIFO = [];
LIFO.push("Keyboard");
document.write(LIFO + "<br>");
LIFO.push("Mouse");
document.write(LIFO + "<br>");
LIFO.push("Printer");
document.write(LIFO + "<br>");
LIFO.push("Monitor");
document.write(LIFO + "<br><br>");
var out = LIFO.pop();
document.write("Out:<br>" + out + "<br>");
document.write(LIFO + "<br>");
out = LIFO.pop();
document.write("Out:<br>" + out + "<br>");
document.write(LIFO + "<br>");
out = LIFO.pop();
document.write("Out:<br>" + out + "<br>");
document.write(LIFO + "<br>");
out = LIFO.pop();
document.write("Out:<br>" + out + "<br>");
document.write(LIFO + "<br>");



//  TASK # 15

document.write("<h1>Task # 15</h1>");

var phone_Manufactures = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"];
document.write(`
<select name="mobile_Companies" id="">
        <option value="${phone_Manufactures[0]}">${phone_Manufactures[0]}</option>
        <option value="${phone_Manufactures[1]}">${phone_Manufactures[1]}</option>
        <option value="${phone_Manufactures[2]}">${phone_Manufactures[2]}</option>
        <option value="${phone_Manufactures[3]}">${phone_Manufactures[3]}</option>
        <option value="${phone_Manufactures[4]}">${phone_Manufactures[4]}</option>
        <option value="${phone_Manufactures[5]}">${phone_Manufactures[5]}</option>
    </select>`)