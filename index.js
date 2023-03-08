//BUTTON Presses

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

//KEYBOARD pressed
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var drum1 = new Audio("/sounds/tom-0.mp3");
            drum1.play();
            break;

        case "a":
            var drum2 = new Audio("/sounds/tom-5.mp3");
            drum2.play();
            break;

        case "s":
            var drum3 = new Audio("/sounds/tom-6.mp3");
            drum3.play();
            break;

        case "d":
            var drum4 = new Audio("/sounds/tom-1.mp3");
            drum4.play();
            break;

        case "j":
            var drum5 = new Audio("/sounds/tom-2.mp3");
            drum5.play();
            break;

        case "k":
            var drum6 = new Audio("/sounds/tom-3.mp3");
            drum6.play();
            break;

        case "l":
            var drum7 = new Audio("/sounds/tom-4.mp3");
            drum7.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(current) {
    var activeButton = document.querySelector("." + current);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}