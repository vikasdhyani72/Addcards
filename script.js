let container = document.querySelector('.container')
let card = document.querySelector('.card')

let i = 1

card.addEventListener('click', () => {
  const newCard = card.cloneNode(true)
  newCard.innerHTML = i++
  container.appendChild(newCard)
})
