//Page query selectors
var introPage = document.querySelector("#intro");
var questionPage1 = document.querySelector("#q1");
var questionPage2 = document.querySelector("#q2");
var questionPage3 = document.querySelector("#q3");
var questionPage4 = document.querySelector("#q4");
var questionPage5 = document.querySelector("#q5");
var finalPage = document.querySelector("#finalscore");
var highscorePage = document.querySelector("#highscores");

//Button query selectors
var startButton = document.querySelector("#start");
var submitButton = document.querySelector("#submitscore");
var backButton = document.querySelector("#back");
var clearButton = document.querySelector("#clear");

//Element query selectors
var timerEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#scoredisplay");
var leaderboardEl = document.querySelector("#leaderboard");
var initialsEl = document.querySelector("#initials");

//Timer variable reset 
var timeLeft = 0;
timerEl.textContent = "Time: " + timeLeft;

//Start button
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

//Select an answer for question 1
questionPage1.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        console.log(event.target.textContent);
        questionPage1.classList.add("hide");
        questionPage2.classList.remove("hide");
    }
  });

//Select an answer for question 2
questionPage2.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        console.log(event.target.textContent);
        questionPage2.classList.add("hide");
        questionPage3.classList.remove("hide");
    }
});

//Select an answer for question 3
questionPage3.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        console.log(event.target.textContent);
        questionPage3.classList.add("hide");
        questionPage4.classList.remove("hide");
    }
});

//Select an answer for question 4
questionPage4.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        console.log(event.target.textContent);
        questionPage4.classList.add("hide");
        questionPage5.classList.remove("hide");
    }
});

//Select an answer for question 5
questionPage5.addEventListener("click", function(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        console.log(event.target.textContent);
        questionPage5.classList.add("hide");
        finalPage.classList.remove("hide");
        clearInterval(interval);
        scoreEl.textContent = ("Your score: " + (75 - parseInt(timeLeft)) + " seconds");
        timerEl.textContent = "Time: 0";
        console.log("timeLeft: " + timeLeft);
    }
});

//Submit button
submitButton.addEventListener("click", function() {
    console.log("Submit Score")
    finalPage.classList.add("hide");
    highscorePage.classList.remove("hide");
    
    var leaderboardTop = document.createElement("li");
    var score = 75 - parseInt(timeLeft)
    var initials = initialsEl.value

    localStorage.setItem(initials, score);

    leaderboardTop.textContent = initials + ": " + score;
    leaderboardEl.appendChild(leaderboardTop);

});

//Go back button
backButton.addEventListener("click", function() {
    console.log("Go Back")
    highscorePage.classList.add("hide");
    introPage.classList.remove("hide");

});

//Clear button
clearButton.addEventListener("click", function() {
    console.log("Clear Highscores")

});

