// originally created by Jen G
// modified by susan evans

function setup() {
  createCanvas(600, 800);
  background(255);
}

function draw() {
  face();
}

function face(x, y) {
  strokeWeight(5);
  eyes();
  nose();
  mouth();
}

// 300, 400
function eyes() {
  line(150, 175, 100, 125);
  line(150, 200, 75, 125);
  line(150, 225, 50, 125);
  
  line(450, 175, 500, 125);
  line(450, 200, 525, 125);
  line(450, 225, 550, 125);
  
  ellipse(175, 225, 150, 150);
  ellipse(425, 225, 150, 150);
  
  ellipse(190, 240, 100, 110);
  ellipse(440, 240, 100, 110);
  
  ellipse(160, 200, 40, 40);
  ellipse(410, 200, 40, 40);
}

function nose() {
  triangle(300, 400, 250, 500, 350, 500);
  line(300, 500, 300, 650);
  
  point(100, 425);
  point(75, 470);
  point(125, 470);

  point(500, 425);
  point(525, 470);
  point(475, 470);  
}

function mouth() {
  line(200, 650, 400, 650);
  
  arc(300, 650, 200, 100, 0, PI, CHORD);  
  arc(200, 550, 200, 200, HALF_PI, PI);
  arc(400, 550, 200, 200, 0, HALF_PI);
  
  teeth();
}

function teeth() {
  triangle(225, 650, 250, 650, 250, 675);
  triangle(375, 650, 350, 650, 350, 675);
}