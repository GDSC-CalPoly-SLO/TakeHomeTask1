const box = document.getElementById('blue_box');
const rgbButton = document.getElementById('rgb_button');
const rbgButton = document.getElementById('rbg_button');
// box.style.backgroundImage = "linear-gradient(180dg, white, red)";
curColorIdx = 0;
sequenceType = 0;

rgbButton.addEventListener('click', () => {
    sequenceType = 0;
});

rbgButton.addEventListener('click', () => {
    sequenceType = 1;
});  


box.addEventListener('click', () => {
    box.style.backgroundColor = colors[curColorIdx];
    if (curColorIdx > 2) {
        curColorIdx = 0;
    }
    else if (curColorIdx == 0) {
        curColorIdx = 2;
    }
    else if (sequenceType == 0) {
        console.log(sequenceType);
        curColorIdx++;
    }
    else if (sequenceType == 1) {
        console.log(sequenceType);
        curColorIdx--;
    }
});

function toggleSequence(buttonType) {
    if (buttonType == rgbButton) {
        sequenceType = 0;
    }
    else if (buttonType == rbgButton) {
        sequenceType = 1;
    }
}

var colors = ["red", "green", "blue"];