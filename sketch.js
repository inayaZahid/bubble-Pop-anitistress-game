
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var  bubbles=[];
var back,backImg;
var point;
var dangerImg; 
var enemy=[];
var score=0;
var bubbleImg;
var dangerImg;
function preload(){
  backImg=loadImage("rainbow background.jpg")
bubbleImg=loadImage("bubbleImg.png")
dangerImg=loadImage("dangerImg.png")
}
function setup() {
 createCanvas(displayWidth,displayHeight)
 engine = Engine.create();
  world = engine.world;
  back = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  back.addImage(backImg)
  back.scale=5
point=createSprite(displayWidth/2,displayWidth,20,20);
bubblesGroup= new Group();
enemyGroup= new Group();
}

function draw() {
  background("pink");
  fill("black");
  textSize(24);
  text("Bubble Pop Antistress game",displayWidth/2,20);
  text("this is balloon pop game ",50,50);
  text("in the next part of this game player can pop the bubbles",50,125);

 point.x=mouseX;
 point.y=mouseY;
 
 if(bubblesGroup.isTouching(point)){
   bubblesGroup[0].destroy();
   score=score+1;
}
if(enemyGroup.isTouching(point)){
  score=score-2;
  enemyGroup[0].destroy();
}
if(score>=10){
  bubbles.velocityY=10
  
}
if(score>=25){
  bubbles.velocityY=15;
}
point.depth=-1

 createBubble();
 createEnemy();
  drawSprites();
  
  textSize(24);
  fill("black");
  stroke(0)
  text("Bubble Pop Antistress game",displayWidth/2-100,20);
  //text("This is balloon pop game ",20,50);
  //text("In the next part of this game player can pop the bubbles",20,100);

  text("Score: "+score,displayWidth-125,100)
  Engine.update(engine);
  if(score>25){
    score10txt();
   }
}
function createBubble(){
  if(frameCount%60===0){
    bubbles=createSprite(Math.round(random(displayWidth)),Math.round(random(displayHeight)),20,20);
    bubbles.addImage(bubbleImg);
    bubbles.scale=0.2;
    bubbles.velocityY=5
    bubblesGroup.add(bubbles)
  }

  

}
function createEnemy(){
  if(frameCount%200===0){
    enemy=createSprite(Math.round(random(displayWidth)),Math.round(random(displayHeight)),20,20)
    enemy.addImage(dangerImg)
    enemy.scale=0.5;
    enemy.velocityY=7;
    enemyGroup.add(enemy)
  }
}
function score10txt(){
  textSize(40);
  fill("violet")
  stroke(5);
  text("great job",displayWidth/2,displayHeight/2);

}