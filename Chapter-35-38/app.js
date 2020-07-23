// TASK # 1
function CurrentDate() {
    var now = new Date;
    document.write("Current Date & Time: " + "<b>" + now + "<b>");
}
CurrentDate();


// TASK # 2
function greeting() {
    var name = prompt("Enter Name: ");
    var last = prompt("Enter Last Name: ");
    alert("Hello, " + name + " " + last);
}
greeting();


// TASK # 3
function AddNumber() {
    var name = prompt("Enter First Number: ");
    var last = prompt("Enter Second Number: ");
    return (+name) + (+last);
}
n = AddNumber();
alert(n);


// TASK # 4

function calculator(num1, num2, operator) {
    var num_1 = num1;
    var num_2 = num2;
    var _operator = operator;
    var result;
    if (_operator == "+") {
        result = num_1 + num_2
    }
    else if (_operator == "-") {
        result = num_1 - num_2
    }
    else if (_operator == "*" || _operator == "x") {
        result = num_1 * num_2
    }
    else if (_operator == "/") {
        result = num_1 / num_2
    }
    document.write("<h2>" + num_1 + _operator + num_2 + " = " + result + "<h2>")
}
calculator(Number(prompt("Enter First Number")), Number(prompt("Enter Second Number")), prompt("Enter Operator"));

// TASK # 5
function square(x){
    return "Square of "+x+" is "+((+x)*(+x))
}
document.write(square(5))

// TASK # 6
function factorial(num){
    var fact = 1;
    for(let i = 1; i<=num ; i++)
    {
        fact = fact * i;
    }
    return "Factorial of "+num+" is "+fact
}
document.write(factorial(5))

// TASK # 7
function Count(){
    num1 = prompt("Enter Starting Numevr: ");
    num2 = prompt("Enter Ending Numevr: ");
    for(num1; num1<=num2;num1++){
        document.write("Counting: "+num1 +"<br>")
    }
}
Count();

// TASK # 8
function hypotenuse(){
    base = prompt("Enter Base: ");
    perp =prompt("Enter Perpendicular: ");
    function square(num){return ((+num)*(+num))}
    base = square(base);
    perp = square(perp);
    return "Hypotenuse is : "+(Math.sqrt((+base)+(+perp))).toFixed(2)
}
document.write(hypotenuse())

// TASK # 9
function area_as_variable(){
    h = prompt("Enter Height: ");
    w = prompt("Enter Width: ");
    return "Area of rectangle is : "+((+h)*(+w))+"<br>"
}
function area_as_value(h,w){return "Area of rectangle is : "+((+h)*(+w))+"<br>"}
document.write(area_as_value(2,2)+area_as_variable())

// TASK # 10
function check_palindrome(str){
    var p="";
    for(i= ((+str.length)+1) ; i>=0; i--){
        p = p+str[i];
    }
    pe = p.replace(/undefined/g,"")

    if (pe==str){var res = str + " and " + pe +" is palindrome."}
    else{var res = str + " and " + pe +" is not palindrome."}
    return res
}
document.write(check_palindrome("madam"))

// TASK # 11
function FirstUpper(str){
    var str2 = str.split(' ');
    var p = " ";
    for (let i=0; i<str2.length; i++){
        var str3 = str2[i][0].toUpperCase()+str2[i].slice(1);
        p = p+str3+" ";
    }
    return p
}
document.write(FirstUpper("my name is muzammil"));

// TASK # 12
function longest(str){
    var str2 = str.split(' ');
    for (let i=0; i<(str2.length-1); i++){
        if (str2[i].length>str2[i+1].length){re = str2[i]}
        else { re = str2[i+1]}
    }
    return re
}
alert(longest("long longest longer"))

// TASK # 13
function FindNumberOfLetter(str,letter){
    var str1 = str.toLowerCase();
    var str2 = str1.split('');
    var count = 0;
    for (let i = 0 ; i<=str2.length ; i++){
        if (str2[i]==letter){ count = count+1 }
    }
    return "Most repeated '"+letter+"' in '"+str+ "' are "+count
}
document.write(FindNumberOfLetter("long longest longer","l"));

// TASK # 14
function calcCircumference(radius){
    return "Circumference of circle: "+ (2*(Math.PI)*(+radius)).toFixed(2)+"<br>"
}
function calcArea(radius){
    return "Area of circle: " +((Math.PI)*(+radius)*(+radius)).toFixed(2)+"<br>"
}
document.write(calcCircumference(5)+calcArea(5))