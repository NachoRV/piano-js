// const btnDO = document.getElementById('btnDO');

// btnDO.addEventListener('click', function(){
//     const audio = document.getElementById('audioDO');
//     audio.pause();
//     audio.currentTime = 0;
//     audio.play();
// })

// const btnRE = document.getElementById('btnRE');

// btnRE.addEventListener('click', function(){
//     const audio = document.getElementById('audioRE');
//     audio.pause();
//     audio.currentTime = 0;
//     audio.play();
// })

const btns = document.querySelectorAll('button');

btns.forEach( btn => {
    btn.addEventListener('click', playSound);
})

function playSound(event) {
    const nota = event.target.dataset.nota
    const audio = document.getElementById('audio' + nota);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    console.log(key)
    const btn = document.querySelector(`button[data-key="${key}"]`)
    if(btn) btn.click()
})