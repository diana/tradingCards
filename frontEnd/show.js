const cardInfo = document.querySelector('.card-info')
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
        const cardOwner = document.createElement('h4')
        const cardDescription = document.createElement('h5')
        const cardImage = document.createElement('img')
        const article = document.createElement('article')
        cardName.innerText = card.name
        cardOwner.innerText = `Owner: ${card.owner.name}`
        cardImage.src = card.image_url
        cardDescription.innerText = card.description
        cardInfo.append(cardName, cardOwner, article)
        article.append(cardImage, cardDescription)
}