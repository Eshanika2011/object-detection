
status="";
objects=[];
function preload() {
    img = loadImage("hall.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
object_detector=ml5.objectDetector('cocossd',modelLoaded)
}
function modelLoaded (){
console.log("Model is loaded");
status=true;
object_detector.detect(img,got_result);
}
function got_result(error,results){
if (error) {
   console.log (error)
   }
else{
    console.log(results);
    objects=results
}
}
function draw() {
    image(img, 0, 0, 640, 420);
    if (status!="") {
  for (let index = 0; index < objects.length; index++){
      document.getElementById("status").innerHTML="Status : object detected";
    fill("red")
    percent=floor(objects[index].confidence*100)
    text(objects[index].label+" "+percent+"%", objects[index].x+15,objects[index].y +15)
    noFill();
    stroke("red")
    rect(objects[index].x,objects[index].y , objects[index].width,objects[index].height ); 
  }      
    }
    
    
    
}