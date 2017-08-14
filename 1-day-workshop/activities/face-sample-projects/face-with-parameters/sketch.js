// originally created by Jen G
// modified by susan evans

function setup() {
  createCanvas(600, 800);
  background(255);
}

function draw() {
  face(300, 400);
}

function face(x, y) {
  strokeWeight(5);
  eyes(x, y);
  nose(x, y);
  mouth(x, y);
}

function eyes(x, y) {
  line(x - 150, y - 225, x - 200, y - 275);
  line(x - 150, y - 200, x - 225, y - 275);
  line(x - 150, y - 175, x- 250, y - 275);
  
  line(x + 150, y - 225, x + 200, y - 275);
  line(x + 150, y - 200, x + 225, y - 275);
  line(x + 150, y - 175, x + 250, y - 275);
  
  ellipse(x - 125, y - 175, 150, 150);
  ellipse(x + 125, y - 175, 150, 150);
  
  ellipse(x - 110, y - 160, 100, 110);
  ellipse(x + 140, y - 160, 100, 110);
  
  ellipse(x - 140, y - 200, 40, 40);
  ellipse(x + 110, y - 200, 40, 40);
}

function nose(x, y) {
  triangle(x, y, x - 50, y + 100, x + 50, y + 100);
  line(x, y + 100, x, y + 250);
  
  point(x - 200, y + 25);
  point(x - 225, y + 70);
  point(x - 175, y + 70);

  point(x + 200, y + 25);
  point(x + 225, y + 70);
  point(x + 175, y + 70);  
}

function mouth(x, y) {
  line(x - 100, y + 250, x + 100, y + 250);
  
  arc(x, y + 250, 200, 100, 0, PI, CHORD);  
  arc(x - 100, y + 150, 200, 200, HALF_PI, PI);
  arc(x + 100, y + 150, 200, 200, 0, HALF_PI);
  
  teeth(x, y);
}

function teeth(x, y) {
  triangle(x - 75, y + 250, x - 50, y + 250, x - 50, y + 275);
  triangle(x + 75, y + 250, x + 50, y + 250, x + 50, y + 275);
}