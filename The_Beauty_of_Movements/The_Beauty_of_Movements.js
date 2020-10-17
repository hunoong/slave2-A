//**************************************************************************//
// [Slave to the Algorithm Studio Project] - 'The Beauty of the Eaten Path' //
// Sketch by Hunjung Lee                                                    // 
// Studio lead by Karen Ann Donnachie and Andy Simionato                    //
// All the code references~>[github.com/hunoong/slave2-A/tree/master/week12]//
//**************************************************************************//
var mode;
let img;
let video;
let detector;
let detections;
let extraCanvas;
let value = 0;
let font1,font2,font3,font4;
var randomColor1;
var randomColor2; 
var randomColor3;
var possible_brushes;
var brushes;
let conteBrush;
let dryinkBrush;
let pencilBrush;
//var button;
//**************************************************************************//
//************************** ↓ Function SETUP ↓ ****************************//
//**************************************************************************//
function preload() {
  font1 = loadFont('data/Didot_HTFB24_Bold.otf');
  font2 = loadFont('data/Akkurat-Light.ttf');
  font3 = loadFont('data/Akkurat-Bold.ttf');
  font4 = loadFont('data/HSbom2.0.ttf');
  img = loadImage('data/mouse_logo-01.png'); // mouse cursor (logo)
  conteBrush = loadImage('data/Hun_Conte_brush_01.png');
  dryinkBrush = loadImage('data/Hun_DryInk_brush_02.png');
  pencilBrush = loadImage('data/Hun_Pencil_brush_03.png');
  possible_brushes = [
  "data/Hun_Conte_brush_01.png","data/Hun_DryInk_brush_02.png","data/Hun_Pencil_brush_03.png",];
  var pos = floor(random(possible_brushes.length));
  brushes = loadImage(possible_brushes[pos]);   
}

function setup() {
  mode = 0;
  createCanvas(windowWidth,windowHeight);
  extraCanvas = createGraphics(640,480);
  extraCanvas.clear(255);  // to make the extraCanvas transparent.
  video = createCapture(VIDEO);
  frameRate(16);
  video.size(640,480);
  video.hide();
  //button = createButton('save');
  //button.mousePressed(save);
  //button.position(windowWidth*0.9,windowHeight*0.9);
  detector = ml5.objectDetector('cocossd', modelReady);
  noCursor();
}

//**************************************************************************//
//************************ ↓ COCO SSD Functions ↓ **************************//
//**************************************************************************//
function modelReady(){
  console.log('model loaded');
  detect(); 
}
function detect(){ detector.detect(video, gotResults); }
function gotResults(err, results){
  if (err) { console.log(err); return; }
  detections = results; detect();
  //detection results on the top left of the screen
  console.log(results); 
  for (var r=0; r<results.length; r++){
    fill(255);
    noStroke();
    textSize(30);
    textFont(font1);
    text(results[0].label, windowWidth*0.2 , windowHeight/2 -275 +20*r);  // detection labels at the left top corner
  }
}     

