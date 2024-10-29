// index.js - Lab 7 - Functions
// Author: Sterling Lazarus 
// Date: 10/28/2024

// Code Test


function sortUserName() {
    let userName = prompt("type your name here:", "Richard");
    console.log("userName =", userName);
    let sortedName = userName.split("").sort().join("");
    // joined all the methods together instead of leaving them seperate 
    return sortedName;
}

document.writeln("Your name alphabetically is: " + sortUserName() + ". Useful, huh?");
