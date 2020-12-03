var startButton = document.querySelector("#start");
var introPage = document.querySelector("#intro");
var finalPage = document.querySelector("#finalscore");
var highscorePage = document.querySelector("#highscores");
var submitButton = document.querySelector("#submitscore");


var responseButtonsq1 = document.getElementsByClassName("response1");
var responseButtonsq2 = document.getElementsByClassName("response2");
var responseButtonsq3 = document.getElementsByClassName("response3");
var responseButtonsq4 = document.getElementsByClassName("response4");
var responseButtonsq5 = document.getElementsByClassName("response5");

var questionPage1 = document.querySelector("#q1");
var questionPage2 = document.querySelector("#q2");
var questionPage3 = document.querySelector("#q3");
var questionPage4 = document.querySelector("#q4");
var questionPage5 = document.querySelector("#q5");

startButton.addEventListener("click", function() {
    console.log("START!")
    introPage.classList.add("hide");
    questionPage1.classList.remove("hide");

});

for(var i = 0; i < responseButtonsq1.length; i++) {
    (function(index) {
    responseButtonsq1[index].addEventListener("click", function(event) {
    console.log(event.target.textContent);
    questionPage1.classList.add("hide");
    questionPage2.classList.remove("hide");
})
})(i);
}

for(var i = 0; i < responseButtonsq2.length; i++) {
    (function(index) {
    responseButtonsq2[index].addEventListener("click", function(event) {
    console.log(event.target.textContent);
    questionPage2.classList.add("hide");
    questionPage3.classList.remove("hide");
})
})(i);
}

for(var i = 0; i < responseButtonsq3.length; i++) {
    (function(index) {
    responseButtonsq3[index].addEventListener("click", function(event) {
    console.log(event.target.textContent);
    questionPage3.classList.add("hide");
    questionPage4.classList.remove("hide");
})
})(i);
}

for(var i = 0; i < responseButtonsq4.length; i++) {
    (function(index) {
    responseButtonsq4[index].addEventListener("click", function(event) {
    console.log(event.target.textContent);
    questionPage4.classList.add("hide");
    questionPage5.classList.remove("hide");
})
})(i);
}

for(var i = 0; i < responseButtonsq5.length; i++) {
    (function(index) {
    responseButtonsq5[index].addEventListener("click", function(event) {
    console.log(event.target.textContent);
    questionPage5.classList.add("hide");
    finalPage.classList.remove("hide");
})
})(i);
}

submitButton.addEventListener("click", function() {
    console.log("Submit Score")
    finalPage.classList.add("hide");
    highscorePage.classList.remove("hide");

});