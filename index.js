// Write your code here!

//document.querySelector("main#main").remove();
main.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.id = 'victory';

const name = "Emi"
newHeader.innerHTML = `${name} is the champion!`