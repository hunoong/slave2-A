var mode;
let img;
let video;
let detector;
let detections;
let extraCanvas;
let value = 0;
let font1,font2,font3,font4;
//let sampleIsPlaying = false;

let brushes = [];

//***************************************************************************//
//************************** ↓ Function SETUP ↓ ****************************//
function preload() {
  font1 = loadFont('data/Didot_HTFB24_Bold.otf');
  font2 = loadFont('data/Akkurat-Light.ttf');
  font3 = loadFont('data/Akkurat-Bold.ttf');
  font4 = loadFont('data/HSbom2.0.ttf');
  //img = loadImage('data/mouse_logo-01.png'); // mouse cursor (logo)
}

function setup() {
  mode = 0;
  createCanvas(windowWidth,windowHeight);
  extraCanvas = createGraphics(640,480);
  //extraCanvas.background(0);
  extraCanvas.clear(); // makes the extra canvas transparent
  video = createCapture(VIDEO);
  frameRate(25);
  video.size(640,480);
  video.position(windowWidth/2-312, windowHeight/2-232);
  video.hide();
  detector = ml5.objectDetector('cocossd', modelReady);
  
  //brushes[i] = new Brush(x, 100, 20);
}
  
//***************************************************************************//
//************************ ↓ COCO SSD Functions ↓ **************************//

function modelReady(){
  console.log('model loaded');
  detect(); 
}
function detect(){ detector.detect(video, gotResults); }
function gotResults(err, results){
  if (err) { console.log(err); return; }
  detections = results; detect();console.log(results); 
  for (var r=0; r<results.length; r++){
    fill(255);
    noStroke();
    textSize(30);
    textFont(font2);
    text(results[0].label, 250, 100+20*r); 
  }
}
  
//***************************************************************************//
//*************************** ↓ Function stop ↓ ****************************//
  
//function mouseClicked(){
//    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
//    background(255);
//      if (sampleIsPlaying) {
//      video.stop();
//      sampleIsPlaying = false;
//      text('Click to play!', width / 2, height / 2);
//      } else {
//      video.loop();
//      sampleIsPlaying = true;
//      text('Click to stop!', width / 2, height / 2);
//      }}}
      
//***************************************************************************//
//*************************** ↓ Function DRAW ↓ ****************************//

function draw() {

  //------------------------------<MODE 00>------------------------------

  clear();
  if (mode==0) {
  video.stop();
    
  background(255);
    
  noStroke();
  fill(0,0,250,240);
  ellipse(windowWidth/2,windowHeight/2-5,180,90);
    
  fill(0);
  textSize(20);
  textAlign(CENTER);
  textFont(font3);
  text('press ENTER to unveil the art that the bird creates', windowWidth/2,windowHeight/2);
    
  rect(windowWidth/2-330,windowHeight/2-15,15,15);
  rect(windowWidth/2+330,windowHeight/2-15,15,15);
    
    // image(img, mouseX-10, mouseY-10,30,35);  // mouse cursor (logo)
  }
  
 //------------------------------<MODE 01>------------------------------

 if (mode==1) {
 video.loop();
 
 for ( let i = 0; i < brushes.length; i++){
   brushes[i].display();
 }
 
 noStroke();
 fill(0,0,250);
 ellipse(windowWidth/2-500,windowHeight/2-340,800,800);
 
 fill(220);
 noStroke();
 textAlign(CENTER);
 textSize(330);
 textFont(font4);
 text("새",windowWidth/2+500,windowHeight/2+350);
 
 fill(220);
 noStroke();
 textAlign(CENTER);
 textSize(30);
 textFont(font4); 
 text("본능",windowWidth/2-430,windowHeight/2+300);
 text("알고리즘",windowWidth/2-380,windowHeight/2+330);
 
 fill(220);
 noStroke();
 textAlign(RIGHT);
 textSize(15);
 textFont(font3); 
 text("(saveCanvas == s)",windowWidth/2-330,windowHeight/2+200);
 text("(unhideCam == z)",windowWidth/2-330,windowHeight/2+220);
 text("(hideCam == spacebar)",windowWidth/2-330,windowHeight/2+240);
 
 fill(0);
 noStroke();
 textAlign(LEFT);
 textSize(40);
 textFont(font1);
 text("The Beauty",windowWidth/2-320,windowHeight/2-310);
 text("of the Eaten Path",windowWidth/2-185,windowHeight/2-270);

 fill(0);
 noStroke();
 rect(windowWidth/2-350,windowHeight/2-265,15,15); //left top
 rect(windowWidth/2-350,windowHeight/2+255,15,15); //left bottom
 rect(windowWidth/2+330,windowHeight/2-265,15,15); //right top
 rect(windowWidth/2+330,windowHeight/2+255,15,15); //right bottom
 

//------------------------------

  if (detections) {   
    detections.forEach(detection => {      

////--------------------------------<BRUSH 01>

      if(detection.label === 'person'){  

        brushes.push(new Brush(x, 200, 20));
        
//Custom Brush for 'person'
        //extraCanvas.noStroke(); 
        //extraCanvas.fill(255,196,0);
        //extraCanvas.ellipse(detection.x+detection.width/2,detection.y+detection.height/2,20,10);

//Original code for 'person'        
        //extraCanvas.noFill(); //ORIGINAL ONE
        //extraCanvas.stroke(0, 255, 0); //ORIGINAL ONE
        //extraCanvas.rect(detection.x, detection.y, detection.width, detection.height); //ORIGINAL ONE
        //rect(canvas.width/2, canvas.height/2, detection.width, detection.height);
    }
      
////--------------------------------<BRUSH 02>

      else {
        brushes.push(new Brush(x, 200, 20));
        
//Custom Brush for 'others'
        //extraCanvas.noStroke();
        //extraCanvas.fill(78,69,209);
        //extraCanvas.ellipse(detection.x+detection.width/2, detection.y+detection.height/2,2.5,2.5);

//Original code for 'others'     
        //extraCanvas.stroke(0,0, 255); //ORIGINAL ONE
        //extraCanvas.rect(detection.x, detection.y, detection.width, detection.height); //ORIGINAL ONE
      }  
      });
     
////--------------------------------<main canvas>
// a white stroke to hide tiny pixel error
   strokeWeight(2);
   stroke(255); 

// camera
   //image(video,windowWidth/2-320 , windowHeight/2-240,640,480); 

// rect to hide the cam
   //fill(255,value);
   //noFill();
   //rect(windowWidth/2-320,windowHeight/2-240,640,480); 

//Extra Canvas
   //extraCanvas.background(0);
   image(extraCanvas, windowWidth/2-320, windowHeight/2-240,640,480); 


}      // detection bracket
}      // mode 01 bracket
}      // function draw bracket

//***************************************************************************//
//************************** ↓ Other Functions ↓ ****************************//

function mouseClicked(){
  clear();
  extraCanvas.background(255);
}
//--------------------------------
function keyPressed() {
  if (keyCode===ENTER) {
    mode=1;
  }  
  if (keyCode===32) {
    video.hide();
    //value = 255;
  } 
  else if (key === 'z') {
   video.show();
   //value = 0;
  }
  if (key === 's') {
    saveCanvas(extraCanvas, 'Eaten_Path','png');
  }
return false;
}
//--------------------------------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//***************************************************************************//
//******************************* ↓ CLASS ↓ *********************************//

class Brush {
  constructor(x,y,r) { 
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  display() {
    stroke(0);
    strokeWeight(4);
    fill(255,0,0);
    ellipse(this.x, this.y, this.r*2 );
  }  
}


       
