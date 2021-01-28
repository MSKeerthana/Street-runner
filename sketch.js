var player
var ground
var track,PuddleImg
var imgx = 0;
var imgy = 0;
var distance = 0;
var gameState = 0;
var puddleGroup;

function preload() {
 track = loadImage("track.jpg");
 PuddleImg = loadImage("Puddle.png");
}



function setup() {
  createCanvas(displayWidth,displayHeight-110);
  player=createSprite(width/2,height-50,50,50);
  ground=createSprite(width/2,height,width,20);
  puddleGroup =new Group();
 
}

function puddle(){
  console.log("hi")
  if(frameCount % 60 === 0){
      var puddle = createSprite (200, player.y - displayHeight/2, 50,50)
      puddle.x = Math.round(random(100,displayWidth- 100));
      console.log(puddle.x);
    
      puddle.addImage(PuddleImg);
      puddleGroup.add(puddle);
      
  }
} 


function move()  {
    if(keyIsDown(LEFT_ARROW)){
        player.x= player.x-50;
    }
    if(keyIsDown(RIGHT_ARROW)){
      player.x= player.x+50;
    }
    if(keyIsDown(UP_ARROW)){
      player.velocityY = -10;
      distance += 10;
    }  
   
      // Setting the camera position. These are the values you'll update to pan and zoom based on mouse input.
      rotation += 0.05;
      camera.position.x = 0;
      camera.position.y = Math.sin(rotation) * 500;
      camera.position.z = Math.cos(rotation) * 500;
      //camera.lookAt( scene.position ); // the origin
}






function draw() {

  textSize(30)
  text(distance, 150,player.y);
      imgy = -displayHeight *4;
      image(track, imgx, imgy, displayWidth, displayHeight*5 )
     
      move();
      player.velocityY=player.velocityY+0.8
      player.collide(ground);

      if(distance >3890){
        reset();
      }
      if(puddleGroup.isTouching(player)){
        player.velocityY=0;    
      }

      puddle();
  drawSprites();
}

function reset(){
  player.y = height - 50;
  player.x = width/2;
  distance = 0;
}
