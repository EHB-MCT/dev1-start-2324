/** @type {CanvasRenderingContext2D} */
let context;

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context = canvas.getContext('2d');

drawBlueRectangle();
//drawRedRectangle();
drawCircle();

function drawCircle() {
    context.fillStyle = "red";
    context.beginPath();
    //context.arc(100, 100, 100, 0, Math.PI * 2);
    //context.ellipse(200, 200, 200, 100, 0, 0, Math.PI * 2);
    context.fill();
}

function drawBlueRectangle() {
    context.fillStyle = "blue";
    context.beginPath();
    context.rect(100, 100, 200, 200);
    context.fill();
}

function drawRedRectangle() {
    context.fillStyle = "red";
    context.beginPath();
    context.rect(200, 200, 200, 200);
    context.fill();
}