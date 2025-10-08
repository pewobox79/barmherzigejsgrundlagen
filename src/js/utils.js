
function createHeadline(headlineValue) {

    if(!headlineValue) return;

    const h1 = document.createElement("h1");
    h1.innerText = headlineValue;

    h1.style = 'font-size: 2rem; font-weight: bold; text-decoration: underline; border: 1px solid green; text-align:center; border-radius: 10px;padding: 20px 0'

    root.append(h1) // root wurde in dom.js definiert
}

function createSubLine(sublineValue) {

    if(!sublineValue) return

    const h3 = document.createElement("h3")
    h3.innerText = sublineValue

    h3.style = 'font-size: 1.4rem; border: 1px solid blue; text-align: center; border-radius: 10px; padding: 20px 0px  '

    root.append(h3) // root wurde in dom.js definiert
}

function createCarCard(carValue) {

    if(!carValue) return
    
    const div = document.createElement("div")
    const h2 = document.createElement("h2")

    h2.innerText = carValue

    div.append(h2)
    root.append(div)




}


function renderElement(items) {

    //items is ein ARRAY []
    items.forEach((item) => {

        switch (item.type) {
            case 'contact':
                item.entries.forEach((contactEntry) => {
                    const { name, phone, email } = contactEntry
                    createContactCard(name, phone, email)
                })
                break;
            case 'cars':
                console.log("cars selected")
                item.entries.forEach((carEntry) => {
                    createCarCard(carEntry)
                })
                break;
            default: console.log("no items available")
        }

    })

}

function createToDoElement(title, completed) {

    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")

    h2.innerText = title
    p.innerText = `Status: ${completed ? 'Erledigt' : 'Offen'}`

    div.append(h2, p)
    root.append(div)

}