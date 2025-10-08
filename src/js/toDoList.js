// 1. Elemente aus der DOM auslesen / holen
const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const clearBtn = document.getElementById("clearBtn")
const taskList = document.getElementById("taskList")

addBtn.addEventListener('click', addTask)

function addTask(){

    const taskText = taskInput.value.trim()

    //prüfen of tasktext valide ist
    if(taskText === ''){
        alert("Bitte eine Aufgabe eingeben!")
        return
    }

    // Element wird gebaut
    const li = document.createElement("li")
    li.textContent = taskText

    //task Delete Btn erstellen
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", ()=>{
        li.remove()
    } )

    //btn an task hinzufügen
    li.append(deleteBtn)


    //füge neues Task hinzu
    taskList.append(li)

    //eingabefeld leeren
    taskInput.value = ''

}


clearBtn.addEventListener('click', ()=>{

    taskList.innerHTML = ''
    
})
