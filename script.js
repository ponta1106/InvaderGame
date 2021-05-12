const enemy = document.getElementById('enemy');
const player = document.getElementById('player');
let enemyPosition;
let playerPosition;
let count = 0;
var left  = 0 ;


//enemyの移動
const fall = function() {
    enemy.style.top = count + 'px';
    count += 50;
    
    if(count > window.innerHeight) {
        count = 0;
    }
    setTimeout(fall, 100);
    enemyPosition = enemy.getBoundingClientRect() ;
    playerPosition = player.getBoundingClientRect() ;
    judge();
}

setTimeout(fall, 100);

const judge = function() {
    if(enemyPosition == playerPosition) {
        alert('clashed!');
    }
}


//playerの移動
document.onkeydown = keydown;
function keydown(e) {
    // ←が押されたとき
    if(e.which == 37 && left > 0){
        left -= 10;
        player.style.left = left + 'px';
    }
    // →が押されたとき
    if(e.which == 39 && left <= (window.innerWidth - 100)){
        left += 10
        player.style.left = left + 'px';
    }
}

