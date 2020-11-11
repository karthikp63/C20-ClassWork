var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(200,200,100,50);
  movingRect = createSprite(300,100,50,100);
  movingRect.shapeColor = "blue"
  fixedRect.shapeColor = "yellow"
  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x)
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else {
    movingRect.shapeColor = "blue"
    fixedRect.shapeColor = "yellow"
  }
  drawSprites();
}