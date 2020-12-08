var moving,fixed,ran,rand;
function setup() {
  createCanvas(800,400);
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="blue";
  fixed=createSprite(200,200,50,50);
  fixed.shapeColor="green";
  rand=Math.round(random(30,100));
  ran=Math.round(random(50,150));
  fixed.width=rand;
  fixed.height=ran;
}

function draw() {
  background("red");  
  moving.y=mouseY;
  moving.x=mouseX;
  console.log(moving.y-fixed.y);
  //console.log("fixed="+fixed.x);
  if(moving.x-fixed.x<(moving.width/2+fixed.width/2)
     && fixed.x-moving.x<(moving.width/2+fixed.width/2)
     && moving.y-fixed.y<(moving.height/2+fixed.height/2)
     && fixed.y-moving.y<(moving.height/2+fixed.height/2)){
    moving.shapeColor="black";
    fixed.shapeColor="black";
  }
  else{
    moving.shapeColor="blue";
    fixed.shapeColor="green";
  }

  drawSprites();
}