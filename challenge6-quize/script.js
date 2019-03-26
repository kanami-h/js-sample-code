//合計スコア用の変数
let score = 0;


function showScore(){
//スコア表示の処理をここに記述
    if (score === 3) {
        document.getElementById('score-message').innerHTML= score + '　素晴らしい';// これをif文の中にそれぞれ入れると、ブラウザ = HTMLに表示されます
    } else if(score === 2) {
        document.getElementById('score-message').innerHTML= score + '　まあまあ';
    } else if(score === 1) {
        document.getElementById('score-message').innerHTML= score + '　おしい！';
    } else {
        document.getElementById('score-message').innerHTML= score + '　残念！';
    }
}

/**************
1問目の正解はBのラバト
2問目の正解はAのバイカル湖
3問目の正解はCのレンブラント
**************/

function answerQuiz1(){
//問題1の処理をここに記述
    const quiz_1 = document.getElementById('quiz-1');//どこをみればいいか指定
                 
    switch(quiz_1.answer.value) {// 「どこの」a, b, cのどれが選択されたかという値を取得するには？ヒント：メンバーアクセス演算子を使います
        case 'a':
            console.log(`1問目の${quiz_1.answer.value}を選択しました`);
            console.log('不正解です');
            break;
        case 'b':
            score ++;
            console.log(`1問目の${quiz_1.answer.value}を選択しました`);
            console.log('正解です');
            break;
        case 'c':
            console.log(`1問目の${quiz_1.answer.value}を選択しました`);
            console.log('不正解です');
            break;
        // 初期設定 = 回答し忘れの設定も忘れずに！記入し忘れがあればalertで「1問目を記入してください」と表示させます
        default:
        alert('一問目を記入してください');
    }
    console.log(`現在のトータルスコア${score}`);// switch文の外に書く = 不正解の時にも正解数の表示は必要だから

}



function answerQuiz2(){
//問題2の処理をここに記述
const quiz_2 = document.getElementById('quiz-2');//どこをみればいいか指定
                 
    switch(quiz_2.answer.value) {// 「どこの」a, b, cのどれが選択されたかという値を取得するには？ヒント：メンバーアクセス演算子を使います
        case 'a':
            score ++;
            console.log(`2問目の${quiz_2.answer.value}を選択しました`);
            console.log('正解です');
            break;
        case 'b':
            console.log(`2問目の${quiz_2.answer.value}を選択しました`);
            console.log('不正解です');
            break;
        case 'c':
            console.log(`2問目の${quiz_2.answer.value}を選択しました`);
            console.log('不正解です');
            break;
        // 初期設定 = 回答し忘れの設定も忘れずに！記入し忘れがあればalertで「1問目を記入してください」と表示させます
        default:
        alert('二問目を記入してください');
    }
    console.log(`現在のトータルスコア${score}`);
}

function answerQuiz3(){
//問題3の処理をここに記述
const quiz_3 = document.getElementById('quiz-3');//どこをみればいいか指定
                 
    switch(quiz_3.answer.value) {// 「どこの」a, b, cのどれが選択されたかという値を取得するには？ヒント：メンバーアクセス演算子を使います
        case 'a':
            console.log(`3問目の${quiz_3.answer.value}を選択しました`);
            console.log('不正解です');
            break;
        case 'b':
            console.log(`3問目の${quiz_3.answer.value}を選択しました`);
            console.log('不正解です');
            break;
        case 'c':
            score ++;
            console.log(`3問目の${quiz_3.answer.value}を選択しました`);
            console.log('正解です');
            break;
        default:
        alert('三問目を記入してください');
    }
    console.log(`現在のトータルスコア${score}`);
}

