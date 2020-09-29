function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("MistyRose");
  // put setup code here
}

function draw() {
  push();
  fill("Crimson");
  translate(width/2, height/2);
  textStyle(ITALIC);
  textSize(15);
  text("SAKURA", -25 , -400);
  text("咲良", -15 , 400);
pop();

push();
  stroke("LightCoral");
  strokeWeight(2);
  frameRate(10);
  translate(mouseX, mouseY);
  rotate(frameCount*40);
  scale(0.5);
  line(0, 0, 50, 0);
  line(0, 0, 0, 50);
  line(0, 0, -50, 0);
  line(0, 0, 0, -50);
pop();


push();
  noFill();
  stroke("Snow");
  strokeWeight(1);
  translate(width/2, height/2);
  line(0, 0, 300, 0);
  line(0, 0, 0, 300);
  line(0, 0, -300, 0);
  line(0, 0, 0, -300);
  line(0, 0, 200, -200);
  line(0, 0, -200, -200);
  line(-0, -0, 200, 200);
  line(-0, -0, -200, 200);
pop();


push();
  fill("Snow");
  noStroke();
  translate(width/2, height/2);
  ellipse(300, 0, 10);
  ellipse(0, 300, 10);
  ellipse(-300, 0, 10);
  ellipse(0, -300, 10);
  ellipse(200, -200, 10);
  ellipse(-200, -200, 10);
  ellipse(-200, 200, 10);
  ellipse(200, 200, 10);
pop();


push();
  noFill();
  stroke("Snow");
  strokeWeight(0.5);
  translate(width/2, height/2);
  rotate(frameCount*0.9);
  translate(100, 100);
  ellipse(0, -100, 200);
pop();


push();
  noFill();
  stroke("LightCoral");
  strokeWeight(0.5);
  translate(width/2, height/2);
  rotate(-frameCount*0.9);
  translate(50, 50);
  ellipse(0, -50, 100);
pop();

push();
  noFill();
  stroke("Crimson");
  strokeWeight(0.5);
  translate(width/2, height/2);
  rotate(frameCount*1.8);
  translate(25, 25);
  ellipse(0, -20, 50);
pop();

  // put drawing code here
}
