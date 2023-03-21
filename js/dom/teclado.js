const d = document;

export function moveBall(e,ball,stage){
const $ball = d.querySelector(ball),
$stage = d.querySelector(stage),
limitsBall= $ball.getBoundingClientRect(),
limitsStage= $stage.getBoundingClientRect();
// console.log(e.keyCode);

// creamos funcion anonima mover
// const move= (direction)=>{ }
switch(e.keyCode){
    case 37:
        // move("left");
        e.preventDefault();
        if(limitsBall.left>limitsStage.left)x--;
    break;
    case 38:
        // move("up");
        e.preventDefault();
        if(limitsBall.top>limitsStage.top)y--;
    break;
    case 39:
        // move("right");
        e.preventDefault();
        if(limitsBall.left<limitsStage.left)x++;
    break;
    case 40:
        // move("down");
        e.preventDefault();
        if(limitsBall.bottom<limitsStage.bottom)y++;
    break;
        default:
            break;
}
$ball.style.transform =`translate(${x*10}px, ${y*10}px)`;
}


export function shortcuts(e){
    // atajos
    // console.log(e.type)
    // console.log(e)
}