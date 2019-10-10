//Naomi Marshall
//Attempt at a Clock
//It's not the best but at least it works
//Inner hand counts seconds, outer counts 5


var counter = 0;
var savedTime;
var totalTime = 1000;
var counter2 = 0;
var savedTime2;
var totalTime2 = 5000;

function setup() {
  createCanvas(600, 600);
  savedTime = millis();
  savedTime2 = millis();
  
}

function draw() {
  
  background(210, 168, 255);
  rectMode(CORNER);
  
  push();
  translate(300, 300);
  fill(182, 38, 255, 150);
  
  
  var passedTime = millis() - savedTime;
  if (passedTime > totalTime) {
    counter++;
    savedTime = millis(); // Save the current time to restart the timer!
    }
  rotate(2*PI+(counter*PI)/60);
  rect(0, 0, 100, 10);
 
  
  pop();
  
  push();
  
   translate(300, 300);
  fill(182, 38, 255, 150);
  
  var passedTime2 = millis() - savedTime2;
  if (passedTime2 > totalTime2) {
 
    counter2++;
    savedTime2 = millis(); // Save the current time to restart the timer!
    }
  rotate(2*PI+(counter2*PI)/12);
  rect(100, 0, 100, 10);
  
  fill(0, 0, 255, 30);
 

  pop();
  fill(182, 38, 255, 100);
  ellipse(300,300,200,200);
  ellipse(300,300,400,400);
  
}
