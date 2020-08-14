//playing with text
PFont helvNow,didot,helv;
float spin=0;

void setup(){
  size(500,500);
  background(255);
  fill(0);
  smooth(4);
  //helv=createFont("Helvetica",32,true);
  helvNow=loadFont("HelveticaNeue-48.vlw");
  //didot=loadFont("Didot-24.vlw");
  
  textAlign(CENTER,CENTER); // horizontal allign, vertical allign
  frameRate(33); //This sets the animation speed (frames per second)
}


void draw(){
  fill(0);
  translate(width/2,height/2);
  spin+=.1; //This increments the rotation value 
  rotate(spin);
  textFont(helvNow);
  textSize(48);
  text("Slave to The Algorithm",0,0); // text(font, X, Y) *X,Y =position
  
  fill(255,20);
  noStroke();
  translate(-width/2,-height/2); //walks back translate to top left
  rect(0,0,width,height);
}


void keyPressed(){
   background(255); //clears background
}
