function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return;
        const keys = document.getElementsByClassName('key');
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
}


function removePlay(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(`.key`);

keys.forEach(key => key.addEventListener('transitionend', removePlay));


window.addEventListener('keydown', playSound);