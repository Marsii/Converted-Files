function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw(){
for (var x = 0; x <= 600; x += 25) { 
    for (var y = 0; y<=600; y += 25) {



var len = 25;     // Keeps weird cross from forming

{ 
  //fill(mouseY, mouseX, random(255));
  if (mouseIsPressed){
    fill(random(150,200),mouseX,mouseY,120);
  }else{             
    fill(random(200,250),mouseX,mouseY,random(100,150));
  } 
  
  strokeWeight(random(1,5));
  rect(x, y, x + len, y + len);
  
   } 
}
}
}
