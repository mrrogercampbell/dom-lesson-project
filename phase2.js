let characterData = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
}

const body = document.querySelector('body')

// Phase 2
let createH1 = document.createElement('h1')
let createPara = document.createElement('p')
let createImg = document.createElement('img')
let { image, name, species, status } = characterData

createH1.innerHTML = name
createPara.innerHTML = `${name} is a ${species} who is ${status}`
createImg.setAttribute('src', image)

body.appendChild(createImg)
body.appendChild(createH1)
body.appendChild(createPara)