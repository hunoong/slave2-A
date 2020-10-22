# Week 11 [09.10.20] 
###### [[>click here to check week11 WIP sketch folder<]](https://github.com/hunoong/slave2-A/tree/master/week11_WIP_Sketch)

## Current Stage - Birds feeding
During the week, I wanted to test out some birds feeding experiments. <br/>
<br/>
When I was struggling to improve the quality of detection camera the other day as the detector couldn't track the birds well in a far distance, a dove came to my balcony and I saw it resting on the fence.
<img src="https://hunoong.github.io/slave2-A/Images02/birds_feeding03%20pigeon.jpg" width="800" /> <br/>
And I thought it would be nice if I can watch some birds coming right in front of my desk, so that I could test out the 'ML5 Detector' whether it can detect them well or not.<br/>
I knew that it takes time to get their attentions, so once you put some seeds, you need to wait for them to find these treats. <br/>
<img src="https://hunoong.github.io/slave2-A/Images02/birds_feeding02.png" width="300" /> <img src="https://hunoong.github.io/slave2-A/Images02/birds_feeding01.png" width="500" /> <br/>
<img src="https://hunoong.github.io/slave2-A/Images_week11/week11_03.gif" width="300" />
<img src="https://hunoong.github.io/slave2-A/Images_week11/week11_00.png" width="300" />  <img src="https://hunoong.github.io/slave2-A/Images_week11/week11_02.jpg" width="300" />
<br/>
And because they are super sensitive, I had to be careful not to surprise them.<br/>
After few days, sparrows are the first ones found the seeds on my balcony table. I made them frightened several times before, so I don't think I can track them any time soon, now I just need them to be feel safe so that I can track them later. And then once my balcony got popular, more birds were visiting.<br/>
<br/>
While working on this, I also made another *'Back up plan'* which is *'Birds videos for Cats' on Youtube*. I made my Mac and iPad face each other and tried to detect birds in the video on my iPad screen. And it worked.<br/>
<br/>
<br/>

## Current Stage - Coding
During the week I had some questions in related to 'Showing detection results' & 'Making detection area appear on the second canvas'.<br/>
><img src="https://hunoong.github.io/slave2-A/Images_week11/week11_04.png" width="800" />
><img src="https://hunoong.github.io/slave2-A/Images_week11/week11_05.png" width="800" />
><img src="https://hunoong.github.io/slave2-A/Images_week11/week11_06.png" width="800" />
><img src="https://hunoong.github.io/slave2-A/Images_week11/week11_07.png" width="800" /><br/>
After getting feedback from Karen, I was able to make results showing on the screen as well as detection on the second canvas.<br/>
>What I had to insert was :
> console.log(results); <br/>
> for (var r=0; r<results.length; r++){ <br/>
    text(results[0].label, 250, 100+20*r); //(x,y,spacing,r=numbers of label) <br/>

Something like this.<br/>
And for the second canvas issue, I was able to fix it by adding 'extraCanvas(my set variable)' infront of every elements that need to be on the second canvas.<br/>
>extraCanvas.stroke(random(250),random(100,240));
    extraCanvas.noFill();
    extraCanvas.ellipse(detection.x+detection.width/2,detection.y+detection.height/2,3,3); <br/>
    
Something like this.<br/>
<br/>
<br/>
>> **The process of resolving** <br/>
<img src="https://hunoong.github.io/slave2-A/Images_week11/week11_08.png" width="300" /><img src="https://hunoong.github.io/slave2-A/Images_week11/week11_09.png" width="300" /> <img src="https://hunoong.github.io/slave2-A/Images_week11/week11_10.png" width="300" /><br/>
<img src="https://hunoong.github.io/slave2-A/Images_week11/week11_11.gif" width="800" /> <br/>

>> **The process of Development** <br/>
<img src="https://hunoong.github.io/slave2-A/Images_week11/week11_12.png" width="400" /><img src="https://hunoong.github.io/slave2-A/Images_week11/week11_13.png" width="400" />
>> <img src="https://hunoong.github.io/slave2-A/Images_week11/week11_15.png" width="800" />




## Interesting Foundings 01
During my painting elective class, 

<img src="https://hunoong.github.io/slave2-A/Images02/so%20le%20witt.png" width="785" /> <br/>
// *[So Le Witt - Google search](https://www.google.com/search?q=so+le+witt&rlz=1C5CHFA_enAU894AU894&sxsrf=ALeKk01gIi0uPnunNUWnQy9fq2LIqGt1lw:1601858450856&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjR_8Xfm5zsAhVKeX0KHTsFCskQ_AUoAXoECBYQAw&biw=2048&bih=1018)*

## Interesting Foundings 02
On the 6th, my sister gave a birth to her child, Layla and I became an uncle! <br/>
Next day, she wanted me to search about day counting apps or ways to show the day counts on iPhone. <br/>
So I looked it up, and I found that you can customise your day counts with the Apple app 'Shorcuts'.<br/>
This seemed like an easy version of coding and it reminded me of Pseudocode that we did.<br/>
<img src="https://hunoong.github.io/slave2-A/Images02/shortcuts_apple01.PNG" width="200" /><img src="https://hunoong.github.io/slave2-A/Images02/shortcuts_apple02.PNG" width="200" /><img src="https://hunoong.github.io/slave2-A/Images02/shortcuts_apple03.PNG" width="200" /><img src="https://hunoong.github.io/slave2-A/Images02/shortcuts_apple04.PNG" width="200" />
<br/>

###### [< MAIN PAGE](https://hunoong.github.io/slave2-A/)
###### [NEXT WEEK >](https://hunoong.github.io/slave2-A/week12/)
