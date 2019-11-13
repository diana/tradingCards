const userName = document.querySelector('.users')

fetch(`http://localhost:3000/owners`)
    .then(handleRespone)
    .then(showOwners)



function handleRespone(response){
    return response.json()
}

function showOwners(owners){
    return owners.map(owner => {
        const ownerName = document.createElement('ol')
        ownerName.innerHTML = `<a href=user-page.html?id=${owner.id}>${owner.name}</a>`
        userName.appendChild(ownerName)
    })
}