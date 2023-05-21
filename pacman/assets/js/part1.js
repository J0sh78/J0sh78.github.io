/*let canvasSprite = document.getElementById("canvas-sprites").getContext("2d");
let canvasMaze = document.getElementById("canvas-maze").getContext("2d");


canvasSprite.beginPath();

canvasSprite.arc(100, 100, 50, 0, 2 * Math.PI);
canvasSprite.fillStyle = "yellow";
canvasSprite.strokeStyle = "black";
canvasSprite.stroke();
canvasSprite.fill();


canvasSprite.beginPath();
canvasSprite.moveTo(200,200);
canvasSprite.arc(200, 200, 50, 0.25 * Math.PI, 1.75 * Math.PI);
canvasSprite.fillStyle = "yellow";
canvasSprite.strokeStyle = "black";
canvasSprite.stroke();
canvasSprite.fill();


canvasSprite.moveTo(175, 225);
canvasSprite.beginPath();
canvasSprite.arc(200, 175, 7.5, 0, 2 * Math.PI);
canvasSprite.fillStyle = "black";
canvasSprite.fill();
*/
var canvasSprites = document.getElementById("canvas-sprites").getContext("2d");
var canvasMaze = document.getElementById("canvas-maze").getContext("2d");


const squareSize = 10;
const sizePacman = 3;

var xPacman = 2;
var yPacman = 2;

function drawPacman(){
    // -----------------------------------
    // Agregado:
    let size = squareSize * sizePacman;
    let x = squareSize * xPacman;
    let y = squareSize * yPacman;
    // -----------------------------------

    let radius = size / 2;
    // Forma pacman
    canvasSprites.beginPath();
    canvasSprites.moveTo(x, y);  // Movemos el "puntero" al siguiente punto de inicio de trazado
    canvasSprites.arc(x, y, radius, 0.25 * Math.PI, 1.75 * Math.PI);
    canvasSprites.fillStyle = "yellow";
    canvasSprites.strokeStyle = "black";
    canvasSprites.stroke();
    canvasSprites.fill();

    // Ahora agregamos el ojo
    let eyeRadius = radius / 7.5;
    let eyeY = y - 4 * eyeRadius;
    canvasSprites.moveTo(175, 225);
    canvasSprites.beginPath();
    canvasSprites.arc(x, eyeY, eyeRadius, 0, 2 * Math.PI);
    canvasSprites.fillStyle = "black";
    canvasSprites.fill();
}

window.onkeydown = function(e){
    if (e.code == "ArrowRight") {
        moveRight_Pacman();
    }
    // Hacemos lo mismo con las otras tres flechas
    else if (e.code == "ArrowLeft") {
        moveLeft_Pacman();
    } else if (e.code == "ArrowUp") {
        moveUp_Pacman();
    } else if (e.code == "ArrowDown") {
        moveDown_Pacman();
    }
    drawGame();
}

function drawGame(){
    canvasSprites.clearRect(0,0,500,500)
    drawPacman();
}