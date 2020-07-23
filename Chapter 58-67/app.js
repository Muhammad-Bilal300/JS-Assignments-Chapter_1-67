//  Task # 1

// i)
var main = document.getElementById("main-content").children;

// ii)
var txt = "";
for (i = 0; i < main.length; i++) {
    txt = txt + main[i].tagName + "<br>";
}
document.getElementById("disply").innerHTML = txt + "<br><br>";

// iii)
var ele = document.getElementsByClassName("render");
var txt = "";
for (i = 0; i < ele.length; i++) {
    txt = txt + ele[i].innerHTML + "<br>";
}
document.getElementById("displyinner").innerHTML = txt;

// iv)
document.getElementById("first-name").value = "Muhammad Bilal";

// v)
document.getElementById("last-name").value = "Ibrahim";
document.getElementById("email").value = "bilalaarbi300@gmail.com";

// Task 2


// i)
node_of_form = document.getElementById("form-content").nodeType;
last = document.getElementById("lastName");
node_of_last = last.nodeType;
node_child = last.childNodes[0].nodeType;
txt = "";
if (node_of_form == 1) {
    txt += "<br>form-element = " + node_of_form + " which is Element Node <br><br>";
}

// ii)
if (node_of_last == 1) {
    txt += "lastName = " + node_of_last + " which is Element Node <br>";
    txt += "child of lastName = " + node_child + " which is Text Node <br><br>";
}

// iii)
var textnode = document.createTextNode("Last Name: Danish");
var item = last;
item.replaceChild(textnode, last.childNodes[0]);

// iv)
txt += "First child of main-content : " + document.getElementById("main-content").firstChild.nodeName + "<br>";
txt += "Last child of main-content : " + document.getElementById("main-content").lastChild.nodeName + "<br><br>";

// v)
txt += "Next Sibling of lastName : " + document.getElementById("lastName").nextSibling.nodeName + "<br>";
txt += "Previous Sibling of lastName : " + document.getElementById("lastName").previousSibling.nodeName + "<br><br>";

// vi)
txt += "Parent Node of email : " + document.getElementById("email").parentNode.nodeName + "<br>";
txt += "Node Type of email : " + document.getElementById("email").nodeType + " which is Element Node<br>";
document.getElementById("nodetps").innerHTML = txt;