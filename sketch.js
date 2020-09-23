var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,200,10,30);
  wall=createSprite(1200,200,thickness,height/2);

  bullet.velocityX = speed;
  bullet.shapeColor = "white"
  
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  
    if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
      bullet.velocityX = 0;
      var Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
      if (Damage > 10) {
        bullet.shapeColor = color(255,0,0);
      }

      if (Damage < 10 ){
        bullet.shapeColor = color(0,255,0);
      }
    }

  drawSprites();
}