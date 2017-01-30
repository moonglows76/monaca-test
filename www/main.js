//変数の初期化
var game_flg = true;
var game = null;
var player = null;
var effect = null;
var score = null;
var score_point = 0;
var bg_image = null;
var sprite_size = 200;
var horizon = 200;
var play_time = 70000;
var move_point = 0;
var move_dx = 10;
var interval_time = 10000;
var enemy_data = [];
var item_data = [];

var walk = {
    'stop':[0,0,0,1],
    'right':[2,2,3,3],
    'left':[4,4,5,5]
};
var enemy_img = [
    'img/enemyA.png',
    'img/enemyB.png',
    'img/enemyC.png'
];
var touch_flg = false;
var touch_dx = 0;


enchant();

function startNow(){
    var div = document.getElementById('msg');
    document.body.removeChild(div);

    game = new Game(1280,720);
    game.preload('img/background.png');
    game.preload('img/character.png');
    game.preload('img/ef_itemGet.png');
    game.preload('img/enemyA.png');
    game.preload('img/enemyB.png');
    game.preload('img/enemyC.png');
    game.preload('img/item.png');
    game.fps = 10;
    
    game.onload = function(){
        //背景作成
        bg_image = new Sprite(1280,720);
        bg_image.image = game.assets['img/background.png'];
        bg_image.moveTo(0,0);
        game.rootScene.addChild(bg_image);

        //プレイヤー作成
        player = new Sprite(sprite_size,sprite_size);
        player.image = game.assets['img/character.png'];
        player.frame = [0,1];
        player.moveTo(100,horizon);
        game.rootScene.addChild(player);

        //効果作成
        effect = new Sprite(sprite_size,sprite_size);
        effect.image = game.assets['img/ef_itemGet.png'];
        effect.moveTo(-200,-200);
        effect.tl.hide();
        game.rootScene.addChild(effect);

        //スコア作成
        score = new Label('SCORE: 0');
        score.color = 'red';
        score.font = 'bold 48pt Times';
        score.width = 500;
        score.moveTo(50, horizon + 300);
        game.rootScene.addChild(score);

        move_point = player.x;

        //イベントの組み込み
        game.rootScene.addEventListener(enchant.Event.TOUCH_START, function(event){
            touch_scene(event);
        });

        player.addEventListener(enchant.Event.TOUCH_START, function(event){
            touch_player(event);
        });
        player.addEventListener(enchant.Event.ENTER_FRAME, function(event){
            move_sprite(event);
            checkEnemy();
            checkItem();
        });

    };

    //ゲームの開始
    game.start();
    setTimeout(makeEnemy, 1000);
    setTimeout(makeItem, 10000 + Math.floor(Math.random() * 10) * 1000);
    setTimeout(gameEnd, play_time);
};

//シーンをタッチ
function touch_scene(event) {
    move_point = event.x - sprite_size / 2;
    if( move_point > player.x ) {
        player.frame = walk.right;
    } else {
        player.frame = walk.left;
    }
}

//プレイヤーをタッチ
function touch_player(event) {
    touch_flg = true;
    touch_dx = -25;
}

//スプライト（プレイヤー）を動かす
function move_sprite(event){
    if ( Math.abs(move_point - player.x) <= move_dx ) {
        player.frame = walk.stop;
    }
    if ( move_point - player.x >= move_dx ) {
        player.x += move_dx;
    }
    if ( player.x - move_point >= move_dx ) {
        player.x -= move_dx;
    }
    if ( touch_flg ) {
        player.y += touch_dx;
        touch_dx += 2;
        if( player.y < sprite_size / 2 * -1 ) {
            player.y = sprite_size / 2 * -1;
        }
        if( player.y > horizon ) {
            player.y = horizon;
            touch_flg = false;
            touch_dx = 0;
        }        
    }
}

//敵キャラの作成
function makeEnemy(){
    var enemy = new Sprite(sprite_size, sprite_size);
    enemy_data.push(enemy);
    var img_num = Math.floor(Math.random() * 3);
    enemy.image = game.assets[enemy_img[img_num]];
    var x = Math.floor(Math.random() * game.width - sprite_size);
    enemy.moveTo(x, horizon);
    enemy.frame = player.x > x ? walk.right : walk.left;
    game.rootScene.addChild(enemy);
    enemy.tl.moveTo( player.x, horizon, 100 ).removeFromScene();
    if( game_flg ){
        interval_time -= interval_time / 10;
        setTimeout(makeEnemy, interval_time);
    }
}

//敵キャラの衝突チェック
function checkEnemy(){
    for( var i = 0;  i < enemy_data.length; i++){
        //敵キャラとの衝突チェック
        if( player.within(enemy_data[i]), 180){
            if( touch_dx > 0 ){
                effect.x = enemy_data[i].x;
                effect.y = enemy_data[i].y;
                effect.tl.clear().show().fadeOut(10).hide();
                update_core(100);
            } else {
                update_core(-10);
            }
            enemy_data[i].tl.clear().removeFromScene();
            enemy_data.splice(i,1);
            return;
        }
    }
}

//アイテムの作成
function makeItem(){
    var pitem = new Sprite(sprite_size,sprite_size);
    item_data.push(pitem);
    pitem.image = game.assets['img/item.png'];
    pitem.frame = [0];
    pitem.scaleX = 0.75;
    pitem.scaleY = 0.75;
    var x = Math.floor(Math.random() * (game.width - sprite_size) );
    var y = horizon - Math.floor(Math.random() * sprite_size );
    pitem.moveTo(x,y);
    game.rootScene.addChild(pitem);
    pitem.tl.moveBy(0,0,100).removeFromScene();
    if (game_flg) {
        setTimeout(makeItem, 5000 + Math.floor(Math.random() * 10) * 1000);
    }
}

//アイテムGETのチェック
function checkItem(){
    for( var i = 0;  i < item_data.length; i++){
        //Spriteオブジェクトのwithinメソッドで衝突判定
        if( player.within(item_data[i]), 100){
            item_data[i].tl.clear().removeFromScene();
            update_core(300);
            effect.x = item_data[i].x;
            effect.y = item_data[i].y;
            item_data.splice(i,1);
            effect.tl.clear().show().fadeOut(20).hide();
        }
    }
}

//スコアの更新
function update_core(n){
    score_point += n;
    score_point = score_point < 0 ? 0 : score_point;
    score.text = 'SCORE: ' + score_point;
}

//ゲームの終了
function gameEnd(event){
    game_flg = false;
    game.stop();
    var msg = new Label('GAME OVER');
    msg.color = 'red';
    msg.font = 'bold 96pt Times';
    msg.width = 800;
    msg.moveTo(50, 50);
    game.rootScene.addChild(msg);
    
    //リンク生成
    var dv = document.createElement('div');
    dv.style.position = 'absolute';
    dv.style.width = '100%';
    dv.style.height = '100%';
    dv.onclick = function(){
        window.location.href = "index.html";
    };
    document.body.appendChild(dv);    
}
