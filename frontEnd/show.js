const cardInfo = document.querySelector('.card-info')
const article = document.querySelector('.card-image')
const form = document.querySelector('#edit-owner') 
const ref = document.querySelector('#reference') 
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
    const cardDescription = document.createElement('label')
    const cardImage = document.createElement('img')
    const descriptionRef = document.createElement('p')
    
    cardName.innerText = card.name
    cardField.innerText = `Field of Study: ${card.revered_for}`
    cardOwner.innerHTML = `<a href=user-page.html?id=${card.owner.id}>Owner: ${card.owner.name}</a>`
    cardImage.src = card.image_url
    cardDescription.innerText = card.description
    descriptionRef.innerHTML = `<a href=${card.info_url}>[reference]</a`
    
    cardInfo.append(cardOwner, cardField, cardName)
    article.append(cardImage, cardDescription)
    ref.appendChild(descriptionRef)
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
    }).then(window.location = `http://localhost:3001/show.html?id=${id}`)
})