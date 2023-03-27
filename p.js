let tone;
let redbox;
let usdt;
let ukdt;
let jpdt;
let usrb;
let ukrb;
let jprb;

function preload(){
	
	soundFormats('ogg');
	tone = loadSound('https://the-doughnut.github.io/webserver/sounds/2600_Hz.ogg');
	redbox = loadSound('https://the-doughnut.github.io/webserver/sounds/Redboxquarter.ogg');
	usdt = loadSound('https://the-doughnut.github.io/webserver/sounds/US_dial_tone.ogg');
	ukdt = loadSound('https://the-doughnut.github.io/webserver/sounds/UK_dial_tone_example.ogg');
	jpdt = loadSound('https://the-doughnut.github.io/webserver/sounds/JA_dial_tone.ogg');
	usrb = loadSound('https://the-doughnut.github.io/webserver/sounds/US_ringback_tone.ogg');
	ukrb = loadSound('https://the-doughnut.github.io/webserver/sounds/UK_ringback_tone.ogg');
	jprb = loadSound('https://the-doughnut.github.io/webserver/sounds/JA_Ringback_tone.ogg');
}

function setup(){
	
}

function draw(){
	
}


function firstButton(){
	//alert("Press 2 to hear a 2600Hz tone (loud).");
	tone.play();
}

function secondButton(){
	//alert("Press 3 to hear a red box sound $0.25.");
	redbox.play();
}

function usdtButton(){
	usdt.play();
}

function ukdtButton(){
	ukdt.play();
}

function jpdtButton(){
	jpdt.play();
}

function usrbButton(){
	usrb.play();
}

function ukrbButton(){
	ukrb.play();
}

function jprbButton(){
	jprb.play();
}

function stopSound(){
	tone.stop();
	redbox.stop();
	usdt.stop();
	ukdt.stop();
	jpdt.stop();
	usrb.stop();
	ukrb.stop();
	jprb.stop();
}

function helpButton(){
	alert("Click the first button to hear a 2600Hz tone (loud).\nClick the second button to hear a red box sound $0.25.\nThe second row are examples of dial tones around the world.\nThe third row are examples of ringback tones around the world.");
}

function keyPressed(){
	
}