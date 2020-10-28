const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling1,sling2,sling3,sling4,sling5,sling6,pend1,pen2,pend3,pend4,pend5,pend6,roof1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	pend1 = new marble(600, 650, 40);
	pend2 = new marble(650, 650, 40);
	pend3 = new marble(700, 650, 40);
	pend4 = new marble(750, 650, 40);
	pend5 = new marble(800, 650, 40);
	pend6 = new marble(850, 650, 40);
	roof1 = new roof(365, 100, 300, 20);
	sling1 = new rope(pend1.body, roof1.body, 237, 100);
	sling2 = new rope(pend2.body, roof1.body, 287, 100);
	sling3 = new rope(pend3.body, roof1.body, 337, 100);
	sling4 = new rope(pend4.body, roof1.body, 387, 100);
	sling5 = new rope(pend5.body, roof1.body, 437, 100);
	sling6 = new rope(pend6.body, roof1.body, 487, 100);
	Engine.run(engine);
}

function draw() {
	background(255);
	pend1.display();
	pend2.display();
	pend3.display();
	pend4.display();
	pend5.display();
	pend6.display();
	roof1.display();
	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();
	sling6.display();
	keyPressed();
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
		//alert('u are inside arrow');
		Matter.Body.applyForce(pend1.body, pend1.body.position, { x: -50, y: -45 });

	}
}