let openMonday = document.getElementById('open-monday')
let container = document.getElementById('container')
let monday = document.getElementById('monday')
openMonday.addEventListener('click', ()=> {
    container.classList.add('display-none')
    monday.classList.remove('display-none')
} )






let btnAdd = document.getElementById('add-btn')
let input = document.getElementById('input')
let ul = document.getElementById('ul')
btnAdd.addEventListener('click', ()=> {
    let li = document.createElement('li')
    let span = document.createElement('span')
    
    span.textContent = 'X'
   
    li.textContent = input.value
    
    li.appendChild(span)
    ul.appendChild(li)
    
    input.value = " "
    //focus and enter

})