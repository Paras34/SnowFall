const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bgImg, santaImg,santa,invisibleGround;
var snow1, snow2, snow3, snow4 ,snow5,snow6,snow7,snow8,snow9,snow10;

function preload(){

  bgImg = loadImage("snow2.jpg");
  santaImg = loadImage("sc2.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world

  santa = createSprite(300,350);
  santa.addImage(santaImg);
  santa.scale = 0.7;

  invisibleGround = createSprite(400,395,800,10);
  invisibleGround.visible = false;

  snow1 = new Snowflake(random(0,800),random(random(-100,-200), 200));
  snow2 = new Snowflake(random(0,800),random(random(-100,-200), 200));
  snow3 = new Snowflake(random(0,800),random(random(-100,-200), 200));
  snow4 = new Snowflake(random(0,800),random(random(-100,-200), 200));
  snow5 = new Snowflake(random(0,800),random(random(-100,-200), 200));
  snow6 = new Snowflake(random(0,800),random(random(-100,-200), 200));
  snow7 = new Snowflake(random(0,800),random(random(-100,-200), 200));
  snow8 = new Snowflake(random(0,800),random(random(-100,-200), 200));
  snow9 = new Snowflake(random(0,800),random(random(-100,-200), 200));
  snow10 = new Snowflake(random(0,800),random(random(-100,-200), 200));

  

  
}

function draw() {
  background(bgImg);

  

  Engine.update(engine);

  santa.collide(invisibleGround);

  drawSprites();

  if(keyDown("LEFT_ARROW")){
    santa.x -= 3;
  }
  if(keyDown("RIGHT_ARROW")){
    santa.x += 3;
  }
  if(keyDown("SPACE")){
    santa.velocityY = -10;
  }
  santa.velocityY += 0.8

  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()
  snow7.display()
  snow8.display()
  snow9.display()
  snow10.display()



}