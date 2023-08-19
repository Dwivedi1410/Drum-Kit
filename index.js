document.querySelector(".drum-btn").addEventListener("click", function() {
    var audio = new Audio("sounds/drum.wav");
    audio.play();
});
document.querySelector(".flute-btn").addEventListener("click", function() {
    var audio = new Audio("sounds/fluet.wav");
    audio.play();
});
document.querySelector(".violen-btn").addEventListener("click", function() {
    var audio = new Audio("sounds/violen.wav");
    audio.play();
});
document.querySelector(".piano-btn").addEventListener("click", function() {
    var audio = new Audio("sounds/piano.mp3");
    audio.play();
});
document.querySelector(".guitar-btn").addEventListener("click", function() {
    var audio = new Audio("sounds/guitar.wav");
    audio.play();
});