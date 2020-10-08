let pg;
let video;
let detector;
let detections;
let font1,font2,font3,font4;
let extraCanvas;

//***************************************************************************//
//************************** ↓ Function SETUP ↓ ****************************//

function preload() {
  font1 = loadFont('data/Didot_HTFB24_Bold.otf');
  font2 = loadFont('data/Akkurat-Light.ttf');
  font3 = loadFont('data/Akkurat-Bold.ttf');
  font4 = loadFont('data/HSbom2.0.ttf');
}

function setup() {
  createCanvas(800, 800);
  background(51);
  textFont(font1);
  //extraCanvas = createGraphics(400,400);
  video = createCapture(VIDEO);
  video.size(200,200);
  video.position (canvas.width/2,canvas.height/2);
  
  //video.position (extraCanvas.x, 220);
  //video.hide();
  //extraCanvas.clear(); // makes the extra canvas transparent
  //extraCanvas.background(255,0,0,100);
 
  detector = ml5.objectDetector('cocossd', modelReady);
  
}
  
//***************************************************************************//
//************************ ↓ COCO SSD Functions ↓ **************************//

function modelReady(){
  console.log('model loaded')
  detect(); 
}
 
function detect(){ detector.detect(video, gotResults); }
function gotResults(err, results){
  if(err){ console.log(err); return }
  detections = results; detect(); 
}
  
  
//***************************************************************************//
//*************************** ↓ Function DRAW ↓ ****************************//
   
function draw() {
 background(51);

//------------------------------
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

        //noStroke(); 
        //fill(255,196,0);
        //ellipse(detection.x+detection.width/2,detection.y+detection.height/2,20,20);
        noFill(); //ORIGINAL ONE
        stroke(0, 255, 0); //ORIGINAL ONE
        rect(detection.x, detection.y, detection.width, detection.height); //ORIGINAL ONE
      }
      
////--<BRUSH 02>
      else {
        noStroke();
        //fill(78,69,209);
        //ellipse(detection.x+detection.width/2, detection.y+detection.height/2,5,5);
        stroke(0,0, 255); //ORIGINAL ONE
        rect(detection.x, detection.y, detection.width, detection.height); //ORIGINAL ONE
      }  
      })

}   
 
}  
