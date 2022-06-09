const btn = document.getElementById('pencil')

const container = document.getElementById('toDoListContainer')

function newItem(){
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
    if(document.getElementById('toDo').value == ''){
        alert('Enter a task!')
    }
    else if(document.getElementById('toDo').value != ''){
        newItem();
        trash();
        check();
    }
})
document.querySelector('.textBox').addEventListener('keypress',function(e){
    // console.log(e)
    if(e.key === 'Enter' && document.getElementById('toDo').value == ''){
        alert('Enter a task!')
    }
    else if(e.key === 'Enter' && document.getElementById('toDo').value != ''){
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
    let check = document.querySelectorAll('.check');
    for(elem = 0; elem<check.length;elem++){
            check[elem].onclick = function(){
            let toDoItem = this.parentElement.parentElement;
            let text = toDoItem.firstChild
            text.classList.toggle('checked')
            toDoItem.classList.add(`elem${elem}`)
            
            if(text.classList.contains('checked')){
                container.append(toDoItem)
            }

        }
    }
}