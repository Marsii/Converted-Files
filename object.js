let myBall; //Object declared
let myBall2; // Object declared
var phi;

function setup() {
    size(600, 600);
    // Initialize Objects
    myBall = new circle(); // Object is equal to Construct funtion
    myBall2 = new circle();
}

function draw() {
    background(255);
    translate(300, 300);
    rotate(phi);
    myBall.move();
    myBall.display();
    myBall2.move();
    myBall2.display();
}

// Define a class outside of setup and draw.
class circle {
    // Variables.
    float c;
    float xpos;
    float ypos;
    float speed;

    float harmX;
    float harmY;
    float harm;
    float harm2;
    // Constructor.
    circle() {
        c = 175;
    }
    // Function
    display() {
        stroke(0);
        fill(c);
        ellipse(harmX, harmY, 30, 30);
    }

    // Function?
    move() {

        harmX = 200 * cos(harm);
        harmY = 5 * sin(harm2);

        harm = 0.10 + harm;
        harm2 = 0.0003 + harm2;

        phi = 0.08 + phi;
    }
}
