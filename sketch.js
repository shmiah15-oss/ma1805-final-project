let myImage;
let clouds;
let button;
let profile;
let edit;
let warning;

let myStatus = 0;

let theText = ["how to write an essay", "how to cite", "synonyms for illustrate", "how to make a button in html"];
let word = theText[0];
let i = 0;

const NotSecureText ="Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Errorv Not Secure Error Not Secure Error";
const NotSecureText2 ="Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Error Not Secure Errorv Not Secure Error Not Secure Error";
const textArray = NotSecureText.split(" ");
const textArray2 = NotSecureText2.split(" ");



function preload() {
  myImage = loadImage('DREAMS.png');
  clouds = loadImage('moons-clouds.png');
  profile = loadImage('profile.jpg');
  edit = loadImage('edit.jpg');
  warning = loadImage('warning.png');

}

function setup() {
  createCanvas(500, 500);
  background(180, 10, 200);

  button = createButton("search");
  button.position(250, 250);
  button.style('font-family', 'Courier New');
  button.style('background-color', 'black');
  button.style('color', 'white');
  button.mouseClicked(Searching);

  //for the searches
  frameRate(2);
  
}



function draw() {
  background(myImage);

  if(myStatus==0){
    //startScreen();
  }else if(myStatus==1){
    pageOne();
    button.position(370, 170);
  }else if (myStatus==2){
    pageTwo();
    button.position(300, 95);
    button.style('font-family', 'Courier New')
    button.style('background-color', 'white');
    button.style('border', '0px');
    button.style('color', 'red');

  }else if(myStatus==3){
    end();
    button.position(430, 450);
    button.style('font-family', 'Courier New');
    button.style('background-color', 'black');
    button.style('color', 'white');
  }


 //Display which page we are on
 textSize(50);
 text(myStatus, 50, 50);

 
}



//the  search button
function Searching() {
  console.log('Button was clicked');
  myStatus++; //move to the next screen

  if(myStatus>3){
    myStatus = 0;
  }

}


function startsScreen(){
//making it look like a browser
//heading
 textFont('Courier New');
 textSize(50);
 fill(255);
 text('ExPLORE', 220, 140);

//logo
  image(clouds, 40, 60, 200, 140);

//profile
  image(profile, 420, 5, 100, 60);

//email
  textSize(15);
  text('email', 400, 40);

//search bar
  fill(255);
  rect(80, 171, 300, 20);

//edit thingy
image(edit, 420, 430, 100, 60);

}


function pageOne(){
fill(255);
textSize(100);


//heading
textFont('Courier New');
textSize(50);
fill(255);
text('ExPLORE', 220, 140);

//logo
  image(clouds, 40, 60, 200, 140);

//profile
  image(profile, 420, 5, 100, 60);

//email
  textSize(15);
  text('email', 400, 40);

//search bar
  fill(255);
  rect(80, 171, 300, 20);

//edit thingy
image(edit, 420, 430, 100, 60);

//search text
textSize(15);
fill(0);
 text(word, 85, 185);
 
 word = theText[1];
 i=i+1;
 if(i>theText.length){
  i=0;
 }
 console.log(1)

}








function pageTwo(){


  fill(255);
  rect(80, 50, 330, 300);


  fill(0);
  textSize(15);
  textStyle(BOLD);
  text('How to cite', 100, 70);
  textStyle(NORMAL);
  textSize(10);
  text('There are many ways to cite, there is...', 105, 80);

  textSize(15);
  textStyle(BOLD);
  text('How to write an essay', 100, 110);
  textStyle(NORMAL);
  textSize(10);
  text('An essay is a piece of non-fiction writing...', 105, 120);

  textSize(15);
  textStyle(BOLD);
  text('Best ways to study', 100, 150);
  textStyle(NORMAL);
  textSize(10);
  text('10 effective study methods that work are...', 105, 160);

  textSize(15);
  textStyle(BOLD);
  text('10 ways to improve writing', 100, 190);
  textStyle(NORMAL);
  textSize(10);
  text('One way to improve your writing is to..', 105, 200);

  textSize(15);
  textStyle(BOLD);
  text('Github support', 100, 230);
  textStyle(NORMAL);
  textSize(10);
  text('If there is any issues with your...', 105, 240);

  textSize(15);
  textStyle(BOLD);
  text('Making a new page on html', 100, 270);
  textStyle(NORMAL);
  textSize(10);
  text('To make a new page on html, on your vs code..', 105, 280);

  textSize(15);
  textStyle(BOLD);
  text('How to create a gif ', 100, 310);
  textStyle(NORMAL);
  textSize(10);
  text('Here are online gif makers that are easy to use...', 105, 320);





}

function end(){

  let x = random(width);
  let y = random(height);

  warning.resize(100, 100); 
  image(warning, 10, 10, 500, 500);
  image(warning, x, y,)
  fill(255, 0, 0);
  text('NOT SECURE', 250, 100);
  




  if (i < textArray.length) {
    fill(255, 0, 0);
    stroke(100);
    console.log(i);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y);
    i++;
  
  }

  if (i < textArray2.length) {
    fill(255, 0, 0);
    stroke(100);
    console.log(i);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(textArray2[i], x+100, y+150);
    i++;
  
  }



  
}

