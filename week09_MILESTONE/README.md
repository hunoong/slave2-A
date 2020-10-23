# Week 09 [25.09.20]
###### [[>click here to check week09 sketch folder<]](https://github.com/hunoong/slave2-A/tree/master/week09_MILESTONE)
###### [< MAIN PAGE](https://hunoong.github.io/slave2-A/)

## Over the week...
I experimented sketches and tried to combine 'ML5 Object detection sketch' and ['Drawing sketch-'Doodle Vector'](https://github.com/karenanndonnachie/Slave-To-The-Algorithm/tree/master/P5js/doodleVector_P5js) together.
I was not sure how I can draw things over the camera as the detection area kept disapearing.<br/>
<br/>
<img src="https://hunoong.github.io/slave2-A/Images03/week09_01.png" width="600" /> <img src="https://hunoong.github.io/slave2-A/Images03/week09_02.png" width="300" /> <br/>
<img src="https://hunoong.github.io/slave2-A/Images03/week09_04.png" width="450" /> <img src="https://hunoong.github.io/slave2-A/Images03/week09_05.png" width="450" /> <br/>
<br/>
<br/>

## Milestone Review - 1min presentation
###### [[>click here to check Milestone Sketch folder<]](https://github.com/hunoong/slave2-A/tree/master/week09_MILESTONE)
<img src="https://hunoong.github.io/slave2-A/Images03/week09_10.png" width="450" /><img src="https://hunoong.github.io/slave2-A/Images03/week09_11_milestone.gif" width="450" /> <br/>
The name of my project is ‘Bird Tracker’ and the subtitle of it is ‘the beauty of the eaten path.’<br/>
My project will be carried out in two major parts. **1) The code for detecting motion 2)The code for drawing based on movement.**<br/>
<img src="https://hunoong.github.io/slave2-A/Images03/week09_15.png" width="300" />
<br/>

And over the past few weeks I’ve decided what program and library to use. I ended up using p5.js and ML5 Library. And I was able to connect my iPhone as a webcam by using Epoccam and p5js. Once identified how to import ML5 library and COCO SSD, I was able to detect objects through p5.js. So I went outside and started exploring more with this library.<br/>
<img src="https://hunoong.github.io/slave2-A/Images03/week09_09.png" width="300" />
<br/>
The object detector detected objects pretty well so I thought there’s no issue in tracking birds. But I think because of the resolution of the camera and the distance between the camera and birds, it didn’t end up tracking birds that well. There were only three times that birds were detected correctly out of 25 times that birds showed up. Except for those three times, the rest were detected as sheep or sports balls.<br/>
<img src="https://hunoong.github.io/slave2-A/Images03/week09_12.png" width="300" /><img src="https://hunoong.github.io/slave2-A/Images03/week09_13.png" width="300" /><img src="https://hunoong.github.io/slave2-A/Images03/week09_14.png" width="300" /><br/>
<br/>
So I went out to the park to get a close distance, but somehow there were literally no birds in the park. So I ended up detecting other things. It detected a person and his dog pretty well. Obviously not 100%, but it seemed like the background didn’t interrupt the objects. Then I came back to my place and sowed some seeds on the path rather than on the grass and waited for a few minutes. It detected the bird quite well even though at the end it detected it as a human.<br/>
<br/>

###### Feedback :
Karen suggested me to use a second canvas for detection and camera capture(mapping it into a second canvas.). Also, I just need to find the right path way to get the data point for connecting detection area as a brush. She also mentioned that the idea of getting a wrong detection is interesting.<br/>
<br/>
I think I need to consider whether I will embrace ‘Happy Accident : weird detection’ or not if the sketch is not working properly.<br/>
<br/>

###### What's next?
>***Current issues that I am having are :*** <br/>
1) Figuring out the right path way to make my sketch draw while objects are being detected, also while the web cam is running.<br/>- To solve this, I am experimenting ‘Second Canvas’ function.<br/>
2) Many linked files problem.<br/>- To solve this, I got feedback to make things ‘locally’ so that only essential things can be linked.<br/>
<br/>

>***Possible next steps are :*** <br/>
1) Embracing wrong detection and make it into a part of art piece. Or multiple canvas can create different generative path of arts<br/>
2) Refined textures and brushes<br/>
3) Random colouring on crossed area<br/>
4) Applying these art works to other works or create **art posters** by using these paintings<br/>
<img src="https://hunoong.github.io/slave2-A/Images03/week09_016.png" width="450" /> <br/>
<br/>
<br/>

## After class...
I asked about 'How to change the detection into a brush'
<br/>
So I wanted to make brushes while obejects are being detected, and I realised the thing that I didn't understand was <coordinates are different from the shape>. It is really basic stuff, and it applies to my sketch as well. All I had to change was ***'rect(detection.x, detection.y, detection.width, detection.height)'*** to *'ellipse(**detection.x+detection width/2**, **detection.y+detection.height/2**, value, value)'*.<br/>
<img src="https://hunoong.github.io/slave2-A/Images03/week09_detection.png" width="450" />
<br/>
<br/>

## Issue on working locally
So after the class I changed my work area from Web Editor to Local. Thankfully, I was able to load my sketch on the processing locally, but loading external libraries makes the sketch weird which did not happen on the web editor. I solved this by deleting ‘cloudflare’ library on index section, and then the sketch ran properly. But still the loaded preview is a bit different to web editor version, so I need to figure this out. <br/>
>By deleting ***<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"> </script> and <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"> </script> on my index.*** <br/>

>I only left ***<script src="https://unpkg.com/ml5@0.5.0/dist/ml5.min.js" type="text/javascript"> </script>*** this part on the index.<br/>

It was very weird that the sketch did not work when I deleted those two libraries on Web Editor. But it's now working on my local sketch.<br/>
<br/>

<img src="https://hunoong.github.io/slave2-A/Images03/week09_06_issue.png" width="450" /><img src="https://hunoong.github.io/slave2-A/Images03/week09_07_solved.png" width="450" />

<br/>
<br/>

###### [< MAIN PAGE](https://hunoong.github.io/slave2-A/)
###### [NEXT WEEK >](https://hunoong.github.io/slave2-A/week10/)
