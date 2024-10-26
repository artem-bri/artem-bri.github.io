let bird, pole, maxLeft, maxTop, rezLeft, rezTop;
pole = document.querySelector('.game')
bird = document.querySelector('.bird')
function changePosition() {
    maxLeft = pole.clientWidth - bird.offsetWidth;
    maxTop = pole.clientHeight - bird.offsetHeight;

    rezLeft = maxLeft * Math.random() + 'px';
    rezTop = maxTop * Math.random() + 'px'

    bird.style.left = rezLeft;
    bird.style.top = rezTop;
}
let timer = setInterval(() => {
    changePosition()
}, 2000);

let count = document.querySelector('.count')
let point = 0

bird.onclick = function () {
    point++
    count.innerHTML = point
}