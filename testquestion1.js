let posX = 300 , xSpeed, posY = 200;
function setup(){
    createCanvas(600,400);
    background('lightblue');
    // 300 = width/2;
    xSpeed = 5;
    fill('limegreen');
}

function draw(){
    background('lightblue');
    circle(posX, posY, 50);
    posX += xSpeed;
    if(posX - 50/2 <=0 || posX + 50/2 >= width){
        xSpeed = xSpeed * -1;
    }
    // posY += ySpeed;
    // if(posY -50/2 <=0 || posY + 50/2 >= width){
    // }
}

