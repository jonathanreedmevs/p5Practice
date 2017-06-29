function setup(){
    createCanvas(600,600);
    //background('#fae');
}

var x = 0;

function draw(){
    background('#fae');
    ellipse(x, 100, 100);
    ellipse(x, 200, 100);
    ellipse(x, 300, 100);
    x++;
}