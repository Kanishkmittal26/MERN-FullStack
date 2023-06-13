// document.addEventListener("typeOfEvent", callback);{

//     var eventThatHappend={
//         eventType:"keypress",
//         key:"p"
//     }

//     var eventThatHappend2={
//         eventType :"click",
//         mouseClick:"right"          
//     }
//     if(eventThatHappend.eventType===typeOfEvent){
//        callback(eventThatHappend2);
//     }
//     else if(eventThatHappend2.eventType===typeOfEvent){
//         callback(eventThatHappend2);
//     }
    
// }

// either above or either down 
// above: explaining how callback function works
// below: drum sounds (drumkit website)


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", whichButton);
}

// mouse click
function whichButton() {
    var buttonName = this.innerHTML;
    makeSound(buttonName);

    animation(buttonName);
}

document.addEventListener("keypress", whichKey);

// keyboard press
function whichKey(a){
    makeSound(a.key);

    animation(a.key);
}


function makeSound(letterName){
    switch(letterName) {
        case 'w':
            var drumSound = new Audio("sounds/tom-1.mp3");
            drumSound.play();
            break;
        case 's':
            var drumSound = new Audio("sounds/tom-3.mp3");
            drumSound.play();
            break;
        case 'd':
            var drumSound = new Audio("sounds/tom-4.mp3");
            drumSound.play();
            break;
        case 'y':
            var drumSound = new Audio("sounds/tom-2.mp3");
            drumSound.play();
            break;
        case 'c':
            var drumSound = new Audio("sounds/kick-bass.mp3");
            drumSound.play();
            break;
        case 'f':
            var drumSound = new Audio("sounds/snare.mp3");
            drumSound.play();
            break;
        case 'g':
            var drumSound = new Audio("sounds/crash.mp3");
            drumSound.play();
            break;
        default:
            break;
    }
}


function animation(animeKey){
    var activeClass=document.querySelector("." + animeKey);

    activeClass.classList.add("pressed");

    setTimeout(function(){
        activeClass.classList.remove("pressed");
    },100);
}