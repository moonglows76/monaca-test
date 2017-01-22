//enchant.js初期化
enchant();

//ページの中身が読み込まれたら実行
window.onload = function(){
    //enchant.jsのGameオブジェクトを作成
    var game = new Game(window.innerWidth, window.innerHeight);
    //画像の先読み
    game.preload('img/chara1.png');
    //1秒あたりの画像の表示切り替え数
    // game.fps = 10;
    //Gameオブジェクトが読み込まれたら実行
    game.onload = function(){
        //ここでは基本的に初期化を実行
        
        //キャラクターを1つゲームのシーンに置く
        var char1 = new Sprite(32,32);
        char1.image = game.assets['img/chara1.png'];
        // char1.frame = [0,1,0,2];
        char1.x = 50;
        char1.y = 50;
        game.rootScene.backgroundColor = '#eeeeff';
        game.rootScene.addChild(char1);
    };
    
    //ゲームを開始
    game.start();
};