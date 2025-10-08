//Selectors
const h1Array = document.querySelectorAll('h1')
const h3Array = document.querySelectorAll("h3")

//Element by ID
const contactSection = document.getElementById("contact")
const root = document.getElementById("root")


const telephoneBook = [
    {
        name: "Klaus Müller",
        phone: "723848208",
        email: "pewo79@net.de"
    },
    {
        name: "Martina Müller",
        phone: "723848208",
        email: "martina@net.de"
    },
    {
        name: "Heinz Müller",
        phone: "723848208",
        email: "heinz@net.de"
    }
]

//create Card Element
function createContactCard(name, phone, email) {

    //create elements / atoms
    const cardSection = document.createElement("section")
    const innerSection = document.createElement("div")
    const nameElement = document.createElement("h3")
    const phoneElement = document.createElement("p")
    const emailElement = document.createElement("p")

    //add content
    nameElement.innerText = name
    phoneElement.innerText = 'Phone: ' + phone
    emailElement.innerText = 'Email: ' + email

    //styling
    innerSection.style = "border: 1px solid red; margin: 20px; padding: 20px; border-radius: 10px"


    //append Elements
    innerSection.append(nameElement, phoneElement, emailElement)
    cardSection.appendChild(innerSection)


    //append card to root
    root.append(cardSection)


}

//dynamic phonebook
telephoneBook.forEach((contact) => {

    const { name, phone, email } = contact

    //createContactCard(name, phone, email)

})

//übung für morgen
const pageData = {
    type: "homepage",
    headline: "Das ist meine Homepage",
    subLine: "",
    items: [
        {
            type: "contact",
            entries: telephoneBook
        },
        {
            type: "cars",
            entries: ["mercedes", "audi", "renault"]
        }
    ]
}




//function für CREATE HOMEPAGE

//create function für h1 => headline

//create function für h3 =>subline

//re-use createContactCard für item[0].entries

//create Elements für cars