// @flow
console.log('boom')

let quoteItem = [] 

let getData = fetch('http://loremricksum.com/api/?paragraphs=4&quotes=3')
      .then(response => response.json())
      .then(data => {
        return data
})

let stuff = () => {
  return new Promise((resolve,reject) =>{
    resolve(getData);
  })
}

stuff().then( (data) =>{
   console.log(data)
   AddToDom(data)
})
.catch(function(error) {
  console.log('oh no', error)
})



let root = document.getElementsByClassName('main-container')
console.log(root)

const AddToDom = (quoteArray:Array<string>) => {
  let root = document.getElementsByClassName('main-container')

  console.log(quoteArray)
  quoteArray.map( el => { 
    console.log(el) 
    return el
  })
}

