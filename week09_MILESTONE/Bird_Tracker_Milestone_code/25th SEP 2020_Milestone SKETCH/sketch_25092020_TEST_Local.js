// CURRENT CODES & REFERENCES :
// [The Coding Train p5.js Tutorials on Youtube]
// [11.1 : Live Video and createCapture()]
// [11.2 : Video Photobooth]
// [8.5 : Interacting with the DOM using Sliders, Buttons and Text Inputs]
// [9.7 : 9.7: Drawing Object Trails]
// [text-and-sliders by jhedberg]
// [github.com/ml5js/ml5-library - p5js/object detector COCO SSD]
// [Example from {karenanndonnachie/Slave-To-The-Algorithm/P5js/doodleVector_P5js}]
// [How to display text menu before game starts by Magic Monk on Youtube]
// Jinni Low - Web editor
//***************************************************************************//
//***************************************************************************//

var button;
var slider;
var paths = [];
var particles = [];
var mode;
var bgcolour;

let video;
let vid;
let detector;
let detections;
let painting = false;
// How long until the next circle
let next = 0;
// Where are we now and where were we?
let current, howMany;
let previous;

//***************************************************************************//
//************************** ↓ Function SETUP ↓ ****************************//

function setup() {
  mode = 0;
  createCanvas(640, 480);
  bgcolour = color(50);
  //createCanvas(950, 720);
  //createCanvas(windowWidth, windowHeight);
  //textSize(20);
  
  //current = createVector(0,0);
  //previous = createVector(0,0);
    
  video = createCapture(VIDEO);
  //video.size(width, height);
  video.size(640, 480);
  //video.hide();
 
  slider = createSlider(0,255,0,1);
  slider.position(100,height+150);
  
  button = createButton('snap');
  button.mousePressed(save);
  button.position(slider.x+200,slider.y);

  detector = ml5.objectDetector('cocossd', modelReady)
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
//---------------------- ↓ not sure about this part ↓ ----------------------//
  //particles.push(new Particle(100,100));
  //next = 0;
  //painting = true;
  //previous.x = detection.x;
  //previous.y = detetion.y;
  //paths.push(new Path());
//---------------------- ↑ not sure about this part ↑ ----------------------//   
  if(err){
    console.log(err);
    return
}
  detections = results;
  detect();
}
  
//***************************************************************************//
//*************************** ↓ Function DRAW ↓ ****************************//

function draw() {
  background(bgcolour);
  //background(50);
  clear();
  if (mode==0); {
    textSize(20);
    textAlign(CENTER,CENTER);
    text('Press enter to track',width/2, height/2);
    slider.hide();
    button.hide();
    
  }
  if (mode==1) {
  background(bgcolour);
  //image(video, 0,0);
  //fill(0);
  //textSize(14);
  //text('video', slider.x,slider.y);
  //text('image', 240,707);
  slider.show();
  button.show();
  
  // for the transparency depending on the slider    
  //fill(255,255,255,slider.value());
  //noStroke();
  //rect(0,0,950, 720);
    
    
    
//---------------
  
  if (detections) {
    detections.forEach(detection => {
      noStroke();
      //fill(255);
      strokeWeight(2);
      text(detection.label, detection.x + 4, detection.y + 10) 

//---------------
      //noFill();
      strokeWeight(2);
      if(detection.label === 'person'){     
        //**('') = the one that I want to track**
        stroke(255, 196, 0,100);
        strokeWeight(5);
        //rect(detection.x, detection.y, detection.width, detection.height,20);
        
        ellipse(detection.x+detection.width/2,detection.y+detection.height/2,50,50);
        
        
        
//---------------------- ↓ not sure about this part ↓ ----------------------//
//        if (millis() > next && painting) {
//          current.x = detection.x;
//          current.y = detection.y;
//          let force = p5.Vector.sub(current, previous);
//          force.mult(0.02);
//          paths[paths.length - 1].add(current, force);
//          next = millis() + random(100);
//          previous.x = current.x;
//          previous.y = current.y;
//        }
//          for( let i = 0; i < paths.length; i++) {
//            paths[i].update();
//            paths[i].display();
//        }
//---------------------- ↑ not sure about this part ↑ ----------------------//    
        
      } 
      
      else {
        stroke(78,69, 209);
        ellipse(detection.x+detection.width/2, detection.y+detection.height/2,20,20);
        //rect(detection.x, detection.y, detection.width, detection.height);
      } 
     
    })
  }   
}
}
  
function keyPressed() {
  if (keyCode===ENTER) {
    mode=1;
  }
}
  
////***************************************************************************//
////********************* ↓ CLASSES from [doodleVector] ↓ *********************//

//// A Path is a list of particles
//class Path {
//  constructor() {
//    this.particles = [];
//    this.hue = random(100);
//  }

//  add(position, force) {
    
//    // Add a new particle with a position, force, and hue
//    this.particles.push(new Particle(position, force, this.hue));
//  }
  
//  // Display path
//  update() {  
//    for (let i = 0; i < this.particles.length; i++) {
//      this.particles[i].update();
      
//    }
//  }  
//  // Display path
//  display() { 
//    // Loop through backwards
//    howMany+=this.particles.length;   
//    for (let i = 1; i <this.particles.length; i++) {
//      // If we shold remove it   
//        this.particles[i].display(this.particles[i-1]);    
//    }  
//  }  
  
//}
 
//// Particles along the path
//class Particle {
//  constructor(position, force, hue) {
//    this.position = createVector(position.x, position.y);
//    this.velocity = createVector(force.x, force.y);
//    this.drag = 0.95;
//    this.lifespan = 255;
//  }
//  update() {
//    // Move it
//    this.position.add(this.velocity);
//    // Slow it down
//    this.velocity.mult(this.drag);
//    // Fade it out
//    this.lifespan--;
//  }
//  // Draw particle and connect it with a line
//  // Draw a line to another
//  display(other) {
//    stroke(0, this.lifespan);
//    fill(0, this.lifespan/2);    
//    ellipse(this.position.x,this.position.y, 8, 8); 
//    line(this.position.x, this.position.y, other.position.x, other.position.y);


//    // If we need to draw a line
//    if (other) {
//      strokeWeight(4);
      
//      line(this.position.x, this.position.y, other.position.x, other.position.y);
//    }}
//}
  
////***************************************************************************//
////***************************************************************************//
