var harmX = 0;
var harmY = 0;
var harm = 0;
var harm2 = 0;
var phi = 0;

function setup() {
    createCanvas(600, 600);
    //background(172+random(-30,30), 141+random(-30,30), 186+random(-30,30));
}

function draw() {
    background(mouseY, 141, 186, 3);


    push();
    translate(300, 300);
    fill(191, 66, 244, 25);

    stroke(0, 0, 0);
    strokeWeight(1);

    ellipse(0, 200, 300, 100);

    for (let y = 0; y < 38; y++) {
        rotate(3 * PI / 19);
        ellipse(0, 200, 300, 100);
    }

    pop();

    //ellipse(300,300,10,10);


    stroke(82, 24, 107);
    fill(111, mouseY / 2, 150);
    strokeWeight(1);
    ellipse(300, 300, 40, 40);
    fill(0, 0, 0);
    stroke(66, 14, 89);
    strokeWeight(2); //pupil
    ellipse(300, 300, 20, mouseY / 16);


    translate(300, 300);
    rotate(phi); // Larger orbit

    //ellipse(0,0,100,100);

    fill(115, mouseX, 150);
    ellipse(harmX, harmY, 15, 25); // change the x and y to have more interesting patterns.  Try adding a growth variable here

    harmX = 160 * cos(harm);
    harmY = 2 * sin(harm2);

    harm = 0.05 + harm;
    harm2 = 0.0001 + harm2;

    phi = 0.08 + phi; //play with this to change harmonic rate

}
