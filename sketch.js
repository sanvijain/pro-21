//var musicImage,music;
var blueRect;
var canvas

//function preload(){
  //  music=loadSound("music.mp3");
//}

function setuo(){
   canvas = createCanvas(1200,800);

    blueRect=createSprite(1000,400,50,50);
    blueRect.shapeColor("blue");
    blueRect.debug=true;
}

function draw(){
    background("grey");

    drawSprites();
}