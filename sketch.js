var cat , mouse
var catImg1 , catImg2 , catImg3 ,catImg4
var mouseImg1 , mouseImg2 , mouseImg3 
var  garden
function preload() {
    //load the images here
    garden = loadImage("images/garden.png");
catImg1 = loadAnimation("images/cat1.png");
catImg2 =loadAnimation("images/cat2.png","images/cat3.png");
catImg3 = loadAnimation("images/cat4.png");
catImg4 = loadImage("images/cat4.png")

mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,700,10,10);
cat.addAnimation("cat walking",catImg1);
cat.velocityX = -3;
cat.scale = 0.1;

mouse = createSprite(300,700,10,10);
mouse.addAnimation("mouse teasing",mouseImg1);
mouse.scale=0.1;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
if (cat.isTouching(mouse)){
cat.velocityX=0;
cat.addImage(catImg4)
}
    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }
}