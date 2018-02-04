
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

let addQuoteToSessionStorage = (i) => {
  // looks at btn with class of i 
  let refBtn = document.querySelector(`.text-${i+1}`)
  // gets the data within the span 
  let quoteData = refBtn.innerHTML;
  // creates an id to be ref later 
  let id = i+1
  // gets length of localStorage obj 
  let sessionStorageI = sessionStorage.length;
 // if length zero add to to sessionStorage 
  if(sessionStorage.length === 0){
    sessionStorage.setItem(id, quoteData)
  }
  else {
    // checks length - loops over length and compares key to id 
     let len = sessionStorage.length 
    for ( var i = 0, len; i < len; ++i){
        console.log(id)
        let key = sessionStorage.key(i)
        if(id == key){
          // if the same increment id by one then add to sessionStorage 
          id = sessionStorageI+1
          sessionStorage.setItem(id, quoteData)
        }
   }
  } 
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
 /// data from api added to the dom 
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

    
    
    button.appendChild(document.createTextNode('add quote to sessionStorage'));
    button.addEventListener('click', () => { 
               addQuoteToSessionStorage(i)
              // getElement(i)
            }, false)
    div.appendChild(appendSpanToLi) 
    
    div.appendChild(button)  
    
    root[0].appendChild(div)

  })
}
}
