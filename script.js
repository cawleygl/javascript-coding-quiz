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
var currentScoreEl = document.querySelector("#scoredisplay");
var leaderboardEl = document.querySelector("#leaderboard");
var initialsEl = document.querySelector("#initials");
var q1feedback = document.querySelector("#q1feedback");
var q2feedback = document.querySelector("#q2feedback");
var q3feedback = document.querySelector("#q3feedback");
var q4feedback = document.querySelector("#q4feedback");
var q5feedback = document.querySelector("#q5feedback");

//local storage arrays
var scoresArr = [];
var initialsArr = [];
var storedScores = [];
var storedInitials = [];

//Timer variable reset 
var timeLeft = 0;
timerEl.textContent = "Time: " + timeLeft;

//Timer function
function startTimer() {
    timeLeft = 75;
    timerEl.textContent = "Time: " + timeLeft;
    timerInt = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
      }, 1000);
}

//Start button
startButton.addEventListener("click", function() {
    introPage.classList.add("hide");
    questionPage1.classList.remove("hide");
    startTimer();
});

//Select an answer for question 1
questionPage1.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.value !== "A") {
        timeLeft = timeLeft - 10;
        q1feedback.textContent = "Incorrect!";
        q1feedback.classList.add("alert")
        q1feedback.classList.add("alert-danger")
        var feedback = setInterval(function(){ 
            q1feedback.textContent = ""; 
            q1feedback.classList.remove("alert")
            q1feedback.classList.remove("alert-danger")
            clearInterval(feedback);
        }, 1500);
    } else {
        q1feedback.textContent = "Correct!";
        q1feedback.classList.add("alert")
        q1feedback.classList.add("alert-success")
        var feedback = setInterval(function(){ 
            q1feedback.textContent = ""; 
            q1feedback.classList.remove("alert")
            q1feedback.classList.remove("alert-success")
            clearInterval(feedback);
        }, 1500);
    }

    if(event.target.matches("button")) {
        questionPage1.classList.add("hide");
        questionPage2.classList.remove("hide");
    }
  });

//Select an answer for question 2
questionPage2.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.value !== "D") {
        timeLeft = timeLeft - 10;
        q2feedback.textContent = "Incorrect!";
        q2feedback.classList.add("alert")
        q2feedback.classList.add("alert-danger")
        var feedback = setInterval(function(){ 
            q2feedback.textContent = ""; 
            q2feedback.classList.remove("alert")
            q2feedback.classList.remove("alert-danger")
            clearInterval(feedback);
        }, 1500);
    } else {
        q2feedback.textContent = "Correct!";
        q2feedback.classList.add("alert")
        q2feedback.classList.add("alert-success")
        var feedback = setInterval(function(){ 
            q2feedback.textContent = ""; 
            q2feedback.classList.remove("alert")
            q2feedback.classList.remove("alert-success")
            clearInterval(feedback);
        }, 1500);
    }

    if(event.target.matches("button")) {
        questionPage2.classList.add("hide");
        questionPage3.classList.remove("hide");
    }

});

//Select an answer for question 3
questionPage3.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.value !== "C") {
        timeLeft = timeLeft - 10;
        q3feedback.textContent = "Incorrect!";
        q3feedback.classList.add("alert")
        q3feedback.classList.add("alert-danger")
        var feedback = setInterval(function(){ 
            q3feedback.textContent = ""; 
            q3feedback.classList.remove("alert")
            q3feedback.classList.remove("alert-danger")
            clearInterval(feedback);
        }, 1500);
    } else {
        q3feedback.textContent = "Correct!";
        q3feedback.classList.add("alert")
        q3feedback.classList.add("alert-success")
        var feedback = setInterval(function(){ 
            q3feedback.textContent = ""; 
            q3feedback.classList.remove("alert")
            q3feedback.classList.remove("alert-success")
            clearInterval(feedback);
        }, 1500);
    }

    if(event.target.matches("button")) {
        questionPage3.classList.add("hide");
        questionPage4.classList.remove("hide");
    }

});

