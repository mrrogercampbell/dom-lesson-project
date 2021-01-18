import importData from './data.js'
const body = document.querySelector('body')

// Phase 3
importData.map(item => {
    let { image, name, species, status } = item

    let createH1 = document.createElement('h1')
    let createPara = document.createElement('p')
    let createImg = document.createElement('img')

    createH1.innerHTML = name
    createPara.innerHTML = `${name} is a ${species} who is ${status}`
    createImg.setAttribute('src', image)

    body.appendChild(createImg)
    body.appendChild(createH1)
    body.appendChild(createPara)

})