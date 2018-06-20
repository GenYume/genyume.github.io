/* eslint-env browser */

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yinYang.svg') {
        myImage.setAttribute ('src','images/osismiaci.svg');
    } else {
        myImage.setAttribute ('src','images/yinYang.svg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'This is ' + myName + '\'s website.';
}

if(!localStorage.getItem('name')) {
  myHeading.textContent = 'This is Chris\' website.';
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This is ' + storedName + '\'s website.';
}

myButton.onclick = function() {
  setUserName();
}
