let c;
let cs;
let d;
let ds;
let e;
let f;
let fs;
let g;
let gs;
let a;
let as;
let b;

function preload(){
	soundFormats('mp3');
	c = loadSound('https://the-doughnut.github.io/webserver/notes/c.mp3');
	cs = loadSound('https://the-doughnut.github.io/webserver/notes/cs.mp3');
	d = loadSound('https://the-doughnut.github.io/webserver/notes/d.mp3');
	ds = loadSound('https://the-doughnut.github.io/webserver/notes/ds.mp3');
	e = loadSound('https://the-doughnut.github.io/webserver/notes/e.mp3');
	f = loadSound('https://the-doughnut.github.io/webserver/notes/f.mp3');
	fs = loadSound('https://the-doughnut.github.io/webserver/notes/fs.mp3');
	g = loadSound('https://the-doughnut.github.io/webserver/notes/g.mp3');
	gs = loadSound('https://the-doughnut.github.io/webserver/notes/gs.mp3');
	a = loadSound('https://the-doughnut.github.io/webserver/notes/a.mp3');
	as = loadSound('https://the-doughnut.github.io/webserver/notes/as.mp3');
	b = loadSound('https://the-doughnut.github.io/webserver/notes/b.mp3');
}

function setup(){
	createCanvas(320,240);
}

function draw(){
	fill('red');
	textSize(18);
	text("This is keyboard (instument).", 10, 20);
	text("Use you keyboard to play.", 10, 40);
}

function keyPressed(){
	clear();
	if(key == "a"){
		c.play();
	}
	if(key == "w"){
		cs.play();
	}
	if(key == "s"){
		d.play();
	}
	if(key == "e"){
		ds.play();
	}
	if(key == "d"){
		e.play();
	}
	if(key == "f"){
		f.play();
	}
	if(key == "t"){
		fs.play();
	}
	if(key == "g"){
		g.play();
	}
	if(key == "y"){
		gs.play();
	}
	if(key == "h"){
		a.play();
	}
	if(key == "u"){
		as.play();
	}
	if(key == "j"){
		b.play();
	}
}

function keyReleased(){
	c.stop();
	cs.stop();
	d.stop();
	ds.stop();
	e.stop();
	f.stop();
	fs.stop();
	g.stop();
	gs.stop();
	a.stop();
	as.stop();
	b.stop();
}