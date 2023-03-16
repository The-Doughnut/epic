let img;
let mySound;
let myProblem; 
let epicCounter;
var myWindow;
let randomNumberH;
let randomNumberL;

function preload(){
  soundFormats('mp3');
  mySound = loadSound('https://the-doughnut.github.io/webserver/sounds/trololol_V2.mp3');
}

function setup() {
  createCanvas(640, 480, WEBGL);
 
  img=loadImage('https://the-doughnut.github.io/webserver/assets/Trollface_non-free.png');
  myProblem=loadImage('https://the-doughnut.github.io/webserver/assets/problem.png');
  epicCounter = -1;
  randomNumberH = 0;
  randomNumberL = 0;
}

function draw() {
	background(0);
	  
	normalMaterial();
	//rotateZ(frameCount * 0.01);
	rotateY(mouseX/25);
	rotateX(mouseY/25);
	texture(img);
	box(256,256,256);
	
}

function mouseClicked(){
  if(!mySound.isPlaying()){
	mySound.play();
	print("Audio has been played");
  }
  else{
	print("audio already playing");
  }
  print("mouse clicked");
}

function mousePressed(){
	//image(myProblem, -50, -50);
	epicCounter++;
	print('the counter: '+epicCounter);
	for(let i = 0; i<5; i++){
		randomiser();
		trolling();
	}
	
	if(epicCounter % 2 === 0){
		document.getElementById("problemID").removeAttribute('hidden');
		document.getElementById("problematicID").removeAttribute('hidden');
	}
	else{
		document.getElementById("problemID").setAttribute('hidden', 'true');
		document.getElementById("problematicID").setAttribute('hidden', 'true');
	}
}

function keyPressed(){
	clear();
	if(key == "b"){
		myWindow = window.open("b.htm", "", "width=320,height=240");
	}
	if(key == "r"){
		myWindow = window.open("r.htm", "", "width=320,height=240");
	}
	if(key == "t"){
		myWindow = window.open("t.htm", "", "width=320,height=240");
	}
	
	//reminder to myself: make a window which implements mouse press
}

function randomiser(){
	randomNumberH = Math.random()*720;
	randomNumberL = Math.random()*1280;
	print("thingH: "+randomNumberH);
	print("thingL: "+randomNumberL);
}

function trolling(){
	myWindow = window.open("troll.htm", "", "width=640,height=480");
	myWindow.moveTo(randomNumberL, randomNumberH);
}
