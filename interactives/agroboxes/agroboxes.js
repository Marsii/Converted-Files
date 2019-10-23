//Naomi Marshall
//This one also might be hard to look at for some
//I'm honestly kinda tired making this so it's not as interesting as I'd like

var n = 100;
var r = 15;

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  noFill();
  rectMode(CENTER);

  // nested for loop
  for (let x = 0; x <= 600; x += 20+r) { 
    for (let y = 0; y<=600; y += 20+r) {

      
      // find the distance from mouse point and ellipse radii
      var d = dist(mouseX+random(80), mouseY+random(80), x, y);

      // if the distance is less than r for an of the cirlces... color those cicles differently
      if (d < 100) {
        fill(mouseY/3, mouseX/3, random(100,255));
        
        
        
        
      } else {
        fill(mouseX/2,mouseY/2,random(100,200), random(100,150));
      }

      rect(x, y, r+random(10), r+random(10));
      print(r);
    }
  }
}