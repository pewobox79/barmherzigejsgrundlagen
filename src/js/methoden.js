//funktion
const addTwoNumber = (num1, num2) => {

    const number1 = Number(num1)
    const number2 = Number(num2)

    //prüfung ob umgewandelter wert auch eine ZAHL ist
    //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
    if (Number.isNaN(number1) || Number.isNaN(number2)) {
        console.log("du depp")
        return 'kann nicht berechnet werden!'
    } else{

        return number1 + number2
    }


    
}

//globale constante
const resultValue = addTwoNumber("asfds", 50)
console.log("result", resultValue)





function connectTwoStrings(str1, str2){
    const string = str1 + ' ' + str2
    const formated = string.trim().toLowerCase()
    const isIndexOfAT = formated.indexOf('@')
    console.log("ausgabe: ", formated.includes('@'))
    console.log("string", formated)
    console.log("länge des stings", formated.length, string.length)
}
connectTwoStrings("PewoBox79@meinD@omain.de", "fArm ")



//ARRAY
const cars = ["audi", "mercedes", "nui", "tesla", "renault"]
//schleife erzeugen
//vanilla JS
for(let i = 0; i < cars.length; i++ ){

    const mySelectedCar = cars[i]

    //console.log("my car", mySelectedCar.toUpperCase())
}
//forEach
cars.forEach((car, index)=>{

    //console.log("my forEachcar", car.toUpperCase(), index)

})

//loop mit array of objects
const myNewCars=[

    {
        brand: "Audi",
        model: "A3",
        colors: ["red", "blue", "green"],
        fuel: "diesel",
        extras: {
            winter: false,
            summer: true
        }
    }
    , 
    {
        brand: "Mercedes",
        model: "G-Klasse",
        colors: ["red", "blue", "green"],
        fuel: "diesel",
        extras: {
            winter: true,
            summer: true
        }
    },
    {
        brand: "Renault",
        model: "R5",
        fuel: "elektro",
        extras: {
            winter: true,
            summer: true
        }
    }

]

const myNewCarList = myNewCars.forEach((car)=>{

    //alternative schreibweise
    //car["extras"].winter
    console.log("my new Car", car.brand, car.colors)

    //list all colors
    car?.colors?.forEach((color)=>{
        console.log("color", color)
    })

    return car.brand

})
console.log("neue liste", myNewCarList)
const myNewMapList = myNewCars.map((car)=>{

    const {brand, fuel} = car //destrukturiern Object
    return { brand, fuel }
})

console.log("new list mapped",myNewMapList)
