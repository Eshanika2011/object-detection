status="";
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
}
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("red")
    text("dog", 45, 75)
    noFill();
    stroke("red")
    rect(30, 60, 450, 350);
noFill();
    fill("darkblue")
    text("cat", 320, 120)
    noFill();
    stroke("darkblue")
    rect(300, 60, 270, 350);
}