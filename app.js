const width = window.innerWidth;
const height = window.innerHeight;
let digits;
let counter = 0;



async function setup() {
    createCanvas(0, 0);
    digits = await getPiDigits();
    colorMode(HSB);
    let colors = [];
    for (let i = 0; i < 10; i++) {
        let colorVal = color(`hsb(${36 * i},100%,100%)`);
        let redVal = red(colorVal);
        let greenVal = green(colorVal);
        let blueVal = blue(colorVal);
        colors.push(`rgba(${redVal},${greenVal},${blueVal},${0.8})`)
    }
    console.log(colors)
    addFillColor(piChart, colors);
    // frameRate(10);
}


function draw() {
    // console.log(digits)
    background(0, 0, 0, 0);
    translate(width / 2, height / 2);
    if (digits) {
        addDigitToHistogram(piChart, digits.charCodeAt(counter) - 48);
        // console.log(digits.charCodeAt(counter) - 48);
    }
    counter++;
    // noLoop();
}


