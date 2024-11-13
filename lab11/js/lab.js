// index.js - Lab 11: JavaScript Events and Forms
// Author: Sterling Lazarus 
// Date: 11/6//2024

// Code 

// Sorts the characters of a string in alphabetical order
function sortString(inputString) {
  return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit").click(function(){
  // Get value of the input field
  const userName = $("#user-name").val();

  // If the input field is not empty, sort and display the result
  if (userName) {
    const userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  } else {
    // Display a message if the input field is empty
    $("#output").html('<div class="text"><p>Please enter a username.</p></div>');
  }
});

// code courtesy of Wes Modes and ChatGPT (modified by Sterling Lazarus)