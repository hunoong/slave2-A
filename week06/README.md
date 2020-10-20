# Week 06 [28.08.20] 
## Inspiration of the week
'An art by male blow fish'(*[Youtube link](https://www.youtube.com/watch?v=VQr8xDk_UaY&ab_channel=KinderWorld)*)<br/>
To get the attention of female blowfish, male blowfish creates the most wonderful sand art working 24hrs a day for about a week.<br/>
I think this is one of the good examples of natural algorithms. By using his fins, he draws the lines and cleaning the area by using his mouth.
I thought this would the perfect for the case study of the week as a wonderful generative art for love(or maybe just an instinct) was very fascinating. Also, watching their 'programmed' or maybe 'instinctive' movements made me think about 'what is the algorithm?'. <br/>
<img src="https://hunoong.github.io/slave2-A/Images/maleblowfish_art.jpg" width="250" /><img src="https://hunoong.github.io/slave2-A/gifs/maleblowfish02.gif" width="250" /> <br/>
<br/>
<br/>

## Group Discussion
In class, we discussed and put our titles, technology required and mediums into a shared google sheet.<br/>
And then we split up to small groups to discuss further. Our group, Bio feedback, did not discuss much, but it was nice to see what technologies people were considering of using.

## Paper Prototyping
Andy ran a short workshop called paper prototyping. <br/>
We split into small groups and choose one game from *[Retro Games](https://www.retrogames.cc/)*. <br/>

Andy said the ideal of paper prototyping comes form UX/UI design and Coding.<br/>
So the point of this is ***to quickly ideate/generates a concept that will become a digital project***. But we asked to make a quick model by only using papers, pens, sicssors (and tapes) to just thinking about the process of paper prototyping.<br/>

We will focus on the papers first and then we will see how to move from a paper prototype to pseudo-code and it eventually be able to interpret as a code later.

## Group Work
Chae, Yasmin and I became a group. We turned our camera on(unfortunately, Chae's cam didn't work) to see each others' process.<br/>
Our selected game was *'Sonic & Knuckles + Sonic the Hedgehog 3'*. The tumbnail image of the game was a *bonus stage*, and it looked interesting so I suggested it to our group for our modeling.<br/>
<img src="https://hunoong.github.io/slave2-A/Images02/Sonic%20%26%20Knuckles%20%2B%20Sonic%20the%20Hedgehog%203%20(World).png" width="500" /> <br/>
<img src="https://hunoong.github.io/slave2-A/Images02/wip_paper_mockup_in_class.png" width="500" /> <br/>
<br/>
In the bonus stage, I think the character is fixed and the background is moving. So to get all the points, the user basically moves the background not character.
So I focused on making the background that can be moved by me.<br/>
<img src="https://hunoong.github.io/slave2-A/gifs/wip_paper_class-00.gif" width="700" /> <br/>
But later I decided to make the character move as well.<br/>
<img src="https://hunoong.github.io/slave2-A/gifs/wip_paper_class-02.gif" width="700" /> <br/>
<br/>

<img src="https://hunoong.github.io/slave2-A/gifs/group_paper_.gif" width="500" /> <br/>
*Yasmin's prototype*<br/>
<br/>

###### The below image is what I found when I try to preview my gifs that was converted from my recorded video, I came across this scene and felt quite interesting. It basically contains my selected(custom) presets.
<img src="https://hunoong.github.io/slave2-A/Images02/interesting_week06.png" width="700" /> <br/>
<br/>

## Processing Workshop #3 - Putting sounds on p5.js
Today we did another workshop session.<br/>
We learned how to generate background music on processing by using ***<p5.js>***
<br/>
On p5.js, instead of using *'void'*, we need to use *'function'*.<br/>
After setting our variables, we started to add some new codes.<br/>
<br/>

<img src="https://hunoong.github.io/slave2-A/gifs/sound_workshop_my_coffee_asmr.gif" width="800" /> <br/>
I changed ellipse to rectangular shape to match with my selected audio('Iced Coffee ASMR sound').<br/>
<br/>

<img src="https://hunoong.github.io/slave2-A/Images02/sound_test_week06.png" width="600" /> <br/>

The codes we learned were :<br/>
song = ***loadSound('data/file_name_here_.mp3');***<br/>
analyzer = ***new p5.Amplitude();*** // This measures the volune through the p5 sound library.<br/>
***volume=analyzer.getLevel();*** // This extracts the volume of the song.<br/>
***volume=(volume*windowWidth)+60;*** // The values that we used in class.<br/>
***song.loop();***<br/>
***song.stop();***<br/>
***song.play();***<br/>
***if (song.isPlaying()){}***<br/>
***else{}***<br/>
<br/>

###### [< MAIN PAGE](https://hunoong.github.io/slave2-A/)
###### [NEXT WEEK >](https://hunoong.github.io/slave2-A/week06_BREAK/)
