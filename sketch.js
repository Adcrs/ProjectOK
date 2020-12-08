var car,wall,speed,weight,deform,thicc

function setup() {
  thicc =  random(22,83);
  createCanvas(800,300);
 car  =  createSprite(200,140,20,20);
 wall =  createSprite(700,140,thicc,height/2);
 speed =  random(55,90);
 weight =  random(400,1500);
 car.velocityX = speed;

}

function draw() {
  background(0);  
 if(car.isTouching(wall)){
    car.velocityX= 0 ;
    deform =  0.5*weight*speed*speed/thicc*thicc*thicc;
if (deform<100){
  car.shapeColor = "green";
}
  
if (deform<180 && deform>100){
  car.shapeColor = "yellow";
}
  
if (deform>180){
  car.shapeColor = "red";
}

if(deform>10){
  wall.shapeColor = color(255,0,0);
}
if(deform<10){
  wall.shapeColor = color(0,128,0)
}
 }
  drawSprites();
}
