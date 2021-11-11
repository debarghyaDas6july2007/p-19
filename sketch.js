var sky, skying
var run, runner

function preload(){
skying=loadImage("sky.png.jpg")
runner=loadAnimation("k.png","k2.png","k3.png","k4.png","k5.png")
}

function setup() {
 createCanvas(600,600)
 sky=createSprite(300,300)
 sky.scale=0.6
 sky.addImage("sky.png.jpg",skying)
 sky.velocityX=-2
 sky.x=width/10

 run=createSprite(100,520,50,50)
 run.addAnimation("k.png","k2.png","k3.png","k4.png","k5.png",runner)




}

function draw() {
background("white")

if(sky.x>560){
    sky.x=200
}

if(run.x>560){
  run.x=200

}
 drawSprites()

}