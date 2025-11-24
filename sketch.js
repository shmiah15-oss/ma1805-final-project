let myImage;
let clouds;
let button;
let profile;
let edit;

let myStatus = 0;




function preload() {
  myImage = loadImage('DREAMS.png');
  clouds = loadImage('moons-clouds.png');
  profile = loadImage('profile.jpg');
  edit = loadImage('edit.jpg');
}

function setup() {
  createCanvas(500, 500);
  background(180, 10, 200);

  //do I put this in the start screen section?
  let button = createButton("Search");
  button.position(370, 170);
  button.style('font-family', 'Courier New');
  button.style('background-color', 'black');
  button.style('color', 'white');
  button.mouseClicked(Searching);

 
  
}



function draw() {
  background(myImage);

  if(myStatus==0){
    startScreen();
  }else if(myStatus==1){
    pageOne();
  }else if (myStatus==2){
    pageTwo();
  }else if(myStatus==3){
    end();
  }




  
}


//the  search button
function Searching() {
console.log('Button was clicked');

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
text('random search things', 100, 200);
}

function pageTwo(){
  fill(255);
  textSize(200);
  text('not sure what im doing', 100, 200);

}

function end(){
  fill(255);
  textSize(100);
  text('oh no! this page is not secure', 200, 30);
}

