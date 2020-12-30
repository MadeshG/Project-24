
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload();
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,10);
	paper = new Paper(100,100,20);
	basketLeft=new Basket(600,650,20,100);
	basketBottom=new Basket(630,670,100,20);
	basketRight=new Basket(700,650,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  basketLeft.display();
  basketBottom.display();
  basketRight.display();

  if(keyDown("space")){
    paper.velocityY = -5
  }



  drawSprites();
 
}
function keypressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



