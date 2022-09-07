// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.png/opti.png';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//      // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);
//     return element;
//   }
  
//   document.body.appendChild(component());


let button = document.getElementById("dark-mode");
let body = document.querySelector("body");
console.log(button);

function darkmode() {
    body.classList.toggle("bg-black");
    body.classList.toggle("text-white");

}
button.addEventListener("click", darkmode)