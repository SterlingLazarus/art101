// index.js - Lab 6 - Arrays and Objects
// Author: Sterling Lazarus 
// Date: 10/26/2024

// Objects
myMainRide = {
    make:"Acura",
    model: "MDX",
    color: "Black",
    year: 2005,
    age: function() {
        return 2024 - this.year;
    }
}

// Variables
myTransport = ["Car", "bus", "bike"];

document.writeln("Transportation that I take on a weekly basis: ", myTransport, "</br>");

document.writeln("My Main Whip: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");