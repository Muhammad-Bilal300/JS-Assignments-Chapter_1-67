//  TASK # 1


var date = new Date();
document.write(date + "<br><br><br>");


//  TASK # 2


var month_Names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date_2 = new Date();
var mon = date_2.getMonth();
document.write("Current Month: " + month_Names[mon] + "<br><br><br>");


//  TASk # 3


var day_Names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date_3 = new Date();
var day = date_3.getDay();
document.write(day_Names[day] + "<br><br><br>");


//  TASK # 4


var date_4 = new Date();
var day_2 = date_4.getDay();
var day_Names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var new_day_Names = [];
for (var i = 0; i < day_Names.length; i++) {
    if (day_Names[i] === "Sun" || day_Names[i] === "Mon" || day_Names[i] === "Fri") {
        new_day_Names.push(day_Names[i] + "day");
    }
    else if (day_Names[i] === "Tue") {
        new_day_Names.push(day_Names[i] + "sday");

    }
    else if (day_Names[i] === "Wed") {
        new_day_Names.push(day_Names[i] + "nesday");

    }
    else if (day_Names[i] === "Thu") {
        new_day_Names.push(day_Names[i] + "rsday");

    }
    else if (day_Names[i] === "Sat") {
        new_day_Names.push(day_Names[i] + "urday");

    }
}
if (new_day_Names[day_2] === "Saturday" || new_day_Names[day_2] === "Sunday") {
    alert("It's Fun day.")
}
document.write("<br><br><br>");


//  TASK # 5


var date_5 = new Date();
var cur_date = date_5.getDate();
if (cur_date <= 15) {
    document.write("First Fifteen Days of the Month.");
    document.write("<br><br><br>")
}
else {
    document.write("Last Days Of the month.");
    document.write("<br><br><br>")
}


//  TASK # 6

var date_6 = new Date();
document.write("Current Date: " + date_6 + "<br>");
var time_in_msec = date_6.getTime();
document.write("Elapsed milliseconds since January 1,1970: " + time_in_msec + "<br>")
var time_in_Min = time_in_msec / (1000 * 60);
document.write("Elapsed Minutes since January1,1970: " + time_in_Min)


//  TASK # 7


var date_7 = new Date();
var hour = date_7.getHours();
if (hour < 12 && hour >= 0) {
    alert("Its AM")
}
else {
    alert("Its PM.")
}
document.write("<br><br><br>");



//  TASK # 8

var date_7 = new Date("Dec 31, 2020");
document.write(date_7 + "<br><br><br>");



//  TASK # 9


var _1st_Ramadan = new Date("Apr 23, 2020");
var current_date = new Date();
var days_Ramadan = _1st_Ramadan.getTime();
var current_time = current_date.getTime();
var days_passed = current_time - days_Ramadan;
days_passed = Math.floor(days_passed / (1000 * 60 * 60 * 24));
document.write(days_passed + " days have passed since 1st Ramadan, 2020." + "<br><br><br>");



//  TASK # 10


var date_8 = new Date("Jan 1,2020");
var ref_Date = new Date();
var time_In_date_8 = date_8.getTime();
var time_in_ref_Date = ref_Date.getTime();
var difference = time_in_ref_Date - time_In_date_8;
var time_In_Sec = Math.round(difference / (1000));
document.write("On reference date: " + date_8 + "<br>")
document.write("On Reference date: " + time_In_Sec + "<br><br><br>");


//  TASK # 11


var date_9 = new Date();
document.write("Current Date: " + date_9 + "<br>");
var hour = date_9.getHours();
var set_Hours = date_9.setHours(hour - 1);
document.write("1 hour ago, it was " + date_9 + "<br><br><br>")


//  TASK # 12


var date_10 = new Date();
var year = date_10.getFullYear();
document.write("Current Date: " + date_10 + "<br>");
var set_Year = date_10.setFullYear(year - 100);
document.write("100 years back, It was " + date_10 + "<br><br><br>");


//  TASK # 13

var date_11 = new Date();
var y = date_11.getFullYear();
var age = prompt("Enter Your age.");
document.write("Your age is " + age + "<br>");
var birth_Year = date_11.setFullYear(y - age);
document.write("Your birth year is " + birth_Year + "<br><br><br>");


//  TASK # 14


var customer_Name = prompt("Enter Your Name.It must contains Letters.");
var new_Customer_name = "";
for (var i = 0; ; i++) {
    if (customer_Name.charCodeAt(i) < 48 && customer_Name.charCodeAt(i) > 57) {
        new_Customer_name += customer_Name.charAt(i);

    }
    else if (customer_Name === "") {
        alert("Do not Leave Empty.Please Write Your Name.");
        customer_Name = prompt("Enter Your Name.It must contains Letters.");
        i = 0;
    }
    else if (customer_Name.charCodeAt(i) >= 48 && customer_Name.charCodeAt(i) <= 57) {
        alert("Please Use Letters For Your Name.");
        customer_Name = prompt("Enter Your Name.It must contains Letters.");
        i = 0
    }
    else if (i == customer_Name.length) {
        break;
    }

}
var monthNames = ["January", "February,", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
var now = new Date();
var mon = now.getMonth();
var mon_Name = monthNames[mon];
var no_of_Units = prompt("Enter No. Of Units.");
var correct = "";
for (var i = 0; ; i++) {
    if (no_of_Units.charCodeAt(i) >= 48 && no_of_Units.charCodeAt(i) <= 57) {
        correct = correct + no_of_Units.charAt(i);
        alert(correct)
    }
    else if (no_of_Units.charCodeAt(i) < 48 || no_of_Units.charCodeAt(i) > 57) {
        alert("Please Enter Number of Units in Digits.");
        no_of_Units = prompt("Enter No. Of Units.");
        correct = "";
        i = 0;
        
    }
    else {
        break
    }

}
alert(correct)
no_of_Units = Number(correct);
var charges_per_Unit = prompt("Enter Charge per unit.")
for (var i = 0; ; i++) {
    if (charges_per_Unit < 48 && charges_per_Unit > 57) {
        alert("Please Enter Number of Units in Digits.");

    }
    else {
        break;
    }
    no_of_Units = prompt("Enter No. Of Units.");

}
var net_Amount_To_pay = Number(no_of_Units) * Number(charges_per_Unit);
var late_Payment_Charge = 350;
var Gross_Amount = net_Amount_To_pay + late_Payment_Charge;
document.write("<h1>K-Electric Bill</h1>");
document.write("<br><br>");
document.write("Customer Name: <b>" + customer_Name + "</b><br>");
document.write("Month <b>" + mon_Name + "</b><br>");
document.write("Number of Units: <b>" + no_of_Units + "</b><br>");
document.write("Charges Per Unit: <b>" + charges_per_Unit + "</b><br>");
document.write("<br>");
document.write("Net Amount Payable (Within Due Date): <b>" + net_Amount_To_pay + "</b><br>");
document.write("Late Payment Surcharge: <b>" + late_Payment_Charge + "</b><br>");
document.write("Gross Amount Payable (After Due Date): <b>" + Gross_Amount + "</b><br>f")





