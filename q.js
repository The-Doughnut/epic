let circleNum;
let rectNum;
let triangleNum;
let randoColour;

function setup(){
	createCanvas(320,240);
	background(random(255),random(255),random(255));
	frameRate(8);
	
	circleNum = random(999);
	rectNum = random(999);
	triangleNum = random(999);
	
	//debugger
	print("circleNum: "+circleNum);
	print("rectNum: "+rectNum);
	print("triangleNum: "+triangleNum);
	print("randoColour: "+randoColour);
}

function draw(){
	
	//drawing circles
	for(let i =0; i<circleNum;i++){
		randoColour = color(random(255),random(255),random(255));
		fill(randoColour);
		circle(random(320),random(240),random(320));
	}
	
	//drawing rectangles
	for(let j=0; j<rectNum;j++){
		randoColour = color(random(255),random(255),random(255));
		fill(randoColour);
		rect(random(320),random(240),random(320),random(240));
	}
	
	for(let k=0; k<triangleNum;k++){
		randoColour = color(random(255),random(255),random(255));
		fill(randoColour);
		rect(random(240),random(240),random(240),random(240),random(240),random(240));
	}
}