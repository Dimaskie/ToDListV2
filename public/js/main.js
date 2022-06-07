const btn = document.getElementById('pencil')

function newItem(){
    const container = document.getElementById('toDoListContainer')
    //toDoItem
    const toDoItem = document.createElement('div')
    toDoItem.classList.add('toDoItem')
    container.appendChild(toDoItem)

    //toDoText
    const toDoValue = document.getElementById('toDo').value;
    const newToDo = document.createElement('div')
    const newToDoText = document.createTextNode(toDoValue)
    

    newToDo.appendChild(newToDoText)
    newToDo.classList.add('toDoText')
    toDoItem.appendChild(newToDo)

    //toDoInteractions
    const toDoInteractions = document.createElement('div')
    toDoInteractions.classList.add('toDoInteractions')
    toDoItem.appendChild(toDoInteractions)

    const check = document.createElement('i')
    
    check.classList.add('check')
    check.classList.add('fa')
    check.classList.add('fa-check')
    toDoInteractions.appendChild(check)

    const trash = document.createElement('i')
    
    trash.classList.add('trash')
    trash.classList.add('fa')
    trash.classList.add('fa-trash')
    toDoInteractions.appendChild(trash)



    document.getElementById('form').reset();

    // console.log(newToDo)
}

btn.addEventListener('click',function(e){
    // console.log(this)
    if(document.getElementById('toDo').value != ''){
        newItem();
        trash();
        check();
    }
})
document.querySelector('.textBox').addEventListener('keypress',function(e){
    // console.log(e)
    if(e.key === 'Enter' && document.getElementById('toDo').value != ''){
        newItem();
        trash();
        check();
    }
})


function trash(){
    const trash = document.querySelectorAll('.trash').
    forEach(elem=>{
        // console.log(elem)
        // console.log('--------------')
        elem.addEventListener('click',function(){
            const toDoItem = elem.parentElement.parentElement
            // console.log(toDoItem)
            toDoItem.remove();
        
        })
    }
    )
}

function check(){
    const check = document.querySelectorAll('.check').
    forEach(check =>{
        check.addEventListener('click',function(){
            console.log(check)
            const toDoItem = check.parentElement.parentElement;
            const text = toDoItem.firstChild
            text.style.textDecoration = 'line-through';
            console.log(text)
        })
    })
}
