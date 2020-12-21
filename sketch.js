var car ,wall;
var speed,weight;
var depormation;
function setup() {
  createCanvas(800,400);
  car =createSprite(400, 200, 50, 50);
  car.velocityX=400
  wall =createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255); 
  speed=random(55,90);
  weight=random(400,1500);
  if(car.x-wall.x<(car.width+wall.width)/2){
    car.velocityX=0;
    depormation=0.5*weight*speed*speed/22500;
    if(depormation>180){
      car.shapeColor=color(255,0,0);
    }
    if(depormation<180 && depormation>100){
      car.shapeColor=color(230,230,0);
    }
    if(depormation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}