//Select an answer for question 4
questionPage4.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.value !== "A") {
        timeLeft = timeLeft - 10;
        q4feedback.textContent = "Incorrect!";
        q4feedback.classList.add("alert")
        q4feedback.classList.add("alert-danger")
        var feedback = setInterval(function(){ 
            q4feedback.textContent = ""; 
            q4feedback.classList.remove("alert")
            q4feedback.classList.remove("alert-danger")
            clearInterval(feedback);
        }, 1500);
    } else {
        q4feedback.textContent = "Correct!";
        q4feedback.classList.add("alert")
        q4feedback.classList.add("alert-success")
        var feedback = setInterval(function(){ 
            q4feedback.textContent = ""; 
            q4feedback.classList.remove("alert")
            q4feedback.classList.remove("alert-success")
            clearInterval(feedback);
        }, 1500);
    }

    if(event.target.matches("button")) {
        questionPage4.classList.add("hide");
        questionPage5.classList.remove("hide");
    }
  
});

//Select an answer for question 5
questionPage5.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.value !== "B") {
        timeLeft = timeLeft - 10;
        q5feedback.textContent = "Incorrect!";
        q5feedback.classList.add("alert")
        q5feedback.classList.add("alert-danger")
        var feedback = setInterval(function(){ 
            q5feedback.textContent = ""; 
            q5feedback.classList.remove("alert")
            q5feedback.classList.remove("alert-danger")
            clearInterval(feedback);
        }, 1500);
    } else {
        q5feedback.textContent = "Correct!";
        q5feedback.classList.add("alert")
        q5feedback.classList.add("alert-success")
        var feedback = setInterval(function(){ 
            q5feedback.textContent = ""; 
            q5feedback.classList.remove("alert")
            q5feedback.classList.remove("alert-success")
            clearInterval(feedback);
        }, 1500);
    }

    if(event.target.matches("button")) {
        questionPage5.classList.add("hide");
        finalPage.classList.remove("hide");
        clearInterval(timerInt);
        currentScoreEl.textContent = ("Your Score: " + (75 - parseInt(timeLeft)) + " seconds");
        timerEl.textContent = "Time: 0";
    }

});

//Submit your score, saving it to local storage and showing it with other saved scores 
function submitScore() {
   //calclulate current score value, set to variable
   var currentScore = 75 - parseInt(timeLeft)
   //take initials from user input, set to variable
   var currentInitials = initialsEl.value

   // Get stored scores from localStorage
   var storedScores = JSON.parse(localStorage.getItem("scores"));
   var storedInitials = JSON.parse(localStorage.getItem("initials"));
     
   // If scores/initials were retrieved from localStorage, update the arrays to it
   if (storedScores !== null) {
       scoresArr = storedScores;
   }
   if (storedInitials !== null) {
       initialsArr = storedInitials;
   }

   //concat current score/initials to arrays containing previous scores/initials
   scoresArr.unshift(currentScore);
   initialsArr.unshift(currentInitials);
   
   //store both score and initials in local storage
   localStorage.setItem("scores", JSON.stringify(scoresArr));
   localStorage.setItem("initials", JSON.stringify(initialsArr));

   //Remove all scores from leaderboard html before rendering
   leaderboardEl.innerHTML = "";

   // Render a new li for each score
   for (var i = 0; i < scoresArr.length; i++) {
       var score = scoresArr[i];
       var initial = initialsArr[i];

       var leaderboardTop = document.createElement("li");
       leaderboardTop.textContent = initial + ": " + score + " seconds";
       leaderboardEl.appendChild(leaderboardTop);
   }

   //clear arrays to reset after render
   scoresArr = []
   initialsArr = []
}

//Submit button
submitButton.addEventListener("click", function() {
    finalPage.classList.add("hide");
    highscorePage.classList.remove("hide");
    submitScore()
});

//Go back button
backButton.addEventListener("click", function() {
    highscorePage.classList.add("hide");
    introPage.classList.remove("hide");

});

//Clear button
clearButton.addEventListener("click", function() {
    leaderboardEl.innerHTML = "";
    localStorage.clear();
});

