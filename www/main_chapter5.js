//enchant.js初期化
enchant();

//ページの中身が読み込まれたら実行
window.onload = function(){
    //enchant.jsのGameオブジェクトを作成
    var game = new Game(window.innerWidth / 2, window.innerHeight / 2);
    //画像の先読み
    game.preload('img/chara1.png');
    //1秒あたりの画像の表示切り替え数
    game.fps = 10;
    //Gameオブジェクトが読み込まれたら実行
    game.onload = function(){
        //ここでは基本的に初期化を実行
        
        //キャラクターを1つゲームのシーンに置く
        var char1 = new Sprite(32,32);
        char1.image = game.assets['img/chara1.png'];
        char1.frame = [0,1,0,2];
        char1.x = 50;
        char1.y = 50;

        // var label = new Label('Hello!');
        // label.color = 'blue';
        // label.font = 'italic 42pt Times';
        // label.width = 500;
        // label.moveTo(10,50);
        // game.rootScene.addChild(label);

        // char1.addEventListener(enchant.Event.ENTER_FRAME, function(){
        //    char1.moveBy(1,0);
        //    if( char1.x > game.width ){
        //        char1.x = -32;
        //    }
        // });

        // char1.tl.moveBy(50,50,50);
        // char1.tl.moveBy(50,-50,50);
        // char1.tl.removeFromScene();

        game.rootScene.backgroundColor = '#eeeeff';
        game.rootScene.addChild(char1);

        game.rootScene.addEventListener(enchant.Event.TOUCH_START, function(event){
           char1.tl.clear();
           char1.tl.moveTo(event.x - 16, event.y - 16, 50);
        });

        // game.rootScene.addEventListener(enchant.Event.TOUCH_START, function(event){
        //     window.location.href = 'game1/index.html';
        // });

};
    
    //ゲームを開始
    game.start();
};