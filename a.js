let circles = [];
let rects = [];
let triangles = [];
let bgm;
let i;

function preload(){
	soundFormats('mp3');
	bgm = loadSound('https://the-doughnut.github.io/webserver/bgm.mp3');
}

function setup(){
    createCanvas(640,480);
    circles.push({x: 30, y: 0}); //generate first shape
	i=0;
	noStroke();
}

function draw(){
    //background(0);   
	
	if(i<500){
		for (let c of circles) {
        fill(color(random(0,255),random(0,255),random(0,255)));
        circle(c.x, c.y, 20);
        c.y++;
        if (c.y > 480) {
            c.y = 0;
        }
		}
	}
	if(i<1000 && i>500){
		for(let r of rects){
			fill(color(random(0,255),random(0,255),random(0,255)));
			rect(r.x, r.y, 20, 20);
			r.y++;
			if(r.y>480){
				r.y=0;
			}
		}
	}
	if(i<1500 && i>1000){
		for(let t of triangles){
			fill(color(random(0,255),random(0,255),random(0,255)));
			triangle(t.x, t.y, t.x+20, t.y+30, t.x-30, t.y-40);
			t.y++;
			if(t.y>480){
				t.y=0;
			}
		}
	}
	if(i>1500){
		i=0;
	}
    

    circles.push({x: mouseX, y: mouseY});
	rects.push({x: mouseX, y: mouseY});
	triangles.push({x: mouseX, y: mouseY});
	
	i++;
}

function mouseClicked(){
	if(bgm.isPlaying()==true){
		
	}
	else{
		bgm.play();
	}
}