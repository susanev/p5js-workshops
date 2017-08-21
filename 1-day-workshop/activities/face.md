# Draw a face
_Activity 2_

## Goal
Draw a face using as many shape functions as you can. Each section of the face should be in its own function that you create (e.g., eyes, mouth, ears, etc). This can be the face of an adult human, a baby, an animal, a monster, a robot, or really anything you can imagine. We encourage you to sketch out your face on paper first, before starting to program. _Hint: Keep your face simple, so you have enough time for the later activities._

## Warm up
Before we start writing code we are going to take some time to sketch a few ideas out on paper. These will be fast sketches, and we will focus on using basic shapes (circles, rectangles, triangles, lines, etc.).

__Prompts__
Sketch what you imagine your facial expression to be when ...
* You first wake up in the morning
* When someone tells a really funny joke
* While you are concentrating really intensely on something

## Program
Now, choose one of the faces you drew, or draw a new one and build it with code. Afterwards, we will explore how to add animations to your face.

### Functions to consider using
* `canvasSize`
* `ellipse`
* `rect`
* `line`
* `arc`
* `quad`
* `triangle`
* `bezier`
* `beginShape`
* `vertex`
* `endShape`
* `fill`
* `stroke`

### Programming constructs to consider using
* functions

## Tips
* Add `text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);` to `draw` to display the coordinates of the mouse location

## Discussion questions
* How does the coordinate system work on the canvas?
* Where is the origin?
* With a canvas that is passed 720,400, where about is the point 700,400?
* Ellipses and rects seem to draw from different points, why do you think this is? How are ellipses and rects different?

## Extra Challenges
* The face you created is probably static, add code that allows the face to follow your mouse as you move it around the screen.
* When the user clicks, change the face to a random color
* Add code so that the eyes on the face follow the mouse

## Inspiration
_Faces created by artist Bruno Munari_
![alt text][bruno-munari-faces]

[bruno-munari-faces]: https://github.com/susanev/p5js-workshops/blob/master/1-day-workshop/images/bruno-munari-faces.jpg "A variety of faces by Bruno Munari"

## Sample Projects
* [Basic face](./face-sample-projects/basic-face)
* [Face without parameters](./face-sample-projects/face-no-parameters)
* [Face with parameters](./face-sample-projects/face-with-parameters)
