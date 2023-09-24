const canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');



function drawArcs(){
    for(let i=0; i<4; i++){
        for(let j=0; j<3; j++){
            ctx.beginPath();
            const x= 25 + j*50;
            const y = 25+ i*50;
            const radius = 20;
            const startAngle = 0;
            const endAngle = Math.PI + (Math.PI * j) / 2;
            const counterclockwise = i % 2 !== 0

            ctx.arc(x,y,radius,startAngle,endAngle,counterclockwise);
            if(i>1) {
                ctx.fill();
            }else{
                ctx.stroke(); 
            }
            
        }
    }
}


function drawTriangle(x,y){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+25,y+25);
    ctx.lineTo(x+25,y -25);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = '#f2f'
    ctx.fill()
}
function drawSmile(){
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
}


console.log(canvas);