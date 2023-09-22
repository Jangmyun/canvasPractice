const canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.fillRect(100,100,100,100);
ctx.clearRect(120,120,60,60);
ctx.strokeRect(130,130,40,40);

ctx.beginPath();
ctx.moveTo(40,300);
ctx.lineTo(300,300);
ctx.lineTo(400,2)
ctx.fillStyle = "#eee";
ctx.fill();



console.log(canvas);