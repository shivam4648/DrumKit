// detecting button press
for (
    let index = 0;
    index < document.querySelectorAll(".drum").length;
    index++
) {
    document
        .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
        soundPlay(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// detecting keyboard press
document.addEventListener("keydown", function (event) {
    soundPlay(event.key);
    buttonAnimation(event.key);
});


function soundPlay(button) {
    switch (button) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBash = new Audio("sounds/kick-bass.mp3");
            kickBash.play();
            break;

        default:
            alert("please enter only the shown keys on the button.");
            break;
    }
}


function buttonAnimation(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}

