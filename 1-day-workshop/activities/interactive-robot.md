# Interactive robot
_Activity 3_

## Goals
This assignment will help you practice using if-statements, to allow your program to perform different operations without interference. We are giving you the code for the robot (you can customize it!) and you will add interactions. The base interactions you should add are moving eye(s) and jumping, but feel free to add in more interactions.

## Robot code
```javascript
function robot() {
  strokeWeight(2);
  ellipseMode(RADIUS);

  // Neck
  stroke(200);         
  line(266, 257, 266, 162);
  line(276, 257, 276, 162); 
  line(286, 257, 286, 162);

  // Antennae
  stroke(100);    
  line(276, 155, 246, 112); 
  line(276, 155, 306, 56);  
  line(276, 155, 342, 170);
  
  // Body
  noStroke();            
  fill(160);   
  ellipse(264, 377, 33, 33);
  fill(0);     
  rect(219, 257, 90, 120); 
  fill(120);     
  rect(219, 274, 90, 6);   
  
  // Head
  fill(220);      
  ellipse(276, 155, 45, 45);
  fill(255);            
  ellipse(288, 150, 14, 14);
  fill(0);              
  ellipse(288, 150, 3, 3);  
  fill(255);            
  ellipse(263, 148, 5, 5);  
  ellipse(296, 130, 4, 4);  
  ellipse(305, 162, 3, 3);  
}
```

## Adding the interactions
1. Setup the if statements to control whether your program will display a robot with moving eyes, or a jumping monster. First start by creating a variable named `page` at the top of your code, you should set its starting value to 0. Then add the code below to draw.

	```javascript
	// call your robot function
	if (page == 0) {
		// add code here as you complete step 4
	} else {
		// add code here as you complete step 5
	}
	```

	Notice, that your `draw` function should have a total of 1 call to your robot function.

1. Add a `mousePressed` function that will switch between your two pages. If your robot is jumping and you user clicks then it should switch to the moving eye robot, if they click again it should switch back to the jumping robot .. and so on.

	To do this you will add `page = 1 - page;` into your `mousePressed` function.

	Run your code, you won't see any changes yet because you haven't written code to tell your monster to jump or move its eye but you should still see your monster and have no errors before moving on to the next step.

1. Write code to move your eyes. First add a variable at the top named `eyeDirection` and set its value to `0`.

	Then find where your eye function is called from and add `eyeDirection` to your x value being passed into that eye function.

	Before proceeding, temporarily initialize `eyeDirection` to `10` and to `-10`, and notice that the eye should look right and then left; then set it back to `0`. If its not moving then you have a bug, try and fix it and if you are stuck reach out for help.

	Add code to draw as indicated in step 2. This code should consist of conditional statements to determine if the eye should move left or right based on the mouse's x-position (hint: you will use the p5.js built in variable named `mouseX`). Notice that you will probably want to increment your eyeDirection variable by 0.5 instead of 1 so it moves slowly.

	You may also consider using min/max to prevent your monster's eye from leaving its face.

	Test your code. The eye should move when the mouse is on each side. You can decide whether the eyes should still move when the mouse is between them.

	If its working correctly, when you click it should stop you from moving the eyes, if you click again it should let you move the eyes again.

1. Write code so that your monster jumps up and down. To start define two variables at the top: `jumpValue`, and `jumpDir`, you decide on the values for your monster.

	In draw, add an if statement to determine which way the monster should be jumping. When it hits the top it should come back down, and when it hits the bottom it should come back up. `jumpValue` is the value you are adding to the `y` position of your monster and `jumpDir` represents the speed and direction your monster is moving.

	If its working you should now be able to click to switch between your moving eyes and jumping monster.

## Extra Challenge
* Add code to make it look like the monster is bending its knees as it jumps (hint: you can achieve this effect my varying the length of the monster's leg(s))
* We are changing monsters by clicking, as an improvement add some buttons that allows the user to switch by clicking a button instead of just any mouse click
* Add some more interactive elements by adding more buttons and more monster versions
* Add more custom details to your monster
* Add an interesting moving background
