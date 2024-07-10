//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;


/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textFont("Rubik Iso")
  textSize(20);
  noStroke();

  // Set up the home screen
  background("maroon");
  fill("white")
  text(
    "Welcome to screen 0. This is the home screen.",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens
  enterButton= new Sprite(width/2,height/2+100);
  a1Button= new Sprite(-200,-200);
  a2Button= new Sprite(-50,-50);
  b1Button = new Sprite(-100,-100)
  b2Button = new Sprite(-150,-150)
  

}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter 
  enterButton.w = 100;
  enterButton.h=50;
  enterButton.collider="k"
  enterButton.color="red"
  enterButton.text="Enter"
  
  // Check enter button
  if(enterButton.mouse.presses())
  {
    print("pressed");
    showScreen1();
    screen=1;
  }
  //check A1 button
  if(screen==1)
  {
    if(a1Button.mouse.presses()){
      print("Display screen 2");
      showScreen2()
      screen=2;
    }
    else if (a2Button.mouse.presses()){
      print("Display screen 5");
      showScreen5()
      screen = 5;
    }
  }
  else if(screen==2)
  {
    if(b1Button.mouse.presses())
    {
      showScreen3();
      screen=3;
    }
    else if(b2Button.mouse.presses())
    {
      showScreen4();
      screen=4;
    }
  }
}

/* FUNCTIONS TO DISPLAY SCREENS */

function showScreen1(){
  background("skyblue")
  fill("blue")
  text("Welcome to screen 1. Make your first choice.",width/2,height/2-100)
  enterButton.pos={x:-100,y:-200}

    // Add A1 button
  a1Button.pos={x:width/2-100,y:height/2+100}
  a1Button.w = 50;
  a1Button.h=50;
  a1Button.collider="k"
  a1Button.color="white"
  a1Button.text="A1"

  // Add A2 button
  a2Button.pos={x:width/2+100,y:height/2+100}
  a2Button.w = 50;
  a2Button.h=50;
  a2Button.collider="k"
  a2Button.color="white"
  a2Button.text="A2"

}

function showScreen2(){
  background("palegreen")
  text("Welcome to screen 2. Make your second choice.",width/2,height/2-100)
  a1Button.pos={x:-100,y:-100}
  a2Button.pos={x:-100,y:-100}

  //Add B1
  b1Button.pos={x:width/2-100,y:height/2+100}
  b1Button.w = 50;
  b1Button.h=50;
  b1Button.collider="k"
  b1Button.color="#3a8c5b"
  b1Button.text="B1"

  //Add B2
  b2Button.pos={x:width/2+100,y:height/2+100}
  b2Button.w = 50;
  b2Button.h=50;
  b2Button.collider="k"
  b2Button.color="#3a8c5b"
  b2Button.text="B2"
}

function showScreen3(){
    background('#ebe2b7')
    text("You hit an end point at Screen 3",width/2,height/2-100)
  b1Button.pos={x:-100,y:-100}
  b2Button.pos={x:-100,y:-100}
  }

function showScreen4(){
  background('#ebb494')
    text("You hit an end point at Screen 4",width/2,height/2-100)
  b1Button.pos={x:-100,y:-100}
  b2Button.pos={x:-100,y:-100}
}

function showScreen5(){
  background("plum")
  text("You hit an end point at Screen 5",width/2,height/2-100)
  a1Button.pos={x:-100,y:-100}
  a2Button.pos={x:-100,y:-100}
}

