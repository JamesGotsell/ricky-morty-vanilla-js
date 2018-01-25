'use strict';

console.log('boom');

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

stuff().then(function (data) {
  console.log(data);
  AddToDom(data);
}).catch(function (error) {
  console.log('oh no', error);
});

var root = document.getElementsByClassName('main-container');
console.log(root);

var AddToDom = function AddToDom(quoteArray) {
  var root = document.getElementsByClassName('main-container');

  console.log(quoteArray);
  quoteArray.map(function (el) {
    console.log(el);
    return el;
  });
};