// index.js - Lab 13: Loops
// Author: Sterling Lazarus 
// Date: 11/18//2024

// Code 

function fizzBuzzBoom() {
  // Initialize an empty string to hold the final output
  let oneLongString = "";

  // Loop through numbers from 1 to 200
  for (let num = 1; num <= 200; num++) {
      let str = ""; // Initialize an empty string for each number

      // Check divisibility and append corresponding words
      if (num % 3 === 0) str += "Fizz";
      if (num % 5 === 0) str += "Buzz";
      if (num % 7 === 0) str += "Boom";
      if (num % 9 === 0) str += "Bam";

      // If no words were added, assign "nothing here" to str
      if (str === "") {
        str = "nothing here!";
    }

      // Append the number and result, followed by a line break
      oneLongString += `${num} ${str}<br>`;
  }

  // Output the final string to the div with ID "output"
  $("#output").html(oneLongString);
}

// Call the function to run it
fizzBuzzBoom();

// code courtesy of Wes Modes and ChatGPT (modified by Sterling Lazarus)