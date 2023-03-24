//sorry for the spaghetti code but at least it's very readable
let zero;
let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let star;
let pound;
let keyA;
let keyB
let keyC;
let keyD;

function preload(){
	soundFormats('mp3');
	zero = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/0.mp3');
	one = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/1.mp3');
	two = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/2.mp3');
	three = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/3.mp3');
	four = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/4.mp3');
	five = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/5.mp3');
	six = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/6.mp3');
	seven = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/7.mp3');
	eight = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/8.mp3');
	nine = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/9.mp3');
	star = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/star.mp3');
	pound = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/pound.mp3');
	keyA = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/a.mp3');
	keyB = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/b.mp3');
	keyC = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/c.mp3');
	keyD = loadSound('https://the-doughnut.github.io/webserver/sounds/DTMF_Tones/d.mp3');
}

function setup(){
	createCanvas(320,240);
}

function draw(){
	fill('red');
	textSize(18);
	text("This is a DTMF tone generator.", 10, 20);
	text("Press a number, star, pound,",10,40);
	text("A, B, C or D on your keyboard.",10,60);
}

function keyPressed(){
	clear();
	//sorry for spaghetti code, i know there is better way to do this
	if(key == "0"){
		zero.play();
	}
	if(key == "1"){
		one.play();
	}
	if(key == "2"){
		two.play();
	}
	if(key == "3"){
		three.play();
	}
	if(key == "4"){
		four.play();
	}
	if(key == "5"){
		five.play();
	}
	if(key == "6"){
		six.play();
	}
	if(key == "7"){
		seven.play();
	}
	if(key == "8"){
		eight.play();
	}
	if(key == "9"){
		nine.play();
	}
	if(key == "*"){
		star.play();
	}
	if(key == "#"){
		pound.play();
	}
	if(key == "a"){
		keyA.play();
	}
	if(key == "b"){
		keyB.play();
	}
	if(key == "c"){
		keyC.play();
	}
	if(key == "d"){
		keyD.play();
	}
}

function keyReleased(){
	zero.stop();
	one.stop();
	two.stop();
	three.stop();
	four.stop();
	five.stop();
	six.stop();
	seven.stop();
	eight.stop();
	nine.stop();
	star.stop();
	pound.stop();
	keyA.stop();
	keyB.stop();
	keyC.stop();
	keyD.stop();
}