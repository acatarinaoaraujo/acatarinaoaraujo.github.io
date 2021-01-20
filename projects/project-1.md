---
layout: project
type: project
image: images/Mario Bros.jpg
title: Mario Jumpman 
permalink: projects/mariojumpman
# All dates must be YYYY-MM-DD format!
date: 2019-05-01
labels:
  - Java
  - EZ
  - Super Mario Bros
summary: My team developed a simple game for ICS 111 based on the coolest video game character in world, Mario.
---

<div class="ui small rounded images">
  <img class="ui image" src="../images/MarioBros3.png">
  <img class="ui image" src="../images/MarioBros2.png">
</div>



		Why Mario? 
	I remember playing Mario for the first time when I was about 7 years old. Mario was the first game I have ever played. 
My brother, who is older than me, introduced me to Nintendo 64 Console at the year of 2004. We were behind in time 
compared to our American counterparts. At the decade of 1990-2000, the inflation in Brazil was exorbitant, and technological
devices coming from other countries received huge taxes on top of it. The minimum wage at that time was 180,00 reais (equivalent
to 33,64 dollars) and only one video game cartridge costed a little over it. So, instead of buying a new cartridge, we exchanged
them with friends.

		Team Work: 
	When Professor Jason Leigh talked about the final project for ICS 111, I immediately thought about making a game based on Mario.
However, I did not have a group yet, I needed to invite two classmates to participate on this project and convince them about Mario.
Fortunately, my team liked my idea, and Professor Leigh gave us full autonomy for this project. My team and I began to think about how
to use the tools we had to make the game work. The more tools we use, the better it is for us in terms of practice and knowledge.  
	We started by gathering the documentation for EZ and seeing all the methods available. Then, we applied the methods that we thought
would be useful for our project. We wanted to keep the game simple, but very similar to the original game. We decided not to divide the 
problems by person, but instead working together on the most important and essential aspects of the games first. After we had the functionality,
it was time to look for interesting graphics for the characters, scenery, fonts, and sound effects. This part is entertaining, but takes some 
time to find the perfect graphics for a game. 
        

Some methods used in the game:

- pullToFront (): Pulls the given element to the front of the layer. We used this method for the bullet in order to make the game more realistic. 
- setMsg(java.lang.String m): Displays a text to the given parameter. This method was used for the introduction and the end of the game.
- wasKeyDown(char c): Checks if a key was pressed by the user at some point. Used to start the game.
- isPointInElement(int x, int y): Checks if the x and y coordinates are within of an element. This method was the most important method besides EZ.initialize(). 
To make this game function properly we had to check if the main character, Mario, had close contact with the obstacles (bullets). 
- moveForward(double distance): Moves the element ahead by the given number (distance). Used to move the seamless background.
- loop(): plays a song from the start of the game to the end by repeating the song multiple times during the game.
	
	
	First-year ICS 111 students at the University of Hawaii at Manoa has been using EZ Graphics (a Java graphics library) since 2014. EZ aids students with no prior programming experience to successfully manipulate graphics. EZ was created by Dylan Kobayashi. To read more about the documentation visit the url: [EZ Documentation](http://www2.hawaii.edu/~dylank/ics111/doc/).







