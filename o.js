let thing;
let originalName;
let mouseClickCount;
let oldMouse;

let circles = [];

function setup(){
    createCanvas(320,240);
    thing = 120;
    originalName = 0;
    mouseClickCount = 0;
    oldMouse = 0;

    circles.push({x: 30, y: 0});
}

function draw(){
    //background(0);
    

    for (let c of circles) {
        fill(color(random(0,255),random(0,255),random(0,255)));
        circle(c.x, c.y, 20);
        c.y++;
        if (c.y > 240) {
            c.y = 0;
        }
    }

    if(oldMouse != mouseClickCount){
        circles.push({x: mouseX, y: mouseY});
        oldMouse = mouseClickCount;
    }
}

async function mouseClicked(){
    mouseClickCount++;

}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
} //usage: await sleep(1000);