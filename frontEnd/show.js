const cardInfo = document.querySelector('.card-info')
const article = document.querySelector('.card-image')
const form = document.querySelector('#edit-owner') 
const dropDown = document.querySelector('#drop-down')
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/cards/${id}`)
    .then(handleRespone)
    .then(showCardInfo)

function handleRespone(response){
return response.json()
}

function showCardInfo(card){
    console.log(card)
        const cardName = document.createElement('h2')
        const cardField = document.createElement('h3')
        const cardOwner = document.createElement('h4')
        const cardDescription = document.createElement('h5')
        const cardImage = document.createElement('img')
        
        cardName.innerText = card.name
        cardField.innerText = `Field of Study: ${card.revered_for}`
        cardOwner.innerText = `Owner: ${card.owner.name}`
        cardImage.src = card.image_url
        cardDescription.innerText = card.description
        
        cardInfo.append(cardName, cardField, cardOwner)
        article.append(cardImage, cardDescription)
    }
    
    fetch('http://localhost:3000/owners')
    .then(handleRespone)
    .then(owners => owners.map(owner => {
        const cardOwnerOption = document.createElement('option')

        cardOwnerOption.innerText = owner.name
        cardOwnerOption.value = owner.id
        
        dropDown.append(cardOwnerOption)
    }))

form.addEventListener('submit', function(event) {
    event.preventDefault()
    fetch(`http://localhost:3000/cards/${id}`, 
    {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            owner_id: dropDown.value
        })
    })
})