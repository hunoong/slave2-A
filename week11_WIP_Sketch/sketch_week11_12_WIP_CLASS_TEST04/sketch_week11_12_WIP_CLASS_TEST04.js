let video;
let detector;
let detections;
let extraCanvas;
let bubbles = [];

//***************************************************************************//
//************************** ↓ Function SETUP ↓ ****************************//
function setup() {
  createCanvas(windowWidth,windowHeight);
  extraCanvas = createGraphics(640,480);
  extraCanvas.background(255);
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();
  detector = ml5.objectDetector('cocossd', modelReady);
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
  console.log(results); 
  for (var r=0; r<results.length; r++){
    fill(255);
    noStroke();
    textSize(30);
    text(results[0].label, 250, 100+20*r); //(x,y,spacing,r=numbers of label)
}
for (let i = 0; i < bubbles.length; i++){
    bubbles = new freshBubble(bubbles[i],detection.x,detection.y,20,20);
    bubbles.push(freshBubble);
}
} 

//***************************************************************************//
//*************************** ↓ Function DRAW ↓ ****************************//
function draw() { 
 background(50);
//--------------------------------< MAIN CANVAS > 
 strokeWeight(2);
 stroke(255); 
 image(extraCanvas,320,240,640,480);
//--------------------------------
   
  if (detections) {  
     detections.forEach(detection => {   

     for (let i = 0; i < bubbles.length; i++){
       bubbles = new freshBubble(bubbles[i],detection.x,detection.y,20,20);
       bubbles.push(freshBubble);
}
       
//-----------< BRUSH 01 >-----------
      if(detection.label === 'person'){  
        
        bubbles[i].display();         
}
//-----------< BRUSH 02 >-----------
       else { 
        
        bubbles[i].display();

    }  
});
}     // detection bracket
}      // function draw bracket

//***************************************************************************//
//******************************* ↓ CLASS ↓ *********************************//
class freshBubble {
  constructor(x,y,r) {
    this.x = x; // value should be in. not like 'detecion.x'...etc
    this.y = y;
    this.r = r;
  }
  display() {
    stroke(0);
    strokeWeight(4);
    fill(255,0,0);
    extraCanvas.ellipse(this.x, this.y, this.r*2);   // detection.x / detection.y / detection.width / detection.height ???
  }
}
