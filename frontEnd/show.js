const cardInfo = document.querySelector('.cardInfo')
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/cards/${id}`)
    .then(handleRespone)
    .then(showCardInfo)

function handleRespone(response){
return response.json()
}

function showCardInfo(card){
        const cardName = document.createElement('h2')
        const cardDescription = document.createElement('h5')
        cardName.innerText = card.name
        cardDescription.innerText = card.description
        cardInfo.append(cardName, cardDescription)
}