const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let img1 = new Image();
img1.src = 'peng0.png';

const peng = {
    x : 10,
    y : 200,
    width : 72,
    height : 72,
    draw(){
        ctx.drawImage(img1, this.x, this.y);
    }
}

class Enemy {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}



let timer = 0;
let jumptimer = 0;
const array = [];
let theanimation;

function animation() {
    theanimation = requestAnimationFrame(animation);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 480 === 0){
        const enemy = new Enemy();
        array.push(enemy);
    }

    array.forEach((a, i, o)=> {
        if (a.x < 0){
            o.splice(i, 1);
        }

        a.x--;

        crash(peng, a);

        a.draw();
    })

    //점프기능
    if (jump == true){
        peng.y-=3;
        jumptimer++;
    }
    if (jump == false){
        if (peng.y < 200){
            peng.y+=2;
        }
    }
    if (jumptimer > 100){
        jump = false;
        jumptimer = 0;
    }

    peng.draw();
}

requestAnimationFrame(animation)

//충돌확인
function crash(peng, enemy){
    const xDif = enemy.x - (peng.x + peng.width);
    const yDif = enemy.y - (peng.y + peng.height);
    if (xDif < 0 && yDif < 0){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(theanimation);
    }
}


let jump = false;
document.addEventListener('keydown', function(e){
    if (e.code === 'Space'){
        jump = true;
    }
})