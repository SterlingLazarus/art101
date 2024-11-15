// index.js - Lab 12: Conditionals
// Author: Sterling Lazarus 
// Date: 11/6//2024

// Code 

function sortingHat(str) {
  let len = str.length;
  let mod = len % 3;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
  return "Ravenclaw"
}
  else if (mod == 2) {
  return "Slytherin"
}
  else if (mod == 3) {
  return "Hufflepuff"
}
}

var myButton = document.getElementById ("submit");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p class='sorted-text'>" + name + " has been sorted into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})

// code courtesy of Wes Modes and ChatGPT (modified by Sterling Lazarus)