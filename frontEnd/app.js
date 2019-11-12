const cardBody = document.querySelector('.cards')
const dropDown = document.querySelector('#drop-down') 

fetch('http://localhost:3000/cards')
    .then(handleRespone)
    .then(showCardName)
    
fetch('http://localhost:3000/owners')
    .then(handleRespone)
    .then(owners => owners.map(owner => {
        const ownerOption = document.createElement('option')
        ownerOption.innerText = owner.name 
        ownerOption.value = owner.id 
        dropDown.appendChild(ownerOption)
    }))

function handleRespone(response){
    return response.json()
}

function showCardName(cards){
    cards.map(card => {
        cardDiv = document.createElement('div')
        cardName = document.createElement('h2')
        cardImage = document.createElement('img')
        cardDiv.innerHTML = `<a href=show.html?id=${card.id} class='fill-div'></a>`
        cardName.innerText = card.name
        cardImage.src = card.image_url
        cardBody.append(cardDiv)
        cardDiv.append(cardImage, cardName)
    })
}