// Variables: Intergers & Floats

var PlanetSizeOriginal= 30;
var SatelliteSize = 10;
var growth=0.5;
var growthh=1.4;
var growth2=2.3;
var growth3=4.2;

var move= 0.4; 
var orbit = 90;


function setup() {
  createCanvas (800, 800);
}


function draw() {
  background (155,155,155);
  
   

  //Growth
  noFill();
  strokeWeight(3);
  stroke(0, 0, 0);
  ellipse (400, 400, 90 + growth, 70 + growth); // This ellipse will expand over time
  stroke(255, 137, 229);
  fill(255, 137, 229);
  ellipse (400, 400, 70 + growth, 50 + growth); // This ellipse will expand over time
  stroke(255, 117, 229);
  fill(255, 117, 229);
  ellipse (400, 400, 50 + growth, 30 + growth); // This ellipse will expand over time
  stroke(255, 97, 229);
  fill(255, 97, 229);
  ellipse (400, 400, 30 + growth, 10 + growth); // This ellipse will expand over time
  stroke(255, 77, 229);
  fill(255, 77, 229);
  ellipse (400, 400, 10 + growth, 10 + growth); // This ellipse will expand over time
  stroke(255, 57, 229);
  fill(222, 217, 224);
  strokeWeight(5);//pupil
  ellipse (400, 400, PlanetSizeOriginal + growth, PlanetSizeOriginal + growth); // Same as above but with a variable
  stroke(115, 0, 160);
  fill(190, 28, 255);
  
  ellipse (400, 400, 0 + growth/2, 0 + growth/2); // Reducing growth rate with division
  stroke(38, 0, 53);
  fill(0, 0, 0);
  ellipse (400, 400, 0 + growth/4, 0 + growth/4);

  //Movement
  //fill(0,0,0);
  stroke(119, 207, 255);
  fill(119, 207, 255);
  ellipse (400, 400 + move*2, SatelliteSize, SatelliteSize); // animates the object down the page
  ellipse (380, 400 + move, SatelliteSize, SatelliteSize); // animates the object down the page
  ellipse (420, 400 + move/2, SatelliteSize, SatelliteSize); // animates the object down the page
  
  noStroke();
 // strokeWeight(2);//cross
  fill(0, 0, 0, 100-move*.10);
  ellipse (400, 400, SatelliteSize, SatelliteSize+ move); // animates the object down the page
  ellipse (400, 400, SatelliteSize+ move, SatelliteSize); // animates the object down the page
  
  strokeWeight(5);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  ellipse (400 + 200*cos(move/3), 400 + 200*sin(move/3), 2, 2); // TrigFun: animates the object with radial coordinates
  stroke(0, 0, 0,100);
  fill(0, 0, 0,100);
  ellipse (400 + orbit*cos(move/2), 400 + orbit*sin(move/2), 2, 2); // Another orbiter... moving slower
  stroke(0, 0, 0,100);
  fill(0, 0, 0,100);
  ellipse (400 + 3*orbit*cos(move/7), 400 + 3*orbit*sin(move/6), 2, 2); // Another orbiter... moving slower


  // Reassign a new value to "move" and "growth" at the end of each draw loop cycle
  move= move+0.7;
  growth= growth + .2;
  orbit = orbit + 0.000002;
  //SatelliteSize = SatelliteSize + 1;

  //'println' prints values to the console
  //println ("growth:  " + growth);
  
  noStroke();
fill(0,0,0, 0+move*.075);
quad(0, 0, 0, 800, 800, 800, 800, 0);
}