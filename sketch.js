var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisions = [];  
var particle;
var plinkos = [];

var divisionHeight=300;
var gameState = "start";
var score =0;
var turn = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 
function draw() {
  background("Silver");
  
  text("Score : "+score,20,30);
  Engine.update(engine);

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }
   text("500",25,550);
   text("500",105,550);
   text("500",185,550);
   text("500",265,550);
   text("100",345,550);
   text("100",425,550);
   text("200",505,550);
   text("200",585,550);
   text("200",665,550);
   text("200",745,550);

  if(particle != null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score = score+500;
        particle = null;
        if(turn>=5){gameState = "end"}
      }else if(particle.body.position.x<450){
        score = score+100;
        particle = null;
        if(turn>=5){gameState = "end"}
      }
      else if(particle.body.position.x<800){
        score = score+200;
        particle = null;
        if(turn>=5){gameState = "end"}
      }
    }
  }
  ground.display();
  if(gameState === "end"){
    textSize(50);
    text("Game Over",300,250);
  }
}

function mousePressed(){
  if(gameState !== "end" ){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}