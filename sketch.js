var movingrect, fixedrect; 
function setup() {
  createCanvas(800,600);
 movingrect =  createSprite(400, 50, 50, 20);
 movingrect.shapeColor = "green";
 movingrect.velocityY = 5;
 fixedrect = createSprite(400,550, 20, 50);
 fixedrect.shapeColor = "green";
 fixedrect.velocityY= -5;
}

function draw() {
  background(0); 
  if(movingrect.y-fixedrect.y===movingrect.height/2+fixedrect.height/2){
    fixedrect.velocityY = -(fixedrct.velocityY);
    movingrect.velocityY = (movingrect.velocityY);
  }

  drawSprites();
}