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

  var addQuoteToLocalStorage = function addQuoteToLocalStorage(event) {
    console.log('boom');
    console.log(event);
    var targetElement = event.target || event.srcElement;
    console.log(targetElement);
    // refencing the window - document 
    // var itemKey = el.previousSibling;
    // console.log(itemKey)
    // localStorage.setItem('quote', JSON.stringify())
  };

  stuff().then(function (data) {
    console.log(data);
    var arr = [].concat(_toConsumableArray(data.data));
    AddToDom(arr);
  }).catch(function (error) {
    console.log('oh no', error);
  });

  var AddToDom = function AddToDom(arr) {

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

      button.addEventListener('click', addQuoteToLocalStorage(event));

      button.appendChild(document.createTextNode('add quote to localstorage'));

      div.appendChild(appendSpanToLi);

      div.appendChild(button);

      root[0].appendChild(div);
    });
  };
};