/*   challange１   */
alert('You got 5 guesses. Guess 1 to 5');

let answer = 2;
let message = prompt('What do you guess?');
// Use for loop
// for (let i = 0; i < 5; i++) {
//     if(message == answer) {
//         alert('Good job! See what happens next :)');
//         break;
//     } else {
//         message = prompt('Ops! Maybe, another try?');
//     }
// }
/*   challange2   */
// Use while
let i = 0;

while (i < 5) {
    if(message != answer){
        message = prompt('Ops! Maybe, another try?');
    } else {
        alert('Good job! See what happens next :)');
        break;
    }
    
}