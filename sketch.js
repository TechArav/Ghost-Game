var towerImage, tower, door, doorImage, climberImage, climber, ghost, ghostImage, invisibleBlock;
var spookySound;
var gameState="play";

function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png");
  spookySound=loadSound("spooky.wav");

  
}


function setup(){
createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY=1;
  doorGroup= new Group();
  climberGroup= new Group();
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale=0.5;
  invisibleGroup= new Group();
  spookySound.loop();
}

function draw(){

  
if(gameState==="play"){
  if(keyDown("space")){
  ghost.velocityY=-5;
}
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
  if(tower.y>400){
tower.y=300;
   
}
   spawnDoor();
  if(climberGroup.isTouching(ghost)){
     ghost.velocityY=0;
  }
   if(invisibleGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
     gameState="end";
  }
  
}
  if(gameState==="end"){
    stroke("red");
    fill("yellow");
    textSize(40);
    text("Game Over",230,250);
    
  }

  
  

  
   ghost.velocityY=ghost.velocityY+0.8;
 
 
  
drawSprites();
}
function spawnDoor(){
  if(frameCount%240===0){
    door=createSprite(200,-50);
    door.addImage(doorImage);
    door.x-Math.round(random(120,400));
    door.velocityY=1;
    console.log(door.x);
    door.lifetime=600;
    doorGroup.add(door);
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    climber=createSprite(200,10);
    climber.addImage(climberImage);
    climber.x=door.x
    climber.velocityY=1;
    climberLifetime=600;
    climberGroup.add(climber);
    
  }}