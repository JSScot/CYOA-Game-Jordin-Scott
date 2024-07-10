//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let endFont="Honk"

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textFont("Langar")
  textSize(20);
  noStroke();

  // Set up the home screen
  background("maroon");
  fill("white")
  text(
    "You are an alien that's deathly allergic to water\n that has snuck onto Earth for research.\n One rule: Avoid water at all cost.",
    width / 2, height / 2 - 100);

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
  enterButton.text="Ok"
  
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
  text("You want to go out to learn what humans do for fun.\n You go to",width/2,height/2-100)
  enterButton.pos={x:-100,y:-200}

    // Add A1 button
  a1Button.pos={x:width/2-100,y:height/2+100}
  a1Button.w = 200;
  a1Button.h=50;
  a1Button.collider="k"
  a1Button.color="white"
  a1Button.text=" the Amusement Park"

  // Add A2 button
  a2Button.pos={x:width/2+100,y:height/2+100}
  a2Button.w = 100;
  a2Button.h=50;
  a2Button.collider="k"
  a2Button.color="white"
  a2Button.text="Stay home"

}

function showScreen2(){
  background("palegreen")
  fill("darkgreen")
  text("You get to the amusement park, awed by the amazing attractions.\n But this feeling quickly shifts to fear when\n a group of kids run towards you will water guns.\n You decide to",width/2,height/2-100)
  a1Button.pos={x:-100,y:-100}
  a2Button.pos={x:-100,y:-100}

  //Add B1
  b1Button.pos={x:width/2-100,y:height/2+100}
  b1Button.w = 200;
  b1Button.h=50;
  b1Button.collider="k"
  b1Button.color="#3a8c5b"
  b1Button.text="Vaporize water guns"

  //Add B2
  b2Button.pos={x:width/2+100,y:height/2+100}
  b2Button.w = 170;
  b2Button.h=50;
  b2Button.collider="k"
  b2Button.color="#3a8c5b"
  b2Button.text="Run towards\n roller coaster"
}

function showScreen3(){
    background('#ebe2b7')
    textFont(endFont)
    textSize(35)
    text("Oh No!",width/2,height/2-100)
    textFont("Langar")
    textSize(20)
    fill("darkorange")
    text("You use your laser eyes to vaporize the water guns.\n The kids around you screamed in terror as the ran from you.\n One of the angry kids throws water on you, \n causing your skin to melt. You disintegrated.",width/2,height/2-50)
  b1Button.pos={x:-100,y:-100}
  b2Button.pos={x:-100,y:-100}
  }

function showScreen4(){
  background('#ebb494')
  textFont(endFont)
  textSize(35)
  text("Having Some Fun",width/2,height/2-100)
  textFont("Langar")
  textSize(20)
  fill("maroon")
  text("You run towards the roller coaster, skipping the line behind you.\n Although the humans start to get angry at your rudeness,\nyou got on the roller coaster and had the time of your life.\nYou write down in your notes how amazing this place was\n as you wander around to more rides.",width/2,height/2-50)
  b1Button.pos={x:-100,y:-100}
  b2Button.pos={x:-100,y:-100}
}

function showScreen5(){
  background("plum")
  textFont(endFont)
  textSize(35)
  text("Better safe than sorry. ",width/2,height/2-100)
  textFont("Langar")
  textSize(20)
  fill("purple")
  text("You spend the rest of the day peeking out your window,\n staring at humans and writing down notes as\n they pass by. Maybe tomorrow will be a more productive day",width/2,height/2-50)
  a1Button.pos={x:-100,y:-100}
  a2Button.pos={x:-100,y:-100}
}