//**************************************************************************//
//*************************** ↓ Function DRAW ↓ ****************************//
//**************************************************************************//
function draw() { 
//--------------------------------<MODE 00>---------------------------------
clear();
if (mode==0) {
  video.stop(); 
  background(255);
  
// ellipse to make text unclear to read
  let ellipseBlue = map(mouseY, 0, height, 0, 245);
  noStroke();
  fill(0,0,ellipseBlue);
  ellipse(windowWidth/2-6,windowHeight/2-8,148,148);
  
// the landing page guide text  
  fill(0);
  textSize(20);
  textAlign(CENTER);
  textFont(font3);
  //text('press ENTER to unveil the art that the bird creates', windowWidth/2,windowHeight/2); // the original text
  text('press ENTER to unveil the art of movements', windowWidth/2,windowHeight/2);
  rect(windowWidth*0.3,windowHeight/2-13,15,15);
  rect(windowWidth*0.69,windowHeight/2-13,15,15);
  
// introduction for users
  fill(160);
  textSize(14);
  text('Originally designed to track algorithmic movement of birds. It might take some time to launch the detector. If the bird cursor is following, then it is good to go.', windowWidth/2,windowHeight-50);

// version specification
  textSize(9);
  textAlign(RIGHT);
  //text('The Beauty of the Eaten Path ver.01', windowWidth-50,windowHeight-50); // the original version
  text('The Beauty of Movements ver.02', windowWidth-50,windowHeight*0.02);

// mouse cursor (the logo)
  image(img, mouseX-10, mouseY-10,30,35); 
  }
  
//--------------------------------<MODE 01>---------------------------------
if (mode==1) {
 background(255);
 video.loop();

// main ellipse
 let ellipseBlue2 = map(mouseX, 0, width, 0, 245);
 noStroke();
 fill(0,0,245,ellipseBlue2);
 ellipse(windowWidth/2-500,windowHeight/2-340,800,800);
 
// version specification
 fill(160);
 textSize(9);
 textAlign(RIGHT);
 textFont(font3);
 text('The Beauty of Movements ver.02', windowWidth-50,windowHeight*0.02);
 
///////for error message
       textSize(14);
       textAlign(CENTER); 
       text('ERROR : IF YOU ARE SEEING THIS TEXT,', windowWidth/2,windowHeight/2);
       text('PLEASE LEAVE THIS WINDOW OPEN & RELOAD THE PROGRAM', windowWidth/2+25,windowHeight/2+25);
   
// Korean words for 'bird', 'instinct algorithms'
 fill(220);
 textSize(330);
 textFont(font4);
 text("새",windowWidth/2+500,windowHeight/2+350);
 textSize(30); 
 text("본능",windowWidth/2-430,windowHeight/2+300);
 text("알고리즘",windowWidth/2-380,windowHeight/2+330);
 
// users key codes
 textAlign(RIGHT);
 textSize(15);
 textFont(font3); 
 text("(to save == press 's')",windowWidth/2-330,windowHeight/2+175);
 text("(to clear == mouse'click')",windowWidth/2-330,windowHeight/2+195);
 text("(to hide the camera == press 'spacebar')",windowWidth/2-330,windowHeight/2+215);
 text("(to bring the camera back == press 'z')",windowWidth/2-330,windowHeight/2+235);
 
// the main title
 fill(0);
 textAlign(CENTER);
 textSize(40);
 textFont(font1); 
 //text("The Beauty of the Eaten Path",windowWidth/2,windowHeight/2-265); // the title for original version
 text("The Beauty of Movements",windowWidth/2,windowHeight/2-265);
 
// graphic elements
 rect(windowWidth/2-350,windowHeight/2-265,15,15); //left top
 rect(windowWidth/2-350,windowHeight/2+255,15,15); //left bottom
 rect(windowWidth/2+330,windowHeight/2-265,15,15); //right top
 rect(windowWidth/2+330,windowHeight/2+255,15,15); //right bottom

//--------------------------------<MAIN CANVAS>---------------------------------
//camera footage
   strokeWeight(2);
   stroke(255); 
   image(video,windowWidth/2-320 , windowHeight/2-240,640,480); 
   
//rect to hide the cam
   fill(255,value);
   rect(windowWidth/2-320,windowHeight/2-240,640,480); 

//Extra Canvas (the main canvas)
   image(extraCanvas, windowWidth/2-320, windowHeight/2-240,640,480); 
   
//mouse cursor for (mode 01)
   image(img, mouseX-10, mouseY-10,30,35); 
       
//--------------------------------
  if (detections) {   
     detections.forEach(detection => {       
       
//--------------------------------<MAIN BRUSHES>---------------------------------

//---brushes for living creatures------------------------------------------------
    if(detection.label === 'person'){ 
    strokeWeight(random(20));
    randomColor1 = color(random(245,255),random(185,195),random(0),random(50,255));
    randomColor2 = color(random(0),random(0),random(200,245),random(30,240));
    let sz = random(10);
    let sz2 = random(20);
    let sz3 = random(30);
    let spread = random(15);
    let spread2 = random(20);
    let r1 = random(detection.x+detection.width/2 - spread, detection.x+detection.height/2 + spread);
    let r2 = random(detection.y+detection.width/2 - spread, detection.y+detection.height/2 + spread);
    let r3 = random(detection.x+detection.width/2 - spread2, detection.x+detection.height/2 + spread2);
    let r4 = random(detection.y+detection.width/2 - spread2, detection.y+detection.height/2 + spread2);
    extraCanvas.tint(randomColor2);
    extraCanvas.image(dryinkBrush,r1, r2, sz2, sz3);
    extraCanvas.noStroke();
    extraCanvas.tint(randomColor2);
    extraCanvas.image(pencilBrush,r1, r2, sz3, sz3);
    extraCanvas.stroke(randomColor2);
    extraCanvas.noFill();
    extraCanvas.rect(r3, r4, sz, sz2);
    extraCanvas.stroke(randomColor1);
    extraCanvas.noFill();
    extraCanvas.rect(r3, r4, sz, sz2);
    }
    else if(detection.label === 'cat'){
    extraCanvas.tint(random(245,255),random(185,195),random(0),random(50,255));    
    extraCanvas.image(brushes, detection.x+detection.width/2,detection.y+detection.height/2,6,6); 
    }
    else if(detection.label === 'dog'){
    extraCanvas.tint(random(245,255),random(185,195),random(0),random(50,255));    
    extraCanvas.image(brushes, detection.x+detection.width/2,detection.y+detection.height/2,6,6); 
    }
    
//---brushes for objects----------------------------------------------------------
    else if(detection.label === 'cup'){        
    extraCanvas.tint(random(255),random(0),random(50),random(50,200));
    extraCanvas.image(brushes, detection.x+detection.width/2,detection.y+detection.height/2,random(20),random(20)); 
    }
    else if(detection.label === 'book'){  
    extraCanvas.stroke(random(255),random(0),random(150),random(50,240));
    extraCanvas.noFill();
    extraCanvas.ellipse(detection.x+detection.width/2,detection.y+detection.height/2,random(10),random(10));
    }
    else if(detection.label === 'scissors'){  
    extraCanvas.stroke(random(255),random(0),random(150),random(50,240));
    extraCanvas.noFill();
    extraCanvas.ellipse(detection.x+detection.width/2,detection.y+detection.height/2,random(20),random(20)); 
    }
      
//--------------------------------<OTHER BRUSHES>---------------------------------
    else { 
    extraCanvas.stroke(random(250),random(100,240));
    extraCanvas.noFill();
    extraCanvas.ellipse(detection.x+detection.width/2,detection.y+detection.height/2,3,3); 
     }  
     });
}      // detection bracket
}      // mode 01 bracket
}      // function draw bracket

//***************************************************************************//
//************************** ↓ Other Functions ↓ ****************************//
//***************************************************************************//
function mousePressed() {
  extraCanvas.clear();
}
function keyPressed() {
  if (keyCode === ENTER) {
    mode=1;
  }  
  if (keyCode === 32) {
   value = 255;
  } 
  else if (key === 'z') {
   value = 0;
  }
  if (key === 's') {
    saveCanvas(extraCanvas, 'The_Beauty_of_the_Eaten_Path','png');
}
return false;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
