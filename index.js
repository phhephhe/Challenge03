let input = document.getElementById('input')
let ul = document.getElementById('ul')
let form = document.getElementById('form')


const todoList = [];



form.addEventListener('submit', (event)=> {
    // console.log(event.target.input.value);
    event.preventDefault()
    // TODO
    if(!input.value.trim()){
        alert('You must write something')
    }else{
    todoList.push({
        todo: input.value
    })
    updateHTML({todo: input.value})
}
})

function updateHTML(todo){
    createElement(todo)
}


function createElement(todo){
    
    let li = document.createElement('li')
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = 'photos/trash.png'
    img.classList.add('icon')
    img.addEventListener('click',()=> {
        li.remove()
    })
    let img2 = document.createElement('img')
    img2.src = 'photos/favicon.png'
    img2.classList.add('icon')
    img2.addEventListener('click',()=>{
        li.classList.add('done')
    })

    div.appendChild(img2)
    div.appendChild(img)

    li.textContent = todo.todo
    li.classList.add('li')

    li.appendChild(div)
   
    ul.appendChild(li)
    input.value = " "
    input.focus()
       
}




// calendar
const now = new Date();
const weekDay = new Date().toLocaleString(
  'default', {weekday: 'long'}
);

const withPmAm = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  
const weekDayName = document.getElementById('calendar')
weekDayName.style.color = 'red'
weekDayName.style.textShadow = '5px 5px 20px white'
weekDayName.innerHTML = weekDay + " " + withPmAm
