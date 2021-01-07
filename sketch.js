var box1,box2,box3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1=new Box(750,640,30,150);

	box2=new Box(650,680,170,40);

	box3=new Box(550,640,30,150);

	ball=new Ball(200,200,10,100)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  drawSprites();
 
}



