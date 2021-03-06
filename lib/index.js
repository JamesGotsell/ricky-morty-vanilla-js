'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

window.onload = function (e) {

  var quoteItem = [];

  var getData = fetch('http://loremricksum.com/api/?paragraphs=4&quotes=3').then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });

  var stuff = function stuff() {
    return new Promise(function (resolve, reject) {
      resolve(getData);
    });
  };

  var addQuoteToSessionStorage = function addQuoteToSessionStorage(i) {
    // looks at btn with class of i 
    var refBtn = document.querySelector('.text-' + (i + 1));
    // gets the data within the span 
    var quoteData = refBtn.innerHTML;
    // creates an id to be ref later 
    var id = i + 1;
    // gets length of localStorage obj 
    var sessionStorageI = sessionStorage.length;
    // if length zero add to to sessionStorage 
    if (sessionStorage.length === 0) {
      sessionStorage.setItem(id, quoteData);
    } else {
      // checks length - loops over length and compares key to id 
      var _len = sessionStorage.length;
      for (var i = 0, _len; i < _len; ++i) {
        console.log(id);
        var key = sessionStorage.key(i);
        if (id == key) {
          // if the same increment id by one then add to sessionStorage 
          id = sessionStorageI + 1;
          sessionStorage.setItem(id, quoteData);
        }
      }
    }
  };

  stuff().then(function (data) {
    console.log(data);
    var arr = [].concat(_toConsumableArray(data.data));
    AddToDom(arr);
  }).catch(function (error) {
    console.log('oh no', error);
  });

  var AddToDom = function AddToDom(arr) {
    /// data from api added to the dom 
    console.log(arr);
    var root = document.getElementsByClassName('main-container');
    arr.map(function (el, i) {
      console.log(i);

      var li = document.createElement('li');

      var span = document.createElement('span');

      span.appendChild(document.createTextNode(el));

      span.setAttribute('class', 'text-' + (i + 1));

      var div = document.createElement('div');

      var appendSpanToLi = div.appendChild(span);

      var button = document.createElement('button');

      button.appendChild(document.createTextNode('add quote to sessionStorage'));
      button.addEventListener('click', function () {
        addQuoteToSessionStorage(i);
        // getElement(i)
      }, false);
      div.appendChild(appendSpanToLi);

      div.appendChild(button);

      root[0].appendChild(div);
    });
  };
};