let game = document.querySelector('.game')
let dino = document.querySelector('.dino')
let cactus = document.querySelector('.cactus')



function jumpFunction() {
    dino.classList.add('jump')
    setTimeout(() => {
        dino.classList.remove('jump')
    }, 600)


}

document.body.addEventListener('click', function () {

    jumpFunction()

})


window.addEventListener('keydown', function (negr) {
    if (negr.code == 'Space' || negr.code == 'ArrowUp') {
        jumpFunction()
    }
    else if (negr.code == 'KeyW') {
        alert('Придурок, на пробіл або на стрілочку')
    }
})


let pScore = document.querySelector('.p-score')
let pRecord = document.querySelector('.p-record')
let t = 0;
let time = 0;
let record = 0;

if (localStorage.getItem('dino') != null){
    record = localStorage.getItem('dino');
    pRecord.innerHTML = record
}

function finish() {
    t++;
    if (t % 50 == 0) {
        time++
    }
    pScore.innerHTML = time;
    let x = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    let y = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));


    if (x > 100 && x < 130 && y > 110) {
        alert('Finish kekeshke!')
        if (time > record) {
            record = time;
            pRecord.innerHTML = record;
            localStorage.setItem('dino', record)
        }

        t = 0
        time = 0

    }



}




setInterval(() => {
    finish()
}, 10);