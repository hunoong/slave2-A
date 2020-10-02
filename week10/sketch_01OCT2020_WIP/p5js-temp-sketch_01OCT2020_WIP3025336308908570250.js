var button;
var slider;
var mode;
var bgcolour;
let pg;
let video;
let detector;
let detections;

//***************************************************************************//
//************************** ↓ Function SETUP ↓ ****************************//

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255); // the BACK background
  
  pgleft = createGraphics(width/2,height);
  pgright = createGraphics(width/2, height);
 
  pgleft.background(255,1); // (left canvas color, transparency=ERASE)
  pgright.background(255); // white but fully transparent(zero opacity)
  
  video = createCapture(VIDEO);
  video.size(pgright.width,pgright.width/4*3);
  //video.position (pgleft.x, 220);
  video.hide();
  
  //slider = createSlider(0,255,0,1);
  //slider.position(100,height+150);
  button = createButton('snap');
  button.mousePressed(save); //:?? how can I save the left canvas only?
  button.position(30,120);
  //button.position(slider.x+200,slider.y);
  
  detector = ml5.objectDetector('cocossd', modelReady);
}
  
//***************************************************************************//
//************************ ↓ COCO SSD Functions ↓ **************************//
function modelReady(){
  console.log('model loaded')
  detect(); }
function detect(){ detector.detect(video, gotResults); }
function gotResults(err, results){
  if(err){ console.log(err); return }
  detections = results; detect(); }
//***************************************************************************//
//*************************** ↓ Function DRAW ↓ ****************************//

function draw() {
  pgright.background(255);
  
  image(pgleft,0,0, width/2, height);
  //image(pgleft,0,0,pgleft.width,pgleft.width/4*3); //for selected area only
  image(pgright, width/2,0, width/2, height);
  //image(video, 0,100,pgleft.width,pgleft.width/4*3);  // : this is working
  //image(video, 0,100,width,width/4*3); // : this isn't working
  //image(video,width/2,100,pgright.width,pgright.width/4*3); //: final one with 100 top margin
  image(video,width/2,0,200,150);
  
//---------------
  if (detections) {
    detections.forEach(detection => {
      // <DETECTION LABEL>
      //noStroke();
      //fill(255);
      //strokeWeight(2);
      //text(detection.label, detection.x + 4, detection.y + 10); 
      //noFill();
      //strokeWeight(2); 
////---------------
      // <DETECTION DRAWING>
      // noFill(); //ORIGINAL ONE
      // strokeWeight(3); //ORIGINAL ONE
      
////--<BRUSH 01>
      if(detection.label === 'person'){  
        noStroke(); 
        fill(255,196,0);
        ellipse(detection.x+detection.width/2,detection.y+detection.height/2,20,20);
        //stroke(0, 255, 0); //ORIGINAL ONE
        //rect(detection.x, detection.y, detection.width, detection.height); //ORIGINAL ONE
      }
      
////--<BRUSH 02>
      else {
        noStroke();
        fill(78,69,209);
        ellipse(detection.x+detection.width/2, detection.y+detection.height/2,5,5);
        //stroke(0,0, 255); //ORIGINAL ONE
        //rect(detection.x, detection.y, detection.width, detection.height); //ORIGINAL ONE
      }  
      })
}   
 
 
}  
