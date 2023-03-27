//READ ME: Most browsers will STOP JAVASCRIPT ENTIRELY upon clicking in the window once. Please enable pop-ups (for some reason this affects javascript) and refresh the page.

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
  //p5js hates loading local files (why???) so I had to host them
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
	//mapping keys (sorry for spaghetti code)
	if(key == "q"){
		myWindow = window.open("q.htm", "", "width=320,height=240");
	}
	if(key == "w"){
		myWindow = window.open("w.htm", "", "width=320,height=240");
	}
	if(key == "e"){
		myWindow = window.open("e.htm", "", "width=320,height=240");
	}
	if(key == "y"){
		myWindow = window.open("y.htm", "", "width=320,height=240");
	}
	if(key == "u"){
		myWindow = window.open("u.htm", "", "width=320,height=240");
	}
	if(key == "i"){
		myWindow = window.open("i.htm", "", "width=320,height=240");
	}
	if(key == "o"){
		myWindow = window.open("o.htm", "", "width=320,height=240");
	}
	if(key == "p"){
		myWindow = window.open("p.htm", "", "width=320,height=240");
	}
	if(key == "a"){
		myWindow = window.open("a.htm", "", "width=640,height=480");
		myWindow = window.open("soundMessage.htm", "", "width=300,height=100");
	}
	if(key == "s"){
		myWindow = window.open("s.htm", "", "width=320,height=240");
	}
	if(key == "d"){
		myWindow = window.open("d.htm", "", "width=320,height=240");
	}
	if(key == "f"){
		myWindow = window.open("f.htm", "", "width=320,height=240");
	}
	
	if(key == "b"){
		myWindow = window.open("b.htm", "", "width=320,height=240");
	}
	if(key == "r"){
		myWindow = window.open("r.htm", "", "width=320,height=240");
	}
	if(key == "t"){
		myWindow = window.open("t.htm", "", "width=320,height=240");
	}
	
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
