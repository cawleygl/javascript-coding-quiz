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
var leaderboardEl = document.querySelector("#leaderboard");

var timeLeft = 0;
timerEl.textContent = "Time: " + timeLeft;

startButton.addEventListener("click", function() {
    timeLeft = 75;
    timerEl.textContent = "Time: " + timeLeft;
    console.log("START!");
    introPage.classList.add("hide");
    questionPage1.classList.remove("hide");
    interval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
      }, 1000);
});

questionPage1.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        console.log(event.target.textContent);
        questionPage1.classList.add("hide");
        questionPage2.classList.remove("hide");
    }
  });


questionPage2.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        console.log(event.target.textContent);
        questionPage2.classList.add("hide");
        questionPage3.classList.remove("hide");
    }
});

questionPage3.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        console.log(event.target.textContent);
        questionPage3.classList.add("hide");
        questionPage4.classList.remove("hide");
    }
});

questionPage4.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        console.log(event.target.textContent);
        questionPage4.classList.add("hide");
        questionPage5.classList.remove("hide");
    }
});

questionPage5.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        console.log(event.target.textContent);
        questionPage5.classList.add("hide");
        finalPage.classList.remove("hide");
        clearInterval(interval);
        scoreEl.textContent = "Your score: " + timeLeft + " seconds";
        timerEl.textContent = "Time: 0";
        localStorage.setItem("lastscore", timeLeft);
        console.log("Time: " + timeLeft);
    }
});

submitButton.addEventListener("click", function() {
    console.log("Submit Score")
    finalPage.classList.add("hide");
    highscorePage.classList.remove("hide");
    var leaderboardTop = document.createElement("li");
    var lastScore = localStorage.getItem("lastscore");
    leaderboardTop.textContent = lastScore;
    leaderboardEl.appendChild(leaderboardTop);

});

backButton.addEventListener("click", function() {
    console.log("Go Back")

});

clearButton.addEventListener("click", function() {
    console.log("Clear Highscores")

});

