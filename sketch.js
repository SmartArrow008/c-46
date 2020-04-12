var num1,num2;
var i;
var balloon144,balloon169;
var balloon144Image,balloon169Image;
var gameState = "start";
var num = 1;
function preload(){
  balloon144Image = loadImage("144.png");
  balloon169Image = loadImage("169.png");
  balloon196Image = loadImage("196.png");
  balloon289Image = loadImage("289.png");
  balloon361Image = loadImage("361.png");
  balloon484Image = loadImage("484.png");
  balloon576Image = loadImage("576.png");
  balloon629Image = loadImage("629.png");
  balloon729Image = loadImage("729.png");
  balloon900Image = loadImage("900.png");
  
}
function setup() {
  createCanvas(500,600);
  //num1 = Math.round(random(1,10));
  //num2 = Math.round(random(1,10));
 
  balloon144 = createSprite(50,20);
  balloon144.addImage("balloon144",balloon144Image);
  balloon144.scale = 0.3;
  balloon144.velocityY = +1;
  balloon169 = createSprite(100,40);
  balloon169.addImage("balloon169",balloon169Image);
  balloon169.scale = 0.3;
  balloon169.velocityY = +1;
  balloon196 = createSprite(150,20);
  balloon196.addImage("balloon196",balloon196Image);
  balloon196.scale = 0.3;
  balloon196.velocityY = +1;
  balloon361 = createSprite(200,40);
  balloon361.addImage("balloon361",balloon361Image);
  balloon361.scale = 0.3;
  balloon361.velocityY = +1;
  balloon484 = createSprite(250,20);
  balloon484.addImage("balloon484",balloon484Image);
  balloon484.scale = 0.3;
  balloon484.velocityY = +1;
  balloon576 = createSprite(300,50);
  balloon576.addImage("balloon576",balloon576Image);
  balloon576.scale = 0.3;
  balloon576.velocityY = +1;
  balloon629 = createSprite(350,50);
  balloon629.addImage("balloon629",balloon629Image);
  balloon629.scale = 0.3;
  balloon629.velocityY = +1;
  balloon729 = createSprite(400,40);
  balloon729.addImage("balloon729",balloon729Image);
  balloon729.scale = 0.3;
  balloon729.velocityY = +1;
  balloon900 = createSprite(450,50);
  balloon900.addImage("balloon900",balloon900Image);
  balloon900.scale = 0.3;
  balloon900.velocityY = +1;
  
  
}

function draw() {
  background(0); 
  fill('white');
  if(gameState==="start"){
    num1 = [12,13,17,19,22,25,27,24,30,14];

    i = Math.round(random(0,9));
    num2 = num1[i]*num1[i];
    gameState = "level"+num;
  }
  text(num1[i] + " x "+num1[i] + "  =  ?",250,500) ;
  
  if(gameState==="level1"){
    if(num1[i]===13&&mousePressedOver(balloon169)){
      num = 2;
      gameState = "start";
    }
    if(num1[i]===12&&mousePressedOver(balloon144)){
      num = 2;
      gameState = "start";
    }
    if(num1[i]===14&&mousePressedOver(balloon196)){
      num = 2;
      gameState = "start";
    }
    if(num1[i]===17&&mousePressedOver(balloon289)){
      num = 2;
      gameState = "start";
    }
    if(num1[i]===19&&mousePressedOver(balloon361)){
      num = 2;
      gameState = "start";
    }
    if(num1[i]===22&&mousePressedOver(balloon484)){
      num = 2;
      gameState = "start";
    }
    if(num1[i]===24&&mousePressedOver(balloon576)){
      num = 2;
      gameState = "start";
    }
    if(num1[i]===25&&mousePressedOver(balloon629)){
      num = 2;
      gameState = "start";
    }
    if(num1[i]===27&&mousePressedOver(balloon729)){
      num = 2;
      gameState = "start";
    }
    if(num1[i]===30&&mousePressedOver(balloon900)){
      num = 2;
      gameState = "start";
    }
  }
 
  drawSprites();
}

function spawn1(){
  if(frameCount%60===0){
    var count1 = createSprite(0,250,10,10);
    count1.x = random(10,450);
    count1.velocityY = 2;
  }
}