let myImage;
let clouds;
let button;
let profile;
let edit;

let myStatus = 0;

let theText = ["how to write an essay", "how to cite", "synonyms for illustrate", "how to make a button in html"];
let word = theText[0];
let i = 0;




function preload() {
  myImage = loadImage('DREAMS.png');
  clouds = loadImage('moons-clouds.png');
  profile = loadImage('profile.jpg');
  edit = loadImage('edit.jpg');
}

function setup() {
  createCanvas(500, 500);
  background(180, 10, 200);

  let button = createButton("search");
  button.position(370, 170);
  button.style('font-family', 'Courier New');
  button.style('background-color', 'black');
  button.style('color', 'white');
  button.mouseClicked(Searching);



  //for the searches
  frameRate(1);

 
  
}



function draw() {
  background(myImage);

  if(myStatus==0){
    //startScreen();
  }else if(myStatus==1){
    pageOne();
  }else if (myStatus==2){
    pageTwo();
  }else if(myStatus==3){
    end();
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
  rect(80, 50, 330, 220);

  fill(255);
  textSize(20);
  text('not sure what im doing', 100, 200);



}

function end(){
  fill(255);
  textSize(100);
  text('oh no! this page is not secure', 200, 30);
}

