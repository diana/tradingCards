const userName = document.querySelector('.user-page')
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/owners/${id}`)
    .then(handleRespone)
    .then(showOwnerInfo)

fetch(`http://localhost:3000/cards/`)
    .then(handleRespone)
    .then(filterCardByOwners)
    .then(showOwnersCards)

function showOwnerInfo(owner){
    const ownerName = document.createElement('h2')
    ownerName.innerText = owner.name
    userName.appendChild(ownerName)
}

function filterCardByOwners(cards){
    const ownerCards = cards.filter(card => card.owner.id == id)
    return ownerCards
}

function showOwnersCards(cards){
    return cards.map(createCardList)   
}

function createCardList(card){
    const cardName = document.createElement('ol')
    cardName.innerHTML = `<a href=show.html?id=${card.id}>${card.name}</a>`
    userName.appendChild(cardName)
}
    // const ownerCardName = document.createElement('ol')
    // ownerCardName.innerHTML = `<a href=show.html?id=${cards.id}>${owner.cards.name}</a>`
    // userName.append(ownerName, ownerCardName)    


function handleRespone(response){
    return response.json()
}
