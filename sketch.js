var bullet,wall,thickness;
var speed, weight;
function setup() {
createCanvas(1600,400);
speed=random(200,315)
weight=random(30,52)
thickness = random(22,83)
bullet=createSprite(50, 200, 50, 50);
wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
background(0,0,0);  
drawSprites();
wall.shapeColor=color(80,80,80);
bullet.velocityX = speed;
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var Damage=0.5 * weight * speed * speed/thickness*thickness*thickness;
    
    if(Damage>10)
    {
      wall.shapeColor = "Red";
    }

    if(Damage<10)
    {
      wall.shapeColor = "Green";
    }
  }
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}