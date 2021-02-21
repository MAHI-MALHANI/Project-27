
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject;
var ropeObject1, ropeObject2, ropeObject3, ropeObject4, ropeObject5, ropeObject6,    

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Bob= new Bob(width+200, 650 ,20,20);
	rope1= new rope(bobObject1.body,roofObject1.body, -bobDiameter*2,0);
	rope2= new rope(bobObject2.body,roofObject2.body, -bobDiameter*2,0);
	rope3= new rope(bobObject3.body,roofObject3.body, -bobDiameter*2,0);
	rope4= new rope(bobObject4.body,roofObject4.body, -bobDiameter*2,0);
	rope5= new rope(bobObject5.body,roofObject5.body, -bobDiameter*2,0);
	rope6= new rope(bobObject6.body,roofObject6.body, -bobDiameter*2,0);
	roof= new roof(50, 50, 700, 20);

      
	bobObject1.x=50;
	bobObject1.y=650;

	bobObject2.x=150;
	bobObject2.y=650;

	bobObject3.x=350;
	bobObject3.y=650;

	bobObject4.x=550;
	bobObject4.y=650;

	bobObject5.x=750;
	bobObject5.y=650;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  roof.display();

  bobObject3.display();
  bobObject4.display();

  bobObject5.display();
  
  rope.display();
  
  drawSprites();
 
}



