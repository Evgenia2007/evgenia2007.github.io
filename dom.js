// console.dir(document)
// console.log(document.head)
// document.title = 'New Title'
// console.log(document.title)
// document.all[8].textContent = 'NEW NAVBAR'
// let main = document.getElementById('main')
// main.innerHTML = 'NEW'
let navbar = document.getElementById('navbar')
navbar.style.border = '5px solid red'
let main = document.getElementById('main')
main.style.backgroundColor = ' turquoise '

let items = document.getElementsByClassName('list-group-item')
// console.log(items)
items[1].textContent = 'NEW CONTENT'
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
header.style.borderBottom = 'solid 5px green'
let input = document.querySelector('input')
input.value = 'Hellow world'
let titles = document.querySelectorAll('.h1')
console.log(titles)

let odd = document.querySelectorAll('li:nth-child(odd')
let even = document.querySelectorAll('li:nth-child(even)')
for (let i = 0; i < odd.length; i ++){
    odd[i].style.backgroundColor = 'blue';
    even[i].style.backgroundColor = 'yellow';
}