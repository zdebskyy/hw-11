import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

let timerId = null;
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

startBtn.addEventListener('click', onBodyColorChange)
stopBtn.addEventListener('click', onBodyColorStop)


function onBodyColorChange  () {
  timerId = setInterval(colorMix, 1000)  
    startBtn.setAttribute('disabled', 'disabled')
}

function colorMix () {
    const colorNumber = randomIntegerFromInterval(0, colors.length);
    bodyRef.style.backgroundColor = colors[colorNumber];
}

function onBodyColorStop (){
    clearInterval(timerId)
    startBtn.removeAttribute('disabled', 'disabled')
}
