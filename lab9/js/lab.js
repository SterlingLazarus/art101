// index.js - Lab 9 - Libraries & jQuery
// Author: Sterling Lazarus 
// Date: 11/4//2024

// Code 

$("#challenge").append("<button id='button-challenge'>Click for a party</button>");

$("#button-challenge").click(function(){
    if ($("#challenge").hasClass("minor-section")) {
        $("#challenge").removeClass("minor-section").addClass("party");
        $(this).text("Click for business");
    } else {
        $("#challenge").removeClass("party").addClass("minor-section");
        $(this).text("Click for a party");
    }
});

$("#problems").append("<button id='button-problems'>Click for a party</button>");

$("#button-problems").click(function(){
    if ($("#problems").hasClass("minor-section")) {
        $("#problems").removeClass("minor-section").addClass("party");
        $(this).text("Click for business");
    } else {
        $("#problems").removeClass("party").addClass("minor-section");
        $(this).text("Click for a party");
    }
});

$("#reflection").append("<button id='button-reflection'>Click for a party</button>");

$("#button-reflection").click(function(){
    if ($("#reflection").hasClass("minor-section")) {
        $("#reflection").removeClass("minor-section").addClass("party");
        $(this).text("Click for business");
    } else {
        $("#reflection").removeClass("party").addClass("minor-section");
        $(this).text("Click for a party");
    }
});

// Code modified from Chat GPT generation 