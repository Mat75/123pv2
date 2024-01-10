difference=0
rightWristX=0
leftWristX=0

function setup(){
    Canvas=createCanvas(550, 550)
    Canvas.position(800, 150)
    Video=createCapture(VIDEO)
    Video.position(250, 150)
    PoseNet=ml5.poseNet(Video, modelLoaded)
    PoseNet.on("pose", gotPoses)
}

function modelLoaded(){
console.log("modelo cargado")
}

function preload(){

}
function draw(){
background("orange")
document.getElementById("font").innerHTML= "el tamaño de la letra es:"+difference
textSize(difference)
fill("purple")
text("hola mateo", 50, 400)
}

function gotPoses(results){
if (results.length>0) {
    console.log(results)
    rightWristX= results[0].pose.rightWrist.x
    leftWristX= results[0].pose.leftWrist.x
    difference=floor(leftWristX-rightWristX)
}
}