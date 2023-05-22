---
layout: project
type: project
image: img/projects/web/mariobros1.jpg
title: Mario Jumpman (My First App)
permalink: projects/mariojumpman
# All dates must be YYYY-MM-DD format!
date: 2019-03-01
published: true
labels:
  - Java
  - EZ (Java Graphics Library by created UH student)
summary: A simple game was developed for ICS 111 using Java and EZ Graphics, drawing inspiration from the renowned video game character, Mario, widely considered one of the coolest in the world.
---

```Language(s)```: Java

```Tools```: EZ

### Why Mario?

Playing Mario for the first time when I was around 7 years old is a vivid memory. It was the initial game I ever experienced. And when Professor Professor [Jason Leigh](https://www.mindmeister.com/map/2671123807?t=8kkUtoEmru) introduced the final project for ICS 111, my immediate idea was to create a Mario-inspired game.

### Process

To begin, the EZ documentation was collected, allowing for a thorough examination of the array of methods available. Subsequently, the chosen methods were utilized, such as utilizing the ```wasKeyDown(char c)``` function to determine key presses. The aim was to create a simplistic yet faithful representation of the original game, incorporating its graphics and core functionalities. After establishing the functionality, attention shifted towards the visual aspects of the game, involving the search for suitable images for characters, scenery, and font themes.

Overall, familiarizing myself with the EZ documentation and Java programming language proved to be advantageous in terms of skill enhancement.

### The App

1. First image below shows Mario trying to get all the coins.
2. The second image shows mario after he was hit by the bullet. **GAME OVER!**

<div class="text-center p-4">
  <img width="400px" src="../img/projects/web/mariobros2.png" class="img-thumbnail" >
  <img width="400px" src="../img/projects/web/mariobros3.png" class="img-thumbnail" >
</div>


### Some EZ methods used in the game:

- *pullToFront ()*: Pulls the given element to the front of the layer.
We used this method for the bullet. The bullet moves in front of the
wall and scenery in a random speed.

- *setMsg(String m)*: Displays a text to the given parameter.
This method was used for the introduction and the end of the game.

- *wasKeyDown(char c)*: Checks if a key was pressed by the user at some point.
After the introduction a key must be pressed in order to start the game.

- *isPointInElement(int x, int y)*: Checks if the x and y coordinates are within of an element.
This method was the most important method besides EZ.initialize(). To make this game function
properly we had to check if the main character, Mario, had close contact with the obstacles (bullets).

- *moveForward(double distance)*: Moves the element ahead by the given number (distance).
Used to move the seamless background in order to make the game more realistic.

- *loop()*: plays a song from the start of the game to the end by repeating the song multiple times during the game.

### Links
Source code is not available anymore.