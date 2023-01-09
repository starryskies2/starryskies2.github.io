/** @format */

function login() {
  var Username = document.getElementById("username");
  var Password = document.getElementById("password");
  if (Password.value !== "24" && Username.value !== "Maria") {
    alert("Incorrect username or passwrd please verify them and try again");
  } else {
    alert("well done you logged into the website");
    showpics();
  }
}

function showpics() {
  //show the suprise
  var y = document.getElementById("bdaypic1");
  y.style.display = "block";
}

function popup() {
  var y = document.getElementById("clue");
  if ((y.style.display = "none"))
   y.style.display = "block";
  else {
    y.style.display = "none";
  }
}
