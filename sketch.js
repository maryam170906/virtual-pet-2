//Create variables here
var dog , happyDog 
var database , foodS , foodStock
var readStock

function preload()
{
	//load images here
}

function setup() {
	createCanvas(500, 500);

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)

  
  fedTime = database.ref('FeedTime')
  fedTime.on("value",function(data){
    lastFed = data.val()
  })

  drawSprites();
  //add styles here
  function readStock(data){
    foodS = data.val()
  }

  function writeStock(x){
    database,ref('/').update({
      Food:x
    })
  }

}

feed = createButton('Feed the Dog')
  feed.position(700,95)
  feed.mousepressed(feedDog)

  addFood= createButton('Add Food')
  addFood.position(800,95)
  addFood.mousePressed(addFoods)





