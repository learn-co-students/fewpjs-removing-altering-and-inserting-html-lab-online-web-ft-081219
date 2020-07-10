// Write your code here!

//document.querySelector("main#main").remove();
main.remove();

let newHeader = document.createElement('h1'); //create element
document.body.appendChild(newHeader); //append to body

newHeader.id = 'victory';

const name = "Emi"
newHeader.innerHTML = `${name} is the champion!`