function setup(){
createCanvas(800,800);

//background color rgb values 0-255
//background(255, 138, 66);
background(252, 37, 105);


//ellipse which is drawn with a (x,y) coordinate center point and 2 values for the radii.
strokeWeight(.1);
fill(244, 203, 66, 175); // color rgb
ellipse(400, 300, 200, 200);
ellipse(400, 300, 300, 300);
noStroke();
ellipse(400, 300, 400, 400);

//line(x1, y1, x2, y2);
//line (0, 200, 800, 200);

//line with stroke weight
strokeWeight(5);
line (10, 250, 790, 250);

//with color and stroke weight
strokeWeight(1);
stroke(191, 37, 252); //color rgb
line (10, 350, 850, 350);

////Same rectangle copied 3 times with overlap alpha channel RGBA
fill(69, 18, 234, 125);
rect(0,350,800,500);

noStroke();
fill(244, 203, 66, 50);
quad(100, 800, 700, 800, 485, 350, 315, 350);

noStroke();
fill(244, 203, 66, 40);
quad(50, 800, 750, 800, 540, 350, 260, 350);

noStroke();
fill(244, 203, 66, 40);
quad(0, 800, 800, 800, 595, 350, 205, 350);

//quad which uses 4 destinct (x,y) coordinates
//noStroke();
stroke(99, 49, 1);
fill(107, 67, 3,225);
quad(150, 800, 650, 800, 485, 500, 315, 500);

//line with stroke weight
strokeWeight(12);
stroke(255, 102, 79, 65);
line (0, 175, 790, 0);

//255, 113, 48
//255, 45, 157
//255, 102, 79
//255, 118, 94
//255, 81, 174

strokeWeight(10);
stroke(255, 118, 94, 45);
line (0, 100, 550, 0);

noStroke();
fill(255, 171, 17, 50);
quad(0, 0, 0, 800, 800, 800, 800, 0);
}