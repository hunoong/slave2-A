let video;
let detector;
let detections;
let extraCanvas;
let font1,font2,font3,font4;
//let bubbles = [];
//let bubble;
let bubble1;
let bubble2;

//***************************************************************************//
//************************** ↓ Function SETUP ↓ ****************************//
function setup() {
  createCanvas(1280,960);
  extraCanvas = createGraphics(640,480);
  extraCanvas.background(255);
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();
  detector = ml5.objectDetector('cocossd', modelReady);
//------------------------------
  bubble1 = new Bubble(200,200,40);
  //bubble1 = new Bubble(detection.x, detection.y,40);
  bubble2 = new Bubble(400,400,20);
//------------------------------
//for (let i = 0; i < 10; i++) {
//  bubbles[i] = new Bubble(200,200,40);
//}  
//------------------------------
}

//***************************************************************************//
//************************ ↓ COCO SSD Functions ↓ **************************//
function modelReady(){
  console.log('model loaded')
  detect(); 
}

function detect(){ 
  detector.detect(video, gotResults); 
}

function gotResults(err, results){
  if (err) { 
     console.log(err); 
     return; 
}
  detections = results; 
  detect();
  //console.log(results); 
  //for (var r=0; r<results.length; r++){
  //  fill(255);
  //  noStroke();
  //  textSize(30);
  //  text(results[0].label, 250, 100+20*r); //(x,y,spacing,r=numbers of label)
  //}
 
  //bubbles.push(new Bubble(detection.x,detection.y,10,20));
  //bubble = new Bubble(detection.x,detection.y,20,20);
} 

//***************************************************************************//
//*************************** ↓ Function DRAW ↓ ****************************//
function draw() { 
 background(50);
//--------------------------------< MAIN CANVAS > 
 strokeWeight(2);
 stroke(255); 
 //image(video,windowWidth/2-320 , windowHeight/2-240,640,480);
 image(extraCanvas,320,240,640,480);
//--------------------------------

//for (let i = 0; i < bubbles.length; i++) {
  if (detections) {   
     detections.forEach(detection => {   
      
//-----------< BRUSH 01 >-----------
      if(detection.label === 'person'){  
        
        extraCanvas.noFill(); //ORIGINAL ONE
        extraCanvas.stroke(0, 255, 0); //ORIGINAL ONE
        extraCanvas.rect(detection.x, detection.y, detection.width, detection.height); //ORIGINAL ONE
       //extraCanvas.bubble = new Bubble(detection.x+detection.width/2, detection.y+detection.height/2,20,20);
       //bubble.show();
        bubble1.show();
       //bubbles[i].move();
       //bubbles[i].show();
       //bubbles.push(new Bubble(200,100,10,20));
}
//-----------< BRUSH 02 >-----------
       else { 
        
        extraCanvas.noFill();
        extraCanvas.stroke(0,0, 255); //ORIGINAL ONE
        extraCanvas.rect(detection.x, detection.y, detection.width, detection.height); //ORIGINAL ONE
        //extraCanvas.bubble = new Bubble(detection.x+detection.width/2, detection.y+detection.height/2,20,20);
        //bubble.show();
         bubble2.show();
        //bubbles[i].move();
        //bubbles[i].show();
        //bubbles.push(new Bubble(300,100,40,20));
    }  
});
}      // detection bracket
//}    // array bracket
}      // function draw bracket

//***************************************************************************//
//******************************* ↓ CLASS ↓ *********************************//
class Bubble {
  constructor(x,y,r) {
    this.x = x; // value should be in. not like 'detecion.x'...etc
    this.y = y;
    this.r = r;
  }
  //update(){
  //  this.gotResults 
  //}
  //move() {
  //  this.x = this.x + random(-5, 5);
  //  this.y = this.y + random(-5, 5);
  //}
  show() {
    stroke(255);
    strokeWeight(4);
    fill(255,0,0);
    extraCanvas.ellipse(this.x, this.y, this.r*2);   // detection.x / detection.y / detection.width / detection.height ???
  }
}
