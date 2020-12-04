var startButton = document.querySelector("#start");
var introPage = document.querySelector("#intro");
var questionPage1 = document.querySelector("#q1");
var questionPage2 = document.querySelector("#q2");
var questionPage3 = document.querySelector("#q3");
var questionPage4 = document.querySelector("#q4");
var questionPage5 = document.querySelector("#q5");
var finalPage = document.querySelector("#finalscore");
var highscorePage = document.querySelector("#highscores");
var submitButton = document.querySelector("#submitscore");
var backButton = document.querySelector("#back");
var clearButton = document.querySelector("#clear");
var timerEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#scoredisplay");


var responseButtonsq1 = document.getElementsByClassName("response1");
var responseButtonsq2 = document.getElementsByClassName("response2");
var responseButtonsq3 = document.getElementsByClassName("response3");
var responseButtonsq4 = document.getElementsByClassName("response4");
var responseButtonsq5 = document.getElementsByClassName("response5");

var timeLeft = 0
timerEl.textContent = "Time: " + timeLeft

startButton.addEventListener("click", function() {
    timeLeft = 75
    timerEl.textContent = "Time: " + timeLeft
    console.log("START!")
    introPage.classList.add("hide");
    questionPage1.classList.remove("hide");
    interval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft
      }, 1000);
});

for(var i = 0; i < responseButtonsq1.length; i++) {
    responseButtonsq1[i].addEventListener("click", function(event) {
    console.log(event.target.textContent);
    questionPage1.classList.add("hide");
    questionPage2.classList.remove("hide");
})
}

for(var i = 0; i < responseButtonsq2.length; i++) {
    responseButtonsq2[i].addEventListener("click", function(event) {
    console.log(event.target.textContent);
    questionPage2.classList.add("hide");
    questionPage3.classList.remove("hide");
})
}

for(var i = 0; i < responseButtonsq3.length; i++) {
    responseButtonsq3[i].addEventListener("click", function(event) {
    console.log(event.target.textContent);
    questionPage3.classList.add("hide");
    questionPage4.classList.remove("hide");
})
}

for(var i = 0; i < responseButtonsq4.length; i++) {
    responseButtonsq4[i].addEventListener("click", function(event) {
    console.log(event.target.textContent);
    questionPage4.classList.add("hide");
    questionPage5.classList.remove("hide");
})
}

for(var i = 0; i < responseButtonsq5.length; i++) {
    responseButtonsq5[i].addEventListener("click", function(event) {
    console.log(event.target.textContent);
    questionPage5.classList.add("hide");
    finalPage.classList.remove("hide");
    clearInterval(interval);
    scoreEl.textContent = "Your score: " + timeLeft + " seconds"
})
}

submitButton.addEventListener("click", function() {
    console.log("Submit Score")
    finalPage.classList.add("hide");
    highscorePage.classList.remove("hide");

});

backButton.addEventListener("click", function() {
    console.log("Go Back")

});

clearButton.addEventListener("click", function() {
    console.log("Clear Highscores")

});

