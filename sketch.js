//images
let myImage;
let clouds;
let button;
let profile;
let edit;
let warning;

let myStatus = 0;

//for page one
//I used the same code we learnt for the multiples prompt, it wasn't working at first because I didn't need - let word = theText[0] or let i = 0;
let theText = ["how to write an essay", "how to cite", "synonyms for illustrate", "how to make a button in html"];

//for end page
let searchPage = 0;
let errorPage = 0;
let errorPage2 = 0;

//for page two
let itembox = [];
let maxItems = 3;
let itemImg;
let boxesFilled = 0;

//found the code for this on Github repository, 03-variables - uk-gov
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
  itemImg = loadImage('books.png');

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

  warning.resize(100, 100); 
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
    button.position(300, 380);
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

 }



 function pageOne(){
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

 //edit icon
 image(edit, 420, 430, 100, 60);

 //search text
 fill(0);
 textSize(15);
 text(theText[searchPage], 85, 185);
 searchPage++;
 if(searchPage >= theText.length){
  searchPage=0;
 }

 }


  //https://p5js.org/reference/p5/mouseClicked/, looked on notion for how to code and,
  //I figured that I had to make the mouse press area specific so I could place it where I want it to go
  //was not working in function page two so I made it into it's own function

 function mousePressed() {
  if (myStatus == 2) {
    if (mouseX > 100 && mouseX < 300 && mouseY > 55 && mouseY < 85) ImgInItemBox();
    if (mouseX > 100 && mouseX < 300 && mouseY > 95 && mouseY < 125) ImgInItemBox();
    if (mouseX > 100 && mouseX < 300 && mouseY > 135 && mouseY < 165) ImgInItemBox();
    if (mouseX > 100 && mouseX < 300 && mouseY > 175 && mouseY < 200) ImgInItemBox();
    if (mouseX > 100 && mouseX < 300 && mouseY > 215 && mouseY < 245) ImgInItemBox();
    if (mouseX > 100 && mouseX < 300 && mouseY > 255 && mouseY < 285) ImgInItemBox();
    if (mouseX > 100 && mouseX < 300 && mouseY > 295 && mouseY < 325) ImgInItemBox();
    }
  }


function pageTwo() {
  
  if (boxesFilled < maxItems) {
    button.hide();
  } else {
    button.show();
  }


  fill(255);
  rect(80, 50, 330, 300);

 //this is the searches
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
 

  //looked at notion to help me make the item box 
  for (let i = 0; i < 3; i++) {
    fill(255);
    rect(80 + i * 60, 400, 50, 50);

    if (itembox[i]) {
      image(itembox[i], 80 + i * 60, 400, 50, 50);
    }
  }

  textSize(20);
  textStyle(BOLD);
  fill(255);
  text('Study progress...', 80, 390);


  }




function end(){

  let x = random(width);
  let y = random(height);

  
  image(warning, 10, 10, 500, 500);
  image(warning, x, y, 100, 100)
  fill(255, 0, 0);
  text('NOT SECURE', 250, 100);
  

  if (errorPage < textArray.length) {
    fill(255, 0, 0);
    stroke(100);
    console.log(errorPage);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(textArray[errorPage], x, y);
    errorPage++;
  
  }

  if (errorPage2 < textArray2.length) {
    fill(255, 0, 0);
    stroke(100);
    console.log(errorPage);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(textArray2[errorPage2], x+100, y+150);
    errorPage2++;
  
  }

  
}



//if the boxes filled by the image reaches the max amount (which is 3), the button will be available
function ImgInItemBox() {
  if (boxesFilled < maxItems) {
    itembox.push(itemImg);
    boxesFilled++;

    if (boxesFilled === maxItems) {
      button.show();
      button.style('background-color', 'red');
      button.style('color', 'white');
    }
  }
}

