var university = "University of Karachi";
var arr = university.split("");
for (var i = 0; i < arr.length; i++) {
    document.getElementById("output").innerHTML += arr[i] + "<br>";
}