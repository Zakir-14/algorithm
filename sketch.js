var fixedRect , movingRect;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(300, 200, 50, 100);
 
 fixedRect = createSprite(700,200,80,30);
 fixedRect.velocityX = -5;
}

function draw() {
  background(255,255,200);
  edges = createEdgeSprites();

  fixedRect.bounceOff(edges);
  movingRect.bounceOff(edges);

  if(fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.velocityX = fixedRect.velocityX;
    fixedRect.velocityX = 0;
  }
  
  drawSprites();
}