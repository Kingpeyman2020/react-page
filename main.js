var img = document.getElementsByTagName("img")[0];
var speed = 15;

img.addEventListener("click", clickFuncImg);

function clickFuncImg() {
    newSpeed();
    img.style.animation = `char ${speed}s infinite linear`;
    console.log(speed);
};

function newSpeed() {
    if (speed < 0.1) {
        speed = 15;
    } else if (speed < 3.5) {
        speed -= 0.1;
    } else {
        speed -= 2;
    }
};