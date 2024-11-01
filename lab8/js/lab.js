// index.js - Lab 8 - Anon Functions and Callbacks
// Author: Sterling Lazarus 
// Date: 10/31/2024

// Code 

function isOne(x) {
    return (x === 1);
}

console.log("is one, one?", isOne(1));
console.log("is two, one?", isOne(2));

array = [200, 40, 60, 1, 28, 8]

console.log("My Array", array);

var result = array.map(isOne);

console.log("Are any of these numbers equal to one?", result);

var multiply = array.map(function(x){
    return x * 4;
})

console.log("Array times 4", multiply);