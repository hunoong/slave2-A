var mode;
let img;
let video;
let detector;
let detections;
let extraCanvas;
let value = 0;
let font1,font2,font3,font4;
let sampleIsPlaying = false;

//***************************************************************************//
//************************** ↓ Function SETUP ↓ ****************************//
function preload() {
  font1 = loadFont('data/Didot_HTFB24_Bold.otf');
  font2 = loadFont('data/Akkurat-Light.ttf');
  font3 = loadFont('data/Akkurat-Bold.ttf');
  font4 = loadFont('data/HSbom2.0.ttf');
  img = loadImage('data/mouse_logo-01.png');
}

function setup() {
  mode = 0;
  createCanvas(windowWidth,windowHeight);
  extraCanvas = createGraphics(640,480);
  extraCanvas.clear(); // makes the extra canvas transparent //extraCanvas.background(255);
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
function detect(){ detector.detect(video, gotResults); }
function gotResults(err, results){
  if(err){ console.log(err); return }
  detections = results; detect(); 
}
  
//***************************************************************************//
//*************************** ↓ Function stop ↓ ****************************//
  
function mouseClicked() {
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    background(255);
      if (sampleIsPlaying) {
      video.stop();
      sampleIsPlaying = false;
      text('Click to play!', width / 2, height / 2);
      } else {
      video.loop();
      sampleIsPlaying = true;
      text('Click to stop!', width / 2, height / 2);
      }}}
      
//***************************************************************************//
//*************************** ↓ Function DRAW ↓ ****************************//

function draw() {
//------------------------------<MODE 00>
  clear();
  if (mode==0) {
    background(255);
    
    noStroke();
    fill(0,0,250,240);
    //ellipse(windowWidth/2-56,windowHeight/2-5,60,40);
    ellipse(windowWidth/2,windowHeight/2-5,180,90);
    
    fill(0);
    textSize(20);
    textAlign(CENTER);
    textFont(font3);
    text('press ENTER to unveil the art that the bird creates', windowWidth/2,windowHeight/2);
    
    rect(windowWidth/2-330,windowHeight/2-15,15,15);
    rect(windowWidth/2+330,windowHeight/2-15,15,15);
    
    image(img, mouseX-10, mouseY-10,30,35); 
  }
  
//------------------------------<MODE 01>
  if (mode==1) {
//background(255);
//textAlign(CENTER);
//text('Click to play!',extraCanvas.width/2,extraCanvas.height/2);
 
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
 textSize(12);
 textFont(font3); 
 text("(capture == c)",windowWidth/2-330,windowHeight/2+200);
 text("(hideCam == h)",windowWidth/2-330,windowHeight/2+220);
 text("(showCam == s)",windowWidth/2-330,windowHeight/2+240);

 noStroke();
 fill(0,0,250);
 ellipse(windowWidth/2-500,windowHeight/2-340,800,800);
 
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
 rect(windowWidth/2-350,windowHeight/2+265,15,15); //left bottom
 rect(windowWidth/2+350,windowHeight/2-265,15,15); //right top
 rect(windowWidth/2+350,windowHeight/2+265,15,15); //right bottom


//------------------------------
  if (detections) {
    
    detections.forEach(detection => {      

////--<BRUSH 01>
      if(detection.label === 'person'){  

        extraCanvas.noStroke(); 
        extraCanvas.fill(255,196,0);
        extraCanvas.ellipse(detection.x+detection.width/2,detection.y+detection.height/2,20,10);
        //extraCanvas.noFill(); //ORIGINAL ONE
        //extraCanvas.stroke(0, 255, 0); //ORIGINAL ONE
        //extraCanvas.rect(detection.x, detection.y, detection.width, detection.height); //ORIGINAL ONE
        //rect(canvas.width/2, canvas.height/2, detection.width, detection.height);
    }
      
////--<BRUSH 02>
      else {
        extraCanvas.noStroke();
        extraCanvas.fill(78,69,209);
        extraCanvas.ellipse(detection.x+detection.width/2, detection.y+detection.height/2,2.5,2.5);
        //extraCanvas.stroke(0,0, 255); //ORIGINAL ONE
        //extraCanvas.rect(detection.x, detection.y, detection.width, detection.height); //ORIGINAL ONE
      }  
      })
     
////--<main canvas>
image(video,windowWidth/2-320 , windowHeight/2-240,640,480); //camera
fill(255,value);
rect(windowWidth/2-320,windowHeight/2-240,640,481); // rect to hide the cam
image(extraCanvas, windowWidth/2-320, windowHeight/2-240,640,480); //extra canvas


}      
} 
}

//***************************************************************************//
//************************** ↓ Other Functions ↓ ****************************//

function keyTyped(){
  if(key === 'h') {  //to hide the camera
    
    value = 255;
    
  } else if (key === 's'){  //to show the camera
    value = 0;
    
}
  if(key === 'c') {
    saveCanvas(extraCanvas, 'Eaten_Path','png');
}
}

function keyPressed() {
  if (keyCode===ENTER) {
    mode=1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

       
