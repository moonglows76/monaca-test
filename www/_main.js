// This is a JavaScript file
// document.write('<p>これは、JavaScriptのサンプルです。</p>');

// var x = 123;
// var y = 654;
// var z = 987;
// var kotae = (x + y + z) / 3;
// document.write('<p>答え：' + kotae + '</p>');

// var x = '1';
// var y = 2;
// document.write(x + y);

// var x = '1';
// x = parseInt(x);
// var y = 2;
// document.write(x + y);

// var num = 20001;
// var res;
// 
// if ( num % 2 >= 0 ) {
//     res = '偶数';
// } else {
//     res = '奇数';    
// }
// document.write('<p>num % 2 は' + (num % 2) + '</p>');
// document.write(num + 'は' + res + 'です。');

// var x = 3;
// if(x == true) {
//     document.write(x);
// }else {
//     document.write('false');
// }

// var x = 1976;
// var y = (x - 4) % 12;
// var eto = '';

// switch(y) {
//     case 0:
//         eto = '子';
//         break;
//     case 1:
//         eto = '丑'; break;
//     case 2:
//         eto = '寅'; break;
//     case 3:
//         eto = '卯'; break;
//     case 4:
//         eto = '辰'; break;
//     case 5:
//         eto = '巳'; break;
//     case 6:
//         eto = '午'; break;
//     case 7:
//         eto = '未'; break;
//     case 8:
//         eto = '申'; break;
//     case 9:
//         eto = '酉'; break;
//     case 10:
//         eto = '戌'; break;
//     case 11:
//         eto = '亥'; break;
// 
// }
// 
// document.write(x + '年生まれのあなたは' + eto + '生まれです。');

// var x = 10;
// var str = '0';
// var kotae = 0;
// // for(カウンターの初期設定;
// //      条件;
// //      カウンターの処理) { 処理 }
// for(var i = 1; i <= x; i++){
//     str += ' + ' + i;
//     kotae += i;
//     document.write('<p>' + str + ' = ' + kotae + '</p>');
// }

var x = 12340;
// var n = 1;
// document.write('<p>'+ x + 'の素因数分解</p>');
// document.write('<ul>');
// // while( 条件 ) { 処理 }
// while(n < x){
//     n++; //n++ -> n = n + 1; 最初に足し算するのでn=2が本当のスタート
//     //割り切れたらli要素を追加
//     if( x % n == 0 ) { // 12340 / 2 をした余りは0なので入る
//         //割り切れたときの割る数を表示
//         document.write('<li>' + n + '</li>');
//         //割った結果をxに入れる
//         x /= n; //x /= n -> x = x / n;
//         //割る数を元に戻す
//         n = 1;
//     }
// }
// document.write('</ul>');

// var x = 10;
// var str = '0';
// var kotae = 0;
// var i = 1;
// while(i <= x){
//     str += ' + ' + i;
//     kotae += i;
//     document.write('<p>' + str + ' = ' + kotae + '</p>');
//     i++;
// }

// for(var i = 1; i < 10; i++){
//     if( i % 2 == 0 ) continue;
//     document.write('[' + i + ']');
// }

// var data = new Array('one','two','three');
// var song = '';
// for (num in data){
//     song += '<p>' + data[num] + ' little,</p>';
// }
// song += 'Indian.'
// document.write(song);

// var arr = [1,2,3,4,5,6,7,8,9];
// var ans = '';
// for(val1 in arr){
//     ans = '';
//     for(val2 in arr){
//         ans += (arr[val1] * arr[val2]) + '\t';
//     }
//     document.write('<p>' + ans + '</p>');
// }
// for(var i = 0; i < 9; i++){
//     ans = '';
//     for(var j = 0; j < 9; j++){
//         ans += (arr[i] * arr[j]) + '\t';
//     }
//     document.write('<p>' + ans + '</p>');
// }

// var arr = {
//     // 0: 'dddd@exmple.com',
//     '太郎': 'aaaa@exmaple.com',
//     '花子': 'bbbb@exmaple.com',
//     'つやの': 'cccc@exmaple.com'
// };
// arr['太郎'] = 'abcd';
// 
// document.write('<ul>');
// // for(name in arr){
// //     document.write('<li>' + name + ' ( ' + arr[name] + ' )</li>');
// // }
// for(var i = 0; i < 3; i++){
//     document.write('<li>' + arr[i] + '</li>');
// }
// document.write('</ul>');

// hello( 'SUNAO' );
// 
// function hello(msg) {
//   //Hello! Fuminori.
//   document.write( 'Hello! ' + msg + '.' );
// }



// var hello = function(msg, num) {
//     str = '';
//     for (var i = 0; i < num; i++) {
//         str += msg + ' ';
//     }
//     document.write( '<p>' + str + '</p>' );
// };
// 
// hello( 'Hello!', 3 );


// var taxObj = new Array();
// 
// taxObj.tax = 0.05;
// taxObj.price = 100;
// 
// taxObj.calc = function(){
//   return taxObj.price * (1.0 + taxObj.tax);
// };
// 
// taxObj.print = function(msg){
//   document.write('<p>税込価格：' + taxObj.calc() + '円</p>');  
// };
// 
// taxObj.tax = 0.08;
// taxObj.price = 12300;
// var res = taxObj.calc();
// taxObj.print(res);

function TaxObject(t,p){
    this.tax = t;
    this.price = p;
    
    this.calc = function(){
        return this.price * (1.0 + this.tax);
    };
    
    this.print = function(){
        document.write('<p>税込価格：' + this.calc() + '円</p>');  
    }
}

var obj = new TaxObject(0.08, 12300);
obj.print();


