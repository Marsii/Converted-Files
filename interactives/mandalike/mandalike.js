 //2 - 25 - 19 pde converted into p5 interactive sketch

 var r = 0;
 var g = 0;
 var b = 0;


 var harmX = 0;
 var harmY = 0;
 var harm = 0;
 var harm2 = 0;
 var phi = 0;


 var counter = 0;
 var counter2 = 0;
 var seconds = 0;

 var savedTime;
 var totalTime = 3000;


 function setup() {
     createCanvas(600, 600);
     background(172, 141, 186);
     frameRate(30);
     savedTime = millis();
 }

 function draw() {
     //background(172, 141, 186); 
     //background(mouseY, 141, 186);
     push();

     var d = dist(250, 250, mouseX, mouseY);

     if (mouseIsPressed) {
         counter = counter + 5;
         counter2 = counter2 + 20;
     }


     if (counter == 260) { // reset your counter
         counter = 0;
     }

     if (d < 100) {
         r = r + 1;
         b = b + 3;
         g = g - 1;
     } else {
         r = r - .5;
         b = b +  3;
         g = g + 1;
     }

     //println(counter);
     //println(counter2);

     translate(300, 300);
     fill(r, g, b, 15);
     
     stroke(0, 0, 0);
     strokeWeight(1);
     
     rotate(3 * PI + counter2 / 19);
     ellipse(0, 200, 300, 150);     
     
     for (let y = 0; y < 38; y ++) {
     rotate(3 * PI / 19);
     ellipse(0, 200, 300, 150);
    }
     pop();

     //ellipse(300,300,10,10);

     var passedTime = millis() - savedTime;



     stroke(82, 24, 107);


     if (passedTime > totalTime) {
         //println("3 seconds have passed!");
         fill(111, mouseY / 2, random(255));
         savedTime = millis(); // Save the current time to restart the timer!
     }


     strokeWeight(1);
     ellipse(300, 300, 40, 40);
     fill(0, 0, 0);
     stroke(66, 14, 89);
     strokeWeight(2); //pupil
     ellipse(300, 300, 20, mouseY / 16);


     translate(300, 300);
     rotate(phi); // Larger orbit

     //ellipse(0,0,100,100);

     fill(mouseX, g, counter);
     ellipse(harmX, harmY, 15, 20); // change the x and y to have more interesting patterns.  Try adding a growth variable here

     harmX = 150 * cos(harm);
     harmY = 2 * sin(harm2);

     harm = 0.05 + harm;
     harm2 = 0.0001 + harm2;

     phi = 0.08 + phi; //play with this to change harmonic rate




 }
