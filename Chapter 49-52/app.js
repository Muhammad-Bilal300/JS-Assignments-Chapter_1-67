//  Task  1

var url_string = window.location.href;
var url = new URL(url_string);
var name = url.searchParams.get("name");
var email = url.searchParams.get("email1");
var pass = url.searchParams.get("password");
document.getElementById("namef").innerHTML = name;
document.getElementById("emailf").innerHTML = email;
document.getElementById("passf").innerHTML = pass;


// Task # 2
function LoadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("LoadBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}

// Task # 3

persons = [
    {name: "Basit", class: "10th"},
    {name: "Muzammil", class: "10th"},
    {name: "Bilal", class: "10th"},
]
LoadTableData();

function LoadTableData()
{
    var html = "<table><tr><th>Index</th><th>Name</th><th>Class</th><th></th></tr>";
    for (var i = 0; i < persons.length ; i++)
    {
    html += "<tr>";
    html += "<td>" + i + "</td>";
    html += "<td>" + persons[i].name + "</td>";
    html += "<td>" + persons[i].class + "</td>";
    html += "<td><button onClick='func("+i+")'>Delete</button></td>";
    html += "</tr>"
    }
    html += "</table>";
    document.getElementById("tblData").innerHTML = html;
}

function func(id)
{
    persons.splice(id,1);
    LoadTableData();
    
}


function addData()
{
    var name = document.getElementById("stdName").value;
    var cass = document.getElementById("stdClass").value;;
    persons.push({name: name, class: cass});
    LoadTableData();
    document.getElementById("stdName").value = "";
    document.getElementById("stdClass").value = "";
}
