// @flow
console.log('boom')

let root = document.getElementsByClassName('main-container')
console.log(root)

fetch('http://loremricksum.com/api/?paragraphs=4&quotes=3')
      .then(response => response.json())
      .then(data => {
        let quotes = data
        quotes.data.map(( quote , i ) => {
            console.log(quote)
           // within this 
        })
        
      })

