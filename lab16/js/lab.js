// index.js - Lab 16: JSON and APIs
// Author: Sterling Lazarus 
// Date: 11/26//2024

// Code 

$(document).ready(function () {
  // Add click event listener to the button
  $("#fetchData").on("click", function () {
    // Using the core $.ajax() method
    $.ajax({
      // The URL for the request (from the XKCD API docs)
      url: "https://xkcd.com/info.0.json",
      // Since the XKCD API doesn't require additional data, leave the data object empty
      data: {},
      // This is a GET request
      type: "GET",
      // The type of data expected back
      dataType: "json",
      // Success callback
      success: function (comicObj) {
        // Clear the previous comic
        $("#comicContainer").empty();

        // Add the comic title and image to the comicContainer
        $("#comicContainer").append(`<h1>${comicObj.title}</h1>`); // Title
        $("#comicContainer").append(
          `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">` // Image with alt and title
        );
      },
      // Error callback
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#comicContainer").html("<p>Sorry, something went wrong!</p>");
      },
    });
  });
});

// Code courtesty of Wes Modes and Chat GPT (modified by Sterling Lazarus)