// Declare variables for html elements. Start screen:
var viewHSBtn = document.querySelector("#viewHS");
var timerEl = document.querySelector("#timer");
var startScreenEl = document.querySelector("#startScreen");
var startTestBtn = document.querySelector("#startTest");
// Quiz questions and answers screen:
var testEl = document.querySelector("#test");
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
// Submitting scores screen:
var submitScoreEl = document.querySelector("#submitScores");
var userScoreEl = document.querySelector("#score");
var initialsEl = document.querySelector("#initials");
var submitInitialsBtnEl = document.querySelector("#submitInitials");
// Highscores screen:
var highScoresEl = document.querySelector("#highScores");
var scoresEl = document.querySelector("#scores");
var goBackBtn = document.querySelector("#goBack");
var resetScoresBtn = document.querySelector("#resetScores");
// Universal variables:
var score = 0;
var currentQ = 0;
var highScores = [];
var interval;
var timeGiven = 75;
var secondsElapsed = 0;
// Create function for starting and updating timer.
function startTimer() {
    timerEl.textContent = timeGiven;
    interval = setInterval(function () {
        secondsElapsed++;
        timerEl.textContent = timeGiven - secondsElapsed;
        if (secondsElapsed >= timeGiven) {
            currentQ = questions.length;
            nextQuestion();
        }}, 1000);} 
// Create function for stopping the timer.
function stopTimer() {
    clearInterval(interval);} 
// Create function that will hide current questions and display the next one. Display sumbit score screen if last question. 
function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) {
        renderQuestion();
    } else {
        stopTimer();
        if ((timeGiven - secondsElapsed) > 0)
            score += (timeGiven - secondsElapsed);
        userScoreEl.textContent = score;
        hide(testEl);
        show(submitScoreEl);
        timerEl.textContent = 0;}} 
// Create function to check user answer and update score. 
function checkAnswer(answer) {
    if (questions[currentQ].answer == questions[currentQ].choices[answer.id]) {
        score += 5;
        displayMessage("That's right!");
    }
    else {
        secondsElapsed += 10;
        displayMessage("Incorrect.");}}
// Create function to display correct/incorrect message for two seconds. 
function displayMessage(m) {
    let messageHr = document.createElement("hr");
    let messageEl = document.createElement("div");
    messageEl.textContent = m;
    document.querySelector(".jumbotron").appendChild(messageHr);
    document.querySelector(".jumbotron").appendChild(messageEl);
    setTimeout(function () {
            messageHr.remove();
            messageEl.remove();
    }, 2000);}
