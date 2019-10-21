//Naomi Marshall
//Maze game 
//It's basically done, but I may add a bit more, like I may make it harder)
//Rules: Don't touch the walls too much and get to the ellipse in the center to win

let button = false; //
var counter = 100; //"Health bar"
var ell = 25;
var oell = 20;
var g = 200;
var h = 190;
var paused = 1;
let win = false;

let wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15; // Maze wall

function setup() {

    createCanvas(500, 500);
    // Initialize Objects
    wall1 = new maze(0, 30, 460, 30); // 
    wall2 = new maze(40, 90, 460, 30);
    wall3 = new maze(40, 120, 40, 340);
    wall4 = new maze(80, 250, 370, 50);
    wall5 = new maze(120, 340, 40, 160);
    wall6 = new maze(120, 160, 330, 10);
    wall7 = new maze(200, 300, 40, 160);
    wall8 = new maze(240, 420, 215, 40);
    wall9 = new maze(290, 340, 210, 40);
    wall10 = new maze(120, 200, 280, 10);
    wall11 = new maze(120, 170, 10, 40);
    wall12 = new maze(440, 170, 10, 80);
    wall13 = new maze(1, 499, 499, 1);
    wall14 = new maze(499, 1, 1, 499);
    wall15 = new maze(0, 60, 1, 499);


}

function draw() {
    background(255 - counter);
    ellipse(mouseX, mouseY, ell, ell);
    ellipse(g, h, oell, oell);

    wall1.display();
    wall1.touchy();
    wall2.display();
    wall2.touchy();
    wall3.display();
    wall3.touchy();
    wall4.display();
    wall4.touchy();
    wall5.display();
    wall5.touchy();
    wall6.display();
    wall6.touchy();
    wall7.display();
    wall7.touchy();
    wall8.display();
    wall8.touchy();
    wall9.display();
    wall9.touchy();
    wall10.display();
    wall10.touchy();
    wall11.display();
    wall11.touchy();
    wall12.display();
    wall12.touchy();
    wall13.display();
    wall13.touchy();
    wall14.display();
    wall14.touchy();
    wall15.display();
    wall15.touchy();

    print(" ", mouseX, ",", mouseY, " ");


    if (mouseX > 190 && mouseX < 210 && mouseY > 180 && mouseY < 200) {

        // counter = 100;

        win = true;

        // button =false;


        fill(0, 255, 0);
        rect(0, 0, 300, 300);

        print("YOU WIN!");
        background(0, 255, 0);

        //textFont(f, 16);
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("YOU WIN :D", width / 2, height / 2);
    }
}

class maze {
    constructor(Inx, Iny, Inw, Inh) { // Constructor
        this.x = Inx;
        this.y = Iny;
        this.w = Inw;
        this.h = Inh;
    }
}

//Fuction shows walls
display() {
    if (win == false) {
        noStroke();
        fill(175);
        rect(this.x, this.y, this.w, this.h);
    } else if (win == true) {
        fill(0, 255, 0);
        rect(0, 0, 300, 300);

        print("Level Complete!");
        background(0, 255, 0);

        //textFont(f, 16);
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("YOU WIN :D", width / 2, height / 2);
    }
}

//If touching walls health goes down, If depleted, game over
touchy() {
    if (win == false) {
        if (mouseX + (12.5) > this.x && mouseX - (12.5) < this.x + this.w && mouseY + (12.5) > this.y && mouseY - (12.5) < this.y + this.h) {
            button = true;
            counter = counter - 1;
            background(255 - counter);



            if (counter <= 0) { // reset your counter
                counter = 0;
                print("GAME OVER");
                background(255, 0, 0);
                ell = 0;
                fill(255, 0, 0);


            }

        } else {
            button = false;

            if (counter <= 0) { // reset your counter
                counter = 0;
                print(" GAME OVER ");
                background(255, 0, 0);
                ell = 0;
                fill(255, 0, 0);
                textSize(50);
                textAlign(CENTER, CENTER);
                text("You Lose", width / 2, height / 2);

            } else if (win == true) {
                fill(0, 255, 0);

            }
        }
    }

}
