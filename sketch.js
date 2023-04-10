var rocket, rocketImg, asteroidImg, asteroid, coin, coinImg, explosion
var asteroidGroup;
var gameState;

gameState = "PLAY";

function preload(){
  asteroidImg = loadImage("asteroid.png");
  rocket_alive = loadAnimation("rocket.png");
  rocket_dead = loadAnimation("explosion.png");
  

}
function setup() {
  createCanvas(windowWidth, windowHeight);


   rocket = createSprite(100,height/2,50, 50);
   rocket.addAnimation("alive",rocket_alive);
   rocket.addAnimation("dead", rocket_dead);
   rocket.scale = 0.5
   rocket.velocityX = 10

asteroidGroup = new Group;
   
}

function draw() {
  background(255,255,255);  
  drawSprites();
camera.x = rocket.x + 900
if (gameState == "PLAY"){
  if(keyDown("UP_ARROW")){
    rocket.y += -20
  }

  
  if(keyDown("DOWN_ARROW")){
    rocket.y += 20
  }


  
  for(i = 0;i<asteroidGroup.length; i++){
    if(rocket.isTouching(asteroidGroup[i])){
      asteroidGroup[i].remove();
      gameState = "END";
    }
  } 


  spawnAsteroids();
}  else if (gameState == "END"){
  rocket.changeAnimation("dead");
  rocket.velocityX = 0;

}


}


function spawnAsteroids(){
  if (frameCount % 100 == 0){
    asteroid = createSprite(500,0);
    asteroid.addImage(asteroidImg);
    asteroid.scale = 0.4

    asteroid.x = Math.round(random(rocket.x + 500,width));
    asteroid.velocityY = 7;

    asteroidGroup.add(asteroid);


  }
}