const userCards = document.querySelector('.user-page')
const userName = document.querySelector('.user-head')
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
    const div = document.createElement('div')
    const ownerName = document.createElement('h2')
    const deleteOwner = document.createElement('button')

    ownerName.innerText = `${owner.name}'s Cards:`
    deleteOwner.innerText = 'delete'
    deleteOwner.addEventListener('click', (event) => {
        console.log(owner.cards)
        if (owner.cards.length > 0){
            alert("You must trade your cards!")
        } else {
            div.remove()
            fetch(`http://localhost:3000/owners/${id}`, {
                method: 'DELETE'
            }).then(window.location = 'http://localhost:3001/user.html')
        }
    })
    
    userName.appendChild(div)
    div.append(ownerName, deleteOwner)
}

function filterCardByOwners(cards){
    const ownerCards = cards.filter(card => card.owner.id == id)
    return ownerCards
}

function showOwnersCards(cards){
    return cards.map(createCardList)   
}

function createCardList(card){
    const cardDiv = document.createElement('div')
    const cardName = document.createElement('label')
    const cardImage = document.createElement('img')

    cardName.innerText = card.name
    cardImage.src = card.image_url

    cardDiv.addEventListener('click', function(){
        window.location = `show.html?id=${card.id}`
    })

    userCards.append(cardDiv)
    cardDiv.append(cardImage, cardName)
}
    // const ownerCardName = document.createElement('ol')
    // ownerCardName.innerHTML = `<a href=show.html?id=${cards.id}>${owner.cards.name}</a>`
    // userName.append(ownerName, ownerCardName)    


function handleRespone(response){
    return response.json()
}
