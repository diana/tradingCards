const cardBody = document.querySelector('.cards')

fetch('http://localhost:3000/cards')
    .then(handleRespone)
    .then(showCardName)

function handleRespone(response){
    return response.json()
}

function showCardName(cards){
    cards.map(card => {
        cardName = document.createElement('h2')
        cardName.innerHTML = `<a href=show.html?id=${card.id}>${card.name}</a>`
        cardBody.appendChild(cardName)
    })
}