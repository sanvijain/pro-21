var canvas;
var music;
var block1,block2,block3,block4;
var box;
var edges;

function preload(){
   // music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  //  ball = createSprite(random(10,750),300,20,20);
    //ball.shapeColor = "white";
    //ball.velocityX = 3;
    //ball.velocityY = 3;

    block1 = createSprite(100,590,190,20);
    block1.shapeColor = "blue";

    block2 = createSprite(300,590,190,20);
    block2.shapeColor ="yellow";

    block3 = createSprite(500,590,190,20);
    block3.shapeColor = "purple";

    block4 = createSprite(700,590,190,20);
    block4.shapeColor="green";
    
    //create box sprite and give velocity

    box = createSprite(random(20,750),300,20,20);
    box.shapeColor = "white";
    box.velocityX= 3;
    box.velocityY= 3;

}

function draw() {
    background(rgb(169,169,169));
  createEdgeSprites();
      
    box.bounceOff(edges);

if(block1.isTouching(box) && box.bounceOff(block1)){
    box.shapeColor="blue";
    
}

if(block2.isTouching(box) && box.bounceOff(block2)){
    box.shapeColor="yellow";
    
}

if(block3.isTouching(box) && box.bounceOff(block3)){
    box.shapeColor="purple";
    
}

if(block1.isTouching(box) && box.bounceOff(block1)){
    box.shapeColor="green";
    
}
    //add condition to check if box touching surface and make it box

    
    drawSprites();
}
