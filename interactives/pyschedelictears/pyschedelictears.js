//Naomi Marshall
//Pyschedelic Tears
//They're not high I promise

var growth = 0.1;
var rate = 1;


var Tear = 10;
var mover= 0; 
var movel= 0; 
var move= 0.4; 
let moveboolean = true;
function setup(){
  createCanvas(600,600);
  background(155,155,155);
  
}

function draw() {
  
  

  //fill(255,255,255,1); // Fun Halo effects
  //ellipse(300,100,growth+10,growth+10);
    noFill();
    strokeWeight(3);
    stroke(255-random(20), 255-random(20), 255-random(20),50);
    ellipse(300, 50, 10 + mouseX/2); // This ellipse will expand and contract with mouse
 
  //if (mousePressed){
  //  rate = -1;
  //}else{             //Try removing this else statement
  //  rate = 1;
  //}
  
  //growth = growth + rate;
 
  //left side
  fill(255, 211, 211);
  stroke(25, 76, 27);
  ellipse (200, 200, 100, 50); // eye
  stroke(44, 112, 28);
  fill(66+random(-20,20), 247+random(-20,20), 78+random(-20,20));
  strokeWeight(2);
  ellipse(200, 200, 40, 40);
  fill(0,0,0);
  stroke(18, 81, 52);
  strokeWeight(3);//pupil
  ellipse(200, 200, 20, 20);
  
  //right side
  fill(255, 211, 215);
  ellipse (400, 200, 100, 50); // eye
  stroke(37, 117, 42);
  fill(70+random(-20,20), 226+random(-20,20), 140+random(-20,20));
  strokeWeight(2);
  ellipse(400, 200, 40, 40); 
  fill(0,0,0);
  stroke(16, 71, 41);
  strokeWeight(3);//pupil
  ellipse(400, 200, 20, 20);
  
   if (mouseX > 300){  //Is the mouse on the right?
   moveboolean = false;
 }
 
 if (mouseX < 300){  //Is the mouse on the left?
   moveboolean = true;
 }
 
  if (moveboolean == false){  // the tears on the right move
   mover= mover+0.7;
 }
 
  if (moveboolean == true){  // the tears on the left move
   movel= movel+0.7;
 }
    
 //tears right side
  stroke(mouseY + random(10), 1+(1/2*mouseY), mouseX+ random(10));
  fill(mouseY + random(10), 1+(1/2*mouseY), mouseX + random(10));
  ellipse (400, 220 + mover*3, Tear, Tear); // animates the object down the page
  ellipse (380, 220 + mover, Tear, Tear); // animates the object down the page
  ellipse (420, 220 + mover/2, Tear, Tear); // animates the object down the page

//tears left side
  stroke(random(150,190), mouseY+ random(10), mouseX+ random(10));
  fill(random(150,190), mouseY + random(10), mouseX + random(10));
  ellipse (200, 220 + movel/2.5, Tear, Tear); // animates the object down the page
  ellipse (180, 220 + movel*1.5, Tear, Tear); // animates the object down the page
  ellipse (220, 220 + movel*2, Tear, Tear); // animates the object down the page
 strokeWeight(3);
  stroke(0, 0, 0);
  
  move= move+0.7;
//annoying eyebrows
noStroke();
fill(0,0,0,18);
quad(135, 145, 135, 125, 270, 120, 265, 150);
triangle(85, 155, 135, 125, 135, 145);
noStroke();
fill(0,0,0,18);
quad(335, 150, 325, 120, 475, 125, 475, 145);
triangle(525, 155, 475, 125, 475, 145);
//fill(random(255),random(255),random(255),10);
//square(0, 0, 600);
//I wanted to make one of the tears change speed with the movement of the mouse but I couldn't do it without making the tear flow back up
//I also wanted to add a halo of expanding light to the middle of the head but I couldn't do that without it effecting the tears 


}