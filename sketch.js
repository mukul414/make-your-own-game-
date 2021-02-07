
var pacMan;
var ghost1,ghost2,ghost3,ghost4;
function preload(){
  

}

function setup(){
  createCanvas(600,200)
  pacMan=createSprite(200,200);
  ghost1=createSprite(200,240);
  ghost2=createSprite(200,260);
  ghost3=createSprite(200,280);
  ghost4=createSprite(200,300);
  
}

function draw(){
  background("white")

  drawSprites();

}