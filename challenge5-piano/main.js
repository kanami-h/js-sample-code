/*
* 全体に言えるヒント
* - for of は使用しなくてもOK
* 1つの関数が動作をエラーなくできることを確認してから次の関数や設定内容を書く → どこがエラーになっているのかを把握しやすくするため
*/


//playing と言うClass属性をDOMを使って追加する → まずここで、音源に関する関数を宣言
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return;


    //classList に add と remove のメソッドを用いる
    // 関数にしない & playSound関数内に含める
        // const keys の方が、.keyのクラス属性を持つキーボード全部が対象 = querySelectorAllを使用 だということがわかりやすい
        const keys = document.getElementsByClassName('key');// .keyというクラス属性にアクセスする & 関数の外に宣言する
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
        // ↑この2行を書き加える → 音源を「どのくらいの長さで鳴らすのか」ということを指定するために必要


    // .playingをremoveするのは、キーボードが押された時のCSS装飾設定に関する関数に含めるので、この関数は消しておくのがベター
    // 定数constで上記と合わせて2回soundを宣言しているので消す
}


function removePlay(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(`.key`);

keys.forEach(key => key.addEventListener('transitionend', removePlay));


window.addEventListener('keydown', playSound);








    // ↓ 音源を再生する内容なので、上の音源に関する関数内に書く
    // audio.currentTime = 0;
    // audio.play();
    //transitionend と keydown のイベントを使用する

/*
* 上記関数のヒント
* - 定数audioとkey（keyCodeはJSですでに用意されている言葉なのでkeyにする）を上記関数内で宣言する
* - 少し先の内容ですがレッスン6のif文を使用すると簡単にできる
* - スクリプトの一番最後に、window.addEventListener('keydown', 上記関数);という関数の呼び出し方を上記関数に限っては行う
*/

/* 上記関数のスクリプトの具体的なヒント
function playSound(e) {// eはイベント
    const audio = クエリで呼ぶ(`audio[data-key="${e.keyCode}"]`); // ここでJSで用意されているkeyCodeにアクセス
    const key = クエリで呼ぶ(`.key[data-key="${e.keyCode}"]`); // 上と同様。
    if (!audio) return; 音が設定されていないキーボードにはイベントを発生させない設定。「!」は反転の意味で「もし音源のないキーが押されたらイベントは発動しない」ということ

    // ここでclassListでkeyに.playingを追加。
    audio.currentTime = 0; 音を流す時間設定。
    audio.play(); // 音源を再生
}
*/

//data属性を使用して、特定のキーを押すためのkeyCodeを取得する
//const kay = document.querySelectorAll('[data-action=""]');// セミコロン抜け & 定数名は上記のように key でOK
// データ属性の呼び出しは、`.key[data-key="${e.keyCode}"]` 。 & 音源に関する上記関数内にここは移動
