//画像情報のオブジェクトを格納した配列
const picArray = [
    {src: 'images/pic_1.jpg', title: 'picture 1'},
    {src: 'images/pic_2.jpg', title: 'picture 2'},
    {src: 'images/pic_3.jpg', title: 'picture 3'},
    {src: 'images/pic_4.jpg', title: 'picture 4'},
    {src: 'images/pic_5.jpg', title: 'picture 5'},
    {src: 'images/pic_6.jpg', title: 'picture 6'}
    ];
    
    
    //スライドショーが再生中かどうかを記録しておくためのグローバル変数
    let playingID = 0;
    let counter = 0;

    //写真を切り替える関数
    //関数名「changePicture」
    function changePicture() { 
        if (counter < picArray.length) {
            document.getElementById('pics').src = picArray[counter].src;
            document.getElementById('pic-title').innerHTML = picArray[counter].title;
            counter++;
        } else {
            document.getElementById('pics').src = picArray[0].src;
            document.getElementById('pic-title').innerHTML = picArray[0].title;
        counter = 0;
        }
    }

    // ボタンを押してスライドショーを再生・停止する関数
    //関数名「playSlidedeshow」

    function playSlidedeshow(){
        if(playingID == 0){
            playingID = setInterval(changePicture, 2000);
            document.getElementById('playButton').innerHTML = "STOP";
        } else {
            clearInterval(playingID);
            document.getElementById('playButton').innerHTML = "PLAY";
            playingID = 0;
        }
    }