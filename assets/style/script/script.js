const inp = document.querySelector('.guess__inp')
const btn = document.querySelector('.guess__btn')
const previous = document.querySelector('.guess__previous')
const answer = document.querySelector('.guess__answer')
const restartBtn = document.querySelector('.guess__restart')

let attempt = 4

const randomNumber = Math.round(Math.random() * 100)
console.log(randomNumber)

btn.addEventListener('click', () => {
  if (attempt) {
    if (randomNumber === +inp.value) {
      answer.innerText = "Вы победили! https://aliaypov1.github.io/ms/"
      restartBtn.style.display = 'block'
      btn.disabled = true
    } else if (randomNumber > +inp.value) {
      answer.innerText = "Загаданное число больше"
    } else {
      answer.innerText = "Загаданное число меньше"
    }
    previous.innerText += ` ${inp.value}`
    attempt--
  } else {
    answer.innerText = `Game over! Загаданное число - ${randomNumber}`
    restartBtn.style.display = 'block'
    btn.disabled = true
  }
})

restartBtn.addEventListener('click', () => {
  window.location.reload();
})

const h1 = document.querySelector('h1')

const colors = ['red', 'blue', 'green']
let i = 1

setInterval(() => {
  h1.style.background = colors[i++]
  if (i === 3) {
    i = 0
  }
}, 500)

const inps = document.querySelector('input')
const color = ['green', 'blue', 'red']
let a = 1

setInterval(() => {
  inps.style.color = colors[i++]
  if (i === 3) {
    i = 0
  }
}, 500)