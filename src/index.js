
window.onload = function(e){ 

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

let addQuoteToLocalStorage = () => {
  console.log('boom')
  console.log(e.target)

}

stuff().then( (data) =>{
   console.log(data)
   let arr = [...data.data]
   AddToDom(arr)
})
.catch(function(error) {
  console.log('oh no', error)
})



const AddToDom = (arr:Array<string>) => {

  console.log(arr)
  let root = document.getElementsByClassName('main-container')
  arr.map( (el , i ) => { 
    console.log(i) 
    
    let li = document.createElement('li');
    
    let span =  document.createElement('span');
    
    span.appendChild(document.createTextNode(el));
    
    span.setAttribute('class', `text-${i+1}`)
    
    let div = document.createElement('div') 
    
    let appendSpanToLi = div.appendChild(span);

    let button = document.createElement('button')

    button.addEventListener('click', addQuoteToLocalStorage)
    
    button.appendChild(document.createTextNode('add quote to localstorage'));
    
    div.appendChild(appendSpanToLi) 
    
    div.appendChild(button)  
    
    root[0].appendChild(div)

  })
}
}
