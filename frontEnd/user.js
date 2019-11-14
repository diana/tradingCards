const userName = document.querySelector('.users')

fetch(`http://localhost:3000/owners`)
    .then(handleRespone)
    .then(showOwners)



function handleRespone(response){
    return response.json()
}

function showOwners(owners){
    return owners.map(owner => {
        const ownerName = document.createElement('label')

        ownerName.innerText = `${owner.name}`

        userName.appendChild(ownerName)

        ownerName.addEventListener('click', function(){
            window.location = `user-page.html?id=${owner.id}`
        })
    })
}