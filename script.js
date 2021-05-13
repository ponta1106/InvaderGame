const enemy = document.getElementById('enemy');
const player = document.getElementById('player');

// 敵とプレイヤーの初期位置を設定
let firstPositionRow = (window.innerWidth - 100) / 2;
let firstPositionColumn = window.innerHeight - 200;
enemy.style.left = firstPositionRow + 'px';
player.style.left = firstPositionRow + 'px';
player.style.top = firstPositionColumn + 'px';

// エネミーの現在地を取得
let enemyPosition;
// プレイヤーの現在地を取得
let playerPosition;


let count = 0;

//enemyの移動
const fall = function() {
  enemy.style.top = count + 'px';
  count += 10;
  
  if(count > window.innerHeight) {
    count = 0;
  }
  enemyPosition = enemy.getBoundingClientRect() ;
  playerPosition = player.getBoundingClientRect() ;

  // 当たり判定
  if(enemyPosition.top > (playerPosition.top -100)
    &&
    enemyPosition.top < (playerPosition.top + 100)
    && 
    enemyPosition.left > (playerPosition.left -100)
    && 
    enemyPosition.left < (playerPosition.left + 100)
    ) {
    alert('clashed!');
    count = 0;
  }

  console.log('敵:'+enemyPosition.top);
  console.log('プレイヤー:'+playerPosition.top);

  setTimeout(fall, 100);
}

setTimeout(fall, 100);



//playerの移動
document.onkeydown = keydown;
function keydown(e) {
    // ←が押されたとき
    if(e.which == 37 && firstPositionRow > 0){
        firstPositionRow -= 10;
        player.style.left = firstPositionRow + 'px';
    }
    // →が押されたとき
    if(e.which == 39 && firstPositionRow <= (window.innerWidth - 100)){
        firstPositionRow += 10
        player.style.left = firstPositionRow + 'px';
    }
}
