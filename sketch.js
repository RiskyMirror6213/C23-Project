const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var long1, long2, long3, long4, long5, long6;
var wide1, wide2, wide3, wide4, wide5;
var medium1, medium2; /*medium3, medium4*/
var ground1, ground2, ground3, ground4;

function setup() {
  var canvas = createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(400, 600, 1200, 1);
  ground2 = new Ground(400, 0, 1200, 1);
  ground3 = new Ground(0, 300, 1, 1200);
  ground4 = new Ground(800, 300, 1, 1200);
  long1 = new Blocks(160, 350, 50, 100)
  long2 = new Blocks(320, 350, 50, 100)
  long3 = new Blocks(480, 350, 50, 100)
  long4 = new Blocks(640, 350, 50, 100)
  wide1 = new Blocks(160, 100, 160, 50)
  wide2 = new Blocks(320, 100, 160, 50)
  wide3 = new Blocks(480, 100, 160, 50)
  wide4 = new Blocks(640, 100, 160, 50)
  medium1 = new Blocks(240, 0, 100, 50)
  medium2 = new Blocks(400, 0, 100, 50)
  medium3 = new Blocks(560, 0, 100, 50)
  long5 = new Blocks(320, 0, 50, 100)
  long6 = new Blocks(480, 0, 50, 100)
  wide5 = new Blocks(400, 0, 160, 50)
  //medium4 = new Blocks(0, 100, 150, 100)
  //medium5 = new Blocks(800, 100, 150, 100)
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine)
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  long1.display();
  long2.display();
  long3.display();
  long4.display();
  wide1.display();
  wide2.display();
  wide3.display();  
  wide4.display();
  wide5.display();
  medium1.display();
  medium2.display();
  medium3.display();
  long5.display();
  long6.display();
  //medium4.display();
  //medium5.display();

  drawSprites();
}