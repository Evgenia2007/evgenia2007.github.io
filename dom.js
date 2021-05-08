// console.dir(document)
// console.log(document.head)
// document.title = 'New Title'
// console.log(document.title)
// document.all[8].textContent = 'NEW NAVBAR'
// let main = document.getElementById('main')
// main.innerHTML = 'NEW'
let navbar = document.getElementById('navbar')
navbar.style.border = '5px solid blue'
let main = document.getElementById('main')
main.style.backgroundColor = ' turquoise '

let items = document.getElementsByClassName('list-group-item')
// console.log(items)
items[1].textContent = 'NEW COTENER'
items[1] = document.getElementsByClassName('list-group-item')
items[1].style.backgroundColor = 'yellow'
items[1].style.color = 'red'
items[1].style.fontWeight = 'bold'
// for (let el in items) { 
//     items[el].textContent = el
//     items[el].style.color = 'red';
//     items[el].style.backgroundColor = 'yellow';
// }
let header = document.querySelector('#navbar')
header.style.borderBottom = 'solid 5px yellow'
let input = document.querySelector('input')
input.value = 'Hellow cotener'
let titles = document.querySelectorAll('.h1')
console.log(titles)

let odd = document.querySelectorAll('li:nth-child(odd')
let even = document.querySelectorAll('li:nth-child(even)')
for (let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'blue';
    even[i].style.backgroundColor = 'yellow';
}
let newDiv = document.createElement('div')
// console.log(newDiv)
newDiv.className = 'container'
// console.log(newDiv)
let text = document.createTextNode('Hellow cotener')
newDiv.append(text)
console.log(newDiv)
let itemsContainer = document.querySelector('#items');
let firstItem = document.getElementsByTagName('li')[0]
itemsContainer.insertBefore(newDiv, firstItem)
function buttonClick() {
    console.log('Hellow cotener!')
}
let button = document.querySelector('#button');
button.addEventListener('click', buttonClick)
navbar = document.querySelector('#navbar a');
function buttonClick() {
    navbar.textContent = 'Did you push the button?'
}
let output = document.querySelector('#output');
let box = document.querySelector('#box');
box.addEventListener('mousemove', runEvent);

function runEvent(event) {
    output.innerHTML = '<h3>MouseX' + event.offsetX + '</h3>' + '<h3>MouseY' + event.offsetY + '</h3>';
    box.style.backgroundColor = 'rgb(' + event.offsetX + ',' + event.offsetY + ',40)';
    output.innerHTML = '<h4>' + event.target.value + '</h4>';
}
 input = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
input.addEventListener('keydown', runEvent);
form = document.querySelector('form');
items = document.querySelector('#items');
form.addEventListener('submit', addItem);
function addItem(event) {
    event.preventDefault();
    input = document.querySelector('input[type="text"]').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input));
    li.className = 'list-group-item';
    items.appendChild(li);


}
