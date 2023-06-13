const buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started=false;
var gamePattern = [];
var userClickedPattern = [];

$(document).on("keypress", function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started=true;
    }
});
// creating on click jquery function so that we can get which box is clicked
$(".btn").on("click", function () {

    // code to get which button is used
    var userChosenColour = $(this).attr("id");

    // pushing value in an array
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});


function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");

        },200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


function nextSequence() {

    userClickedPattern=[];
    level++;

    $("#level-title").text("Level "+ level);

    // random number between 0-3
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // giving animate effects 
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // calling playSound function to hear corresponding sound 
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


function startOver(){
    gamePattern=[];
    level=0;
    started=false;
}






