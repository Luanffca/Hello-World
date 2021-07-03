const listContainer = document.querySelector('[data-lists]')
const newlistForm = document.querySelector('[data-new-list-form]')
const newlistInput = document.querySelector('[data-new-list-input]')

let lists = ["html", "js", "css"]

// newlistForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const listName= newlistInput.value
//     if(listName === NULL || listName === "") return
//     const list = createList(listName)
//     newlistInput.value = null
//     lists.push(list)

//     render()
// })

function render(){
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list
        listContainer.appendChild(item)
    })
}

render ();

//console.log(listContainer)