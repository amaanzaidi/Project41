const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var maxDrops = 100;
var drops =[];



function preload(){
}

function setup(){
   var canvas  = createCanvas(400,700);
   engine = Engine.create();
   world = engine.world;
   person = new Umbrella(80,450);
   newdrops = new Drop(200,50);
   for (var i=0; i<maxDrops; i++){
    drops.push(new Drop(random(0,400),random(0,400)));
   } 
   
}

function draw(){
    background('black');
    Engine.update(engine);
    
    person.display();
    newdrops.display();
    newdrops.update();
    for(var j = 0; j <maxDrops; j++){
        drops [j].display();
        drops [j].update();
      }
    
     drawSprite();
   
}   




