var homepage, homepageImg;
var storyImg, story;
var gameState=0;
var desertM, desertMImg;
var desertN, desertNImg;


function preload(){

homepageImg = loadImage("images/homepage.jpg");
storyImg = loadImage("images/storyplaceholder.png");
desertMImg = loadImage("images/Morning Landscape.jpg");
desertNImg = loadImage("images/Night day1,2.jpg");

}

function setup() {
  createCanvas(displayWidth-20,displayHeight-100);

  form1 = new Form();

  
}

function draw() {
  background(homepageImg);
  form1.display();  
text (mouseX + ","+ mouseY, mouseX, mouseY);

if(gameState === 1){
  story = createSprite(displayWidth/2-30, displayHeight/2-100);
  story.addImage(storyImg);
}

if(gameState===2){
  background(desertMImg);
  story.clear();

}
    drawSprites();
}