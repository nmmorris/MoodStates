/***********************************************************************************
	Mood States
	by Natalie Morris

  State machine indexes through an array of five png files using the number
  keys to demonstrate different moods.

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions

***********************************************************************************/

// Array of images
var images = [];

// Array of strings
var strings = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// variable stores font
var neuehaasgrotesk;

// load all images into an array and loads font
function preload() {
  images[0] = loadImage('assets/insane.png');
  images[1] = loadImage('assets/calm.png');
  images[2] = loadImage('assets/energized.png');
  images[3] = loadImage('assets/anxiety.png');
  images[4] = loadImage('assets/sleep.png');
  images[5] = loadImage('assets/splash.png');
  neuehaasgrotesk = loadFont('assets/NeueHaasGroteskTX.ttf');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(20);
  textFont(neuehaasgrotesk);

  // set to one for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(255);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],width/2, height/2);

   fill(0,0,0);
   text("i'm going insane", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2);

   fill(240,120,0);
   text("calm", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2);

   fill(40,230,120);
   text("energized", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2);

   fill(255,255,178);
   text("anxiety", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2);

   fill(230,50,50);
   text("i need sleep", width/2, height - gTextOffset);
}

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
   image(images[5],width/2, height/2);
}

//-- drawInstructions() will write instructions at index
drawInstructions = function() {
  strings[0] = "welcome to natalie's moods!";
  strings[1] = "press keys 1-5 to toggle through moods";
  strings[2] = "press 0 to return to home screen";

  for (let i = 0; i < 4; i++) {
    text(strings[i], width/2, height/2 + i * 30);
    textAlign(CENTER, CENTER);
  }
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawSplash ) {
    return;
  }

  if( key === '1' ) {
    drawFunction = drawOne;
  }
  else if( key === '2' ) {
    drawFunction = drawTwo;
  }
  else if( key === '3' ) {
    drawFunction = drawThree;
  }
  else if( key === '4' ) {
    drawFunction = drawFour;
  }
  else if( key === '5' ) {
    drawFunction = drawFive;
  }

  else if( key === 's' ) {
    drawFunction = drawSplash;
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = drawInstructions;
  }
}