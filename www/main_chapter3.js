function doClick(){

    // var fstr = document.getElementById('text1').value;
    // var text = document.getElementById('area1').value;
    // while(true){
    //     var str = text.replace(fstr,'★');
    //     if( str === text) {
    //         break;
    //     }
    //     text = str;
    // }
    // document.getElementById('msg').innerHTML = text;

    // var date1 = new Date();
    // var str = document.getElementById('text1').value;
    // var date2 = new Date(str);
    // date1.setMilliseconds(0);
    // date1.setSeconds(0);
    // date1.setMinutes(0);
    // date1.setHours(0);
    // date2.setMilliseconds(0);
    // date2.setSeconds(0);
    // date2.setMinutes(0);
    // date2.setHours(0);
    // var time1 = date1.getTime();
    // var time2 = date2.getTime();
    // var result = (time2 - time1) / (60 * 60 * 24 * 1000);
    // document.getElementById('msg').textContent = result + '日間あります。';    

    // var date = new Date();
    // var n = document.getElementById('text1').value;
    // var time = date.getTime();
    // var result = time + (60 * 60 * 24 * 1000) * n;
    // var date2 = new Date(result);
    // document.getElementById('msg').textContent = date2.toLocaleDateString();

    var date = new Date();
    var obj = document.getElementById('msg');
    obj.textContent = date.toLocaleString();
}


// 
// var flg = false;
// function down(event){
//     flg = true;
//     setLoc(event);
// }
// function up(event){
//     flg = false;
//     setLoc(event);
// }
// function move(event){
//     if(flg){
//         setLoc(event);
//     }
// }
// function setLoc(event){
//     var obj = document.getElementById('msg').style;
//     obj.left = event.clientX - 50 + 'px';
//     obj.top = event.clientY - 50 + 'px';
// }


// function doClick() {
//     var frontVal = document.getElementById('front').value;
//     var backVal = document.getElementById('back').value;
//     var sizeVal = document.getElementById('size').value;
//     var styleObj = document.getElementById('msg').style;
//     console.log('frontVal: ' + frontVal);
//     styleObj.color = frontVal;
//     styleObj.backgroundColor = backVal;
//     styleObj.fontSize = sizeVal + 'pt';
// }

// var data = new Array();
// 
// function doChange(){
//     var sel = document.getElementById('select1').value;
//     var str = 'あなたは' + sel + 'ですね！';
//     document.getElementById('msg').innerHTML = str;
// }
// 
// function doclick(){
//     var str = '';
//     var opts = document.getElementsByTagName('option');
//     // for(opt in opts){
//     //     str += opt + ':' + opts[opt].value + '<br>';
//     // }
//     for(var i = 0; i<opts.length; i++){
//         if(opts[i].selected) {
//             str += opts[i].value + ',';
//         }
//     }
//     str = '使っているOS: ' + str;
//     document.getElementById('msg').innerHTML = str;
// 
//     // var check = document.getElementById('check1').checked;
//     // var str = 'チェック: ' + check;
//     // var rads = document.getElementsByName('radio1');
//     // for(var i = 0; i < rads.length; i++) {
//     //     str += '<br>ラジオボタン' + (i+1) + ':' + rads[i].checked;
//     // }
//     // document.getElementById('msg').innerHTML = str;
//  
//  // var val = document.getElementById('text1').value;
//     // data.push(val);
//     // var res = '<ol>';
//     // for(var i = 0; i < data.length; i++){
//     //     res += '<li>' + data[i] + '</li>';
//     // }
//     // res += '</ol>';
//     // var msg = document.getElementById('msg');
//     // msg.innerHTML = res;
//     // var text1 = document.getElementById('text1');
//     // var str = text1.value;
//     // var res = 'あなたは「' + str + '」と書きました。';
//     // var msg = document.getElementById('msg');
//     // msg.textContent = res;
// }