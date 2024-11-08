// index.js - Lab 10: JavaScript for the Web
// Author: Sterling Lazarus 
// Date: 11/6//2024

// Code 

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 20;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.slice(randStart, randStart + randLen);
  }

$("#make-convo").click(function(){
  
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

// code courtesy of Wes Modes (modified slightly by Sterling Lazarus)