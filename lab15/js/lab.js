// index.js - Lab 15: AJAX
// Author: Sterling Lazarus 
// Date: 11/26//2024

// Code 

$(document).ready(function () {
  // Attach a click event listener to the button
  $("#fetchData").click(function () {
    // Define the possible endpoints and their respective ID ranges
    const endpoints = [
      { name: "people", max: 82 }, // Characters: 1 to 82
      { name: "starships", max: 36 }, // Starships: 1 to 36
      { name: "planets", max: 60 }, // Planets: 1 to 60
      { name: "species", max: 37 }, // Species: 1 to 37
      { name: "vehicles", max: 39 } // Vehicles: 1 to 39
    ];

    // Select a random endpoint
    const randomEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];

    // Generate a random ID within the endpoint's range
    const randomId = Math.floor(Math.random() * randomEndpoint.max) + 1;

    // Construct the API URL
    const apiUrl = `https://swapi.dev/api/${randomEndpoint.name}/${randomId}/`;

    // Perform the AJAX request
    $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function (data) {
        // Dynamically display data based on the type
        let output = `<h2>${randomEndpoint.name.toUpperCase()} ID: ${randomId}</h2>`;
        for (const key in data) {
          // Ignore unnecessary fields
          if (typeof data[key] === "string" || typeof data[key] === "number") {
            output += `<p><strong>${key}:</strong> ${data[key]}</p>`;
          }
        }
        // Display the data in the #output div
        $("#output").html(output);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#output").html(`<p>Error: Could not fetch data. (${textStatus})</p>`);
      }
    });
  });
});

// Code courtesty of Wes Modes and Chat GPT (modified by Sterling Lazarus)