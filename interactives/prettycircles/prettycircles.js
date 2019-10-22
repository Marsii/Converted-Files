//Naomi Marshall
//Pretty Circles
//I like the colors
var growth = 0.1;
var rate = 1; // speed of growth

function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);

}

function draw() {

    //background(0,0,0);
    //fill(155,mouseX,mouseY,10); // Nice colors
    ellipse(mouseX, mouseY, growth + 50, growth + 50);

    ////Simple mousePressed 
    if (mouseIsPressed) {
        rate = -1;
        fill(85, mouseX, mouseY, 10);
    } else {
        rate = 1;
        fill(255-mouseX, 215, 255-mouseY, 10);
    }

    growth = growth + rate;
}
