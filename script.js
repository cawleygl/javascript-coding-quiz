var startButton = document.querySelector("#start")
var introPage = document.querySelector("#intro")
var question1 = document.querySelector("#q1")


startButton.addEventListener("click", function() {
    console.log("START!")
    introPage.classList.add("hide");
    question1.classList.remove("hide");
});