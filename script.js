let URL = 'https://rickandmortyapi.com/api/character'
let path = './data/data.json'
// let fs = require('fs')
// let axios = require('axios')
let errorCheck = (err) => err ? console.log(err) : console.log('Data written')
// let letData = require('./data/data.json')
import importData from './data.js'

// console.log(importData)

// axios.get(URL)
//     // .then(res => res.data.json())
//     .then(res => {
//         console.log(res)

//         let { results, info } = res.data
//         let stringifiedData = JSON.stringify(results)
//         // let results = res.results
//         // let info = res.info
//         // let { count, pages, next, prev } = info
//         console.log(stringifiedData)

//         fs.writeFile(path, stringifiedData, errorCheck)

//     })
//     .catch(err => console.log(err))

// console.log(letData)
// console.log(importData)