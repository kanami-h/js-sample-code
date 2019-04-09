let score = 0;


function showScore(){
    if (score === 3) {
        document.getElementById('score-message').innerHTML= score + '　Wonderful!';//素晴らしい
    } else if(score === 2) {
        document.getElementById('score-message').innerHTML= score + '　Great!';//まぁまぁ
    } else if(score === 1) {
        document.getElementById('score-message').innerHTML= score + '　Close!';//惜しい
    } else {
        document.getElementById('score-message').innerHTML= score + '　Too bad...';//残念
    }
}

function answerQuiz1(){
    const quiz_1 = document.getElementById('quiz-1');
                 
    switch(quiz_1.answer.value) {
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
        default:
        alert('一問目を記入してください');
    }
    console.log(`現在のトータルスコア${score}`);

}



function answerQuiz2(){
const quiz_2 = document.getElementById('quiz-2');
                 
    switch(quiz_2.answer.value) {
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
        default:
        alert('二問目を記入してください');
    }
    console.log(`現在のトータルスコア${score}`);
}

function answerQuiz3(){
const quiz_3 = document.getElementById('quiz-3');
                 
    switch(quiz_3.answer.value) {
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

