// let weekday = document.querySelectorAll('.week-day')
// let container = document.getElementById('container')
// let day = document.getElementById('day')
// let openMonday = document.getElementById('open-monday')
// let openTuesday = document.getElementById('open-tuesday')
// let openWednesday = document.getElementById('open-wednesday')
// let openThursday = document.getElementById('open-thursday')
// let openFriday = document.getElementById('open-friday')
// let openSaturday = document.getElementById('open-saturday')
// let openSunday = document.getElementById('open-sunday')
// let openNotes = document.getElementById('open-notes')
// let dayTitle = document.getElementById('day-title')
// weekday.forEach(item => {
//     item.addEventListener('click', (event)=>{
//         container.classList.add('display-none')
//         day.classList.remove('display-none')
//         if(event.target === openMonday){   
//             dayTitle.innerHTML = 'Monday'
//         }else if(event.target === openTuesday){
//             dayTitle.innerHTML = 'Tuesday'
//         }else if(event.target === openWednesday){
//             dayTitle.innerHTML = 'Wednesday'
//         }
//         else if(event.target === openThursday){
//             dayTitle.innerHTML = 'Thursday'
//         }
//         else if(event.target === openFriday){
//             dayTitle.innerHTML = 'Friday'
//         }
//         else if(event.target === openSaturday){
//             dayTitle.innerHTML = 'Saturday'
//         }
//         else if(event.target === openSunday){
//             dayTitle.innerHTML = 'Sunday'
//         }
//         else if(event.target === openNotes){
//             dayTitle.innerHTML = 'Make notes'
//         }
//     })
// })










let btnAdd = document.getElementById('add-btn')
let input = document.getElementById('input')
let ul = document.getElementById('ul')
btnAdd.addEventListener('click', ()=> {
    let li = document.createElement('li')
    let div = document.createElement('div')
    
    div.textContent = 'X'
    div.classList.add('delete-icon')
    li.textContent = input.value
    li.classList.add('li')
    li.appendChild(div)
    ul.appendChild(li)
   
    
    input.value = " "
    //focus and enter

})