# Week 10 [02.10.20]
## Current Stage (Code Sketch is in the sketch_WIP folder)
<img src="https://hunoong.github.io/slave2-A/week10/work_in_progress_screenshot.png" width="900" /> <br/>
<br/>

## Current Stage - WIP screenshots 
<img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_01.png" width="220" /><img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_02.png" width="460" /><img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_03.png" width="220" /><br/>
On the previous week, I was able to track a pigeon few times with the ML5 detector. But I couldn't figure out how I can improve the quality of the camera so I tried a different approach to solve this problem. I tried to import a recorded video that I took, and see whether it can track the birds or not.<br/>
I found out that I could not track the birds with this way. There are some errors occurred that I do not understand, and somehow the tracker tracks the birds as 'knife' or 'bear' etc.<br/>
<img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_04.png" width="450" /><img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_05.png" width="450" /><br/>
So I decided to use the fixed resolution of the detector and I kept experimenting with a front webcam by changing the track code from 'bird' to 'person'.<br/>
I was able to divide the canvases that Karen told us last week, and I was able to import the live cam on the side. But the tracking area was interrupting both canvases. Spending some time to fix it, I was able to put the detecting area on the left and the live cam on the right. Also, there were some issues in the size of the live cam, but I was able to find how to fit the camera on the canvas.<br/>
<img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_06.png" width="450" /><img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_07.png" width="450" /><br/>
I was able to track & draw objects on the left hand side canvas while the camera was on.<br/>
But there was a problem in changing locations of the pg.images. I was able to change the margin of the live cam on the right hand side, but I couldn't change the location of (or the margins) the detecting area.<br/>
<img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_08.png" width="450" /><img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_09.png" width="450" /><br/>
I couldn't solve the problem that I mentioned earlier, so I decided to use the same margins for both of the pg.images. And then, I changed the rectangular detecting area into circular shape as Karen showed last week.<br/> 
<img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_11.png" width="450" /><img src="https://hunoong.github.io/slave2-A/Images03/WK10_WIP_Capture_12.png" width="450" /><br/>
This is my current stage at the moment(on the 4th of October). I was able to put some texts at the back while drawing shapes on the second canvas in the middle of the screen. // Reference : [The Coding Train - 2.6: createGraphics()](https://www.youtube.com/watch?v=TaluaAD9MKA&ab_channel=TheCodingTrain) <br/>
<br/>

>###### Feedback from Andy and Karen after class
>I didn't think I'd suddenly get such nice and encouraging words from my tutors. They said it’s very difficult to find young designers that have that kind of sensibility for new media art. And also said that it's nice this ideal of non human drawing. It’s very sensitive and contemporary. <br/>

I was quite shocked(on the good side) and this was a great driving force for me to continue to believe in myself and believe in the essence(or the topic I chose?). 

<br/>
<br/>

## Interesting Findings 01 - Birthday Pseudocode
So on the 4th(Sun), it was my birthday and I got a message from CommonWealth Bank. <br/>
At the moment, I only got one birthday message from one of my friends and that Bank message was the second one that I got.<br/>
I suddenly felt so strange and was seized by a weird feeling of having my birthday celebrated by a robot that was staying within the confines of the rules set for it.<br/>
And also because there are only two options that I can click - 'Thanks' & 'Dismiss', this non-genuine feeling message made me think about the meaning of the birthday. <br/>
They were providing a small service to their customers which I fully understand, but I just felt weird that I get two different paths(buttons) and I knew that both of them will lead me to the same path(outcome=previous page) anyway. It almost feels like I have choices but no choices that I could make. <br/>
<img src="https://hunoong.github.io/slave2-A/Images02/birthday_pseudocode.jpg" width="400" /> <img src="https://hunoong.github.io/slave2-A/Images02/birthday_pseudocode2.png" width="400" /> <br/>
So I posted it on my Instagram story saying, 'Slave to the algorithm, IF = bday, send a bday msg', and one of my friends replied back to me like this(the right picture).<br/>
It was funny in a way that we were making a small related pseudocode to communicate and that changed the weird feeling I had into more 'human' feeling.<br/>
<br/>
<br/>

## Interesting Findings 02 - Worm's Algorithmic movements
While working on my stuff, I found a tiny movement in the middle of my 23.8 inch monitor. <br/>
So I looked it carefully and it was a tiny worm that tries to find its way!<br/>
I have no idea why it decided to across this wide screen and I was so fascinated by its small decisions.<br/>
I decided to film it with my micro lens(Sorry for the dirts on my screen, but you can't really see the dirts with your eyes as they are tiny).<br/>
<img src="https://hunoong.github.io/slave2-A/gifs/worm01.gif" width="400" /><br/>
<img src="https://hunoong.github.io/slave2-A/gifs/worm03_gif.gif" width="400" /><br/>
And then I tried to visualise its 'Algorithminc instinct movement'. Blue stroke is its path and red dots are its decision making spots. <br/>
<img src="https://hunoong.github.io/slave2-A/Images02/worm02_path_decision.png" width="400" /><br/>
I was just surprised that I found it on my screen and that it was similar to what I am currently working on for my project. <br/>
<br/>

###### [< MAIN PAGE](https://hunoong.github.io/slave2-A/)
###### [NEXT WEEK >](https://hunoong.github.io/slave2-A/week11/)
