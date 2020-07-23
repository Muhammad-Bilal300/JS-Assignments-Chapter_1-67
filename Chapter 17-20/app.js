//  TASK # 1


document.write("<h1>Task # 1</h1>");

var multi_Arr = [[]];


//  TASK # 2



document.write("<h1>Task # 2</h2>");

var multi_Arr_2 = [
    [1, 2, 3],
    [0, 1, 2],
    [1, 0, 1]
];
for (i = 0; i < multi_Arr_2.length; i++) {
    document.write(i + " ")
    for (j = 0; j < multi_Arr_2[i].length; j++) {
        document.write(multi_Arr_2[i][j] + " ")
    }
    document.write("<br>")
}



//  TASK # 3

document.write("<h1>Task # 3</h1>");

for (i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}



//  TASK # 4

document.write("<h1>Task # 4</h1>");

var table_Number = Number(prompt("Enter Table Number."));

if (table_Number === "" || table_Number === 0) {
    alert("Please Enter valid Table Number in digits");
    for (i = 0; ; i++) {
        table_Number = Number(prompt("Enter Table Number"));
        if (table_Number === "" || table_Number === 0) {
            alert("Please Enter valid Table Number in Digits");
        }
        else {
            break;
        }


    }
}
var table_Length = Number(prompt("Enter Table Length"));
if (table_Length === "" || table_Length === 0) {
    alert("Please Enter valid Table Length in Numbers");
    for (i = 0; ; i++) {
        table_Length = Number(prompt("Enter Table Length"));
        if (table_Length === "" || table_Length === 0) {
            alert("Please Enter valid Table Length in Numbers");

        }
        else {
            break;
        }
    }
}
for (a = 1; a <= table_Length; a++) {
    document.write(table_Number + " x " + a + " = " + (table_Number * a) + "<br>");
}




//  TASK # 5


document.write("<h1>Task # 5</h1>");

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}
document.write("<br>")
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
}




//  TASK # 6

document.write("<h1>Task # 6</h1>");

document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>")
document.write("Reverse Counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");
document.write("Even: ");
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ", ")
    }
}
document.write("<br>");
document.write("Odd: ");
for (var i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        document.write(i + ", ")
    }
}
document.write("<br>");
document.write("Series: ");
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k, ")
    }
}
document.write("<br>");




//  TASK # 7


document.write("<h1>Task # 7</h1>");

var bakery_Items = ["cake", "apple pie", "cookie", "chips", "patties"];
var matchFound = false
var search_Item = prompt("Welcome to A'arbi Bakery.What do you want to order Sir/Ma'am?");
search_Item = search_Item.toLowerCase();
for (var i = 0; i < bakery_Items.length; i++) {
    if (search_Item === bakery_Items[i]) {
        matchFound = true
        alert(search_Item + " is available at index " + i + " in our Bakery.")
    }
}
if (matchFound === false) {
    alert("We are sorry." + search_Item + " is not available in our Bakery.")
}


//  TASK # 8

document.write("<h1>Task # 8</h1>");

var arr = [24, 53, 78, 91, 12]
document.write("Array Items: " + arr + "<br>")
var largest = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
document.write("The Largest Number is " + largest);


//  TASK # 9

document.write("<h1>Task # 9</h1>");

var arr = [24, 53, 78, 91, 12]
document.write("Array Items: " + arr + "<br>")
var smallest = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (largest > arr[i]) {
        smallest = arr[i];
    }
}
document.write("The Smallest Number is " + smallest);


//  TASK # 10


document.write("<h1>Task # 10</h1>")

for (var i = 5; i <= 100; i += 5) {
    document.write(i + ", ")
}

