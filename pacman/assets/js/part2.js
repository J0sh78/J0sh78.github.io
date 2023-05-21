function drawWalls(){
    for(let i=0; i<patronLaberinto.length;i++){
        let x= patronLaberinto[i][0]*squareSize;
        let y= patronLaberinto[i][1]* squareSize;

        canvasMaze.beginPath();
        canvasMaze.rect(x,y, squareSize, squareSize);
        canvasMaze. fillStyle ="blue";
        canvasMaze. strokeStyle ="white";
        canvasMaze.fill();
        canvasMaze.stroke();
    }
}
drawWalls();
const canvasWidth = document.getElementById("canvas-maze").width / squareSize;
const canvasHeight = document.getElementById("canvas-maze").height / squareSize;

function moveRight_Pacman(){
    if(xPacman < canvasWidth - 1){
        xPacman +=1;
    }
}

function moveLeft_Pacman(){
    if(xPacman >  1){
        xPacman -=1;
    }
}

function moveUp_Pacman(){
    if(yPacman <  1){
        yPacman -=1;
    }
}

function moveDown_Pacman(){
    if(yPacman < canvasHeight - 1){
        yPacman +=1;
    }
}
