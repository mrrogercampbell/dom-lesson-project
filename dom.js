const body = document.querySelector('body')

//Phase 1
//Set 1: Get the persons name and change it
let nameID = document.getElementById('name')
let name = document.querySelector('#name')
nameID.innerHTML = 'John Smith'


// console.log(nameID)
let rogersClass = document.getElementsByClassName('rogers-data')
console.log(rogersClass)
rogersClass[2].innerHTML = 'Did it work'

// let image = document.getElementsByTagName('img')
// console.log(image)
// console.log(image[0])

let names = document.querySelectorAll('.rogers-data')

console.log(name)
console.log(names[2])

// for (let i = 0; i < rogersClass.length; i++) {
    // console.log(rogersClass[i])
// }

// Step 2: Get the persons sentence and rewrite it
// Step 3: Get the persons image and chance it