const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruitConst;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(8, {x: width/2 , y: 30})
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  fruit = Bodies.circle(width/2, 200, 20, {density: 0.001})
  Composite.add(rope.body, fruit)
  fruitConst = new Link(
    rope,
    fruit,
  )
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  Engine.update(engine);
  ellipse(fruit.position.x, fruit.position.y, 20)

 
   
}
