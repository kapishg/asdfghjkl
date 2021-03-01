//Create variables here
var predog,happyDog,foodS,foodStock
var database,



function preload()
{ 
  predog=loadImages("Images/doglmg.png")
  happyDog=loadImages("Images/doglmg1.png")
}

function setup() {
	var canvas =createCanvas(500, 500);
  database= firebase.database();
  foodStock =database.ref("food")
  foodStock.on("value",readStock)
  fooedStock.set(20)
var dog= createSprite(250,360,10,60)
dog.addImage(doglmg)
dog.scale=0.2




}


function draw() {  
background(green)
if(foodS==undefined){
  textSize(20)
  fill(255)
  text("note:press UP_ARROW TO FEED KAP")
text("food remaining "+foodS,150,150)
}
if(keyWentDown(UP_ARROW)){
  wristStock(foodS)
  dog.addImage(doglmg1)
}
if(keyWentUp(UP_ARROW)){
  dog.addImage(doglmg)
}
if(foodS===0){
  foodS=20
}



  drawSprites();
  //add styles here

}
function writeStock(x){
  if(x>=0){
    x=0
  }
else{
  x=x-1
}
database.ref("/").update({
  Food:x
})
function readStock(data){
  foodS =data.val
}






}


