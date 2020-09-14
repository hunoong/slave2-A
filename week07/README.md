# Week 07 [11.09.20] 

## One Minute Presentation
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/Screen%20Shot%202020-09-14%20at%2011.04.08%20pm.png" width="800" /> <br/>
I changed my project and this is basically an idea that combines two different ideas from my previous pitch ideas.<br/>
The objective of this is to create a collaborative and generative art piece in real time by tracking the instinct of birds. <br/> 
I decided to go with this idea as watching the birds brought me joy as I already spend so much time in front of the computer it has been nice to look at something that isn’t the 2020 hellscape we find ourselves in. <br/>
###### INSPIRATION
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/tree%20drawing.png" width="400" /> <img src="https://github.com/hunoong/slave2-A/blob/master/Images02/vehicle%20motion%20drawing.png" width="200" /> <br/>
*'Tree Drawing' and 'Vehicle Motion Drawing' by Tim Knowles* <br/>
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/happy%20film.png" width="300" /> <img src="https://github.com/hunoong/slave2-A/blob/master/Images02/pokemon%20go.jpg" width="300" /> <br/>
*'The Happy Film' by Stefan Sagmeister and 'Pokémon go' by Nintendo* <br/>

***To initialise this project, I had to make hypothesis processing*** <br/>
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/IMG_3924.PNG" width="800" /> <br/>
This is the process that I'm currently thinking of.<br/>

***And following gifs are the possible outcomes***
<img src="https://github.com/hunoong/slave2-A/blob/master/gifs/IMG_3922.GIF" width="800" /> <br/>
<img src="https://github.com/hunoong/slave2-A/blob/master/gifs/IMG_3921.GIF" width="800" /> <br/>
###### The user can watch the live painting in real time and capture and download the painting whenever they want. <br/>
I wasn't sure whether capturing this with a smartphone and presenting it as a live painting on the web is possible or not, but in class I got some feedback in related to this.<br/>
I could use smartphones, but for sustainability, it's better to use remote cameras such as Raspberry Pi camera or Arduino camera.<br/>
Also it would be nice to consider working on stokes, gestures and mediums that the birds are working in as well. <br/>
But for this stage of experiment, I will use my Mac webcam. <br/>
Also, for my back-up plan, if I end up behind schedule, then I think I might make a series of artworks as a backup instead using the Web-live drawing in real time. <br/>
<br/>

## Paper Mock ups
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/paper_mockup01.png" width="400" /><img src="https://github.com/hunoong/slave2-A/blob/master/gifs/paper_mockup03.png" width="400" /> <br/>
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/paper_mockup02.png" width="400" /><img src="https://github.com/hunoong/slave2-A/blob/master/gifs/paper_mockup04.png" width="400" /> <br/>
Some paper mockups for my project. <br/>
<br/>

## Processing Workshop #4 - Wiggly Letters
Today we had another workshop. We learned how to make wiggly letters. <br/>
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/workshop_00.png" width="800" /><br/>

###### Following code lines are the codes that we learned today and some notes of mine.<br/>
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/workshop_wiggly_code01.png" width="800" /><br/>
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/workshop_wiggly_code02.png" width="800" /><br/>
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/workshop_wiggly_code03.png" width="800" /><br/>
<br/>


## Pseudocode
Also we did how to make ***Pseudocode*** and this is in class Pseudocode of mine. <br/>

**FUNCTION “act” <br/>
INPUT weather <br/>
WHILE sun is out<br/>
GO OUT to balcony**<br/>
<br/>
**IF sun is out, cloud=0,<br/>
SIT, SUNBATHE<br/>
IF sun>cloud,<br/>
go out to balcony and CHECK the wind<br/>
IF no wind or >15km/h,<br/>
THEN SIT, SUNBATHE<br/>
IF wind <15km/h<br/>
GO BACK to bed**<br/>
<br/>
**ELSE IF cloudy, sun<cloud,<br/>
GO BACK to bed**<br/>

**END IF getting out of bed** <br/>

###### And following is Pseudocode for my project that I made after the class. <br/>

**This program tracks the movements of the birds<br/>
and allows the user to watch a live painting by birds and to get the paintings**<br/>

**FUNCTION track birds<br/>
VideoCapture(current available camera)**<br/>

**INPUT the seeds I sow <br/>
OUTPUT birds path in real time**<br/>

**IF { MotionDetection<br/>
success, img = imgshow<br/>**
**}**<br/>

**ELSE { no MotionDetection<br/>
then break<br/>**
**}**<br/>

**IF motion detection in the input area** // the front yard<br/>
**THEN track the size between (x-10),(x+10)**<br/>

**ELSE stop tracking**<br/>

**WHILE tracking is on,<br/>
Thicker Stroke = Frame per Distance is close<br/>
Thinner Stroke = Frame per Distance is far<br/>
Stroke(random colour) by size<br/>
Stroke(random texture) by Frame per Distance**<br/>

**END IF no movement**<br/>
<br/>


## Extra findings in life
**An interesting glitch in class. <br/>**
There was a connection issue and that connection issue made some interesting visual. <br/>
It made the workshop look more like "codes" in a way..<br/>
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/workshop_interesting%20scene(glitch).png" width="800" /> <br/>
<br/>

**Drawphone <br/>**
This week, I got invited to a game called 'Drawphone' from my Korean-Australian friends. <br/>
When I clicked the link, I was surprised as the game was from Github.<br/>
It was fascinated to acknowledge again that the coding is everywhere in our life. <br/>
It was just interesting that I'm taking this studio and learning how to code, and my friends were playing this game. <br/>

From [Drawphone](https://github.com/tannerkrewson/drawphone) <br/>
<img src="https://github.com/hunoong/slave2-A/blob/master/Images02/drawphone.jpg" width="800" /> <br/>
It was funny how 'peanuts' that I drew became 'illegal organ extraction' and 'brain' became 'Dwayne Johnson'.<br/>
<br/>
