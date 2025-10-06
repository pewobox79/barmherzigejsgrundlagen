
//PRIMITIVE DATEN TYPEN
//Konstanten => bleiben IMMER GLEICH
const myNumberToMultiply = 45
const myString = 'das ist mein String'
//console.log(myBoolean)
const myBoolean = false
const myUndefined = undefined
const myNull = null
console.log(myNumberToMultiply, myString, myBoolean, myUndefined, myNull)

//VARIABLE daten
let myVariableNumber = 33
console.log("nach INIT", myVariableNumber)
myVariableNumber = '99'

let myAddition = '45' + 45

console.log("after Change", myVariableNumber)
console.log("ergebnis aus 45 + 45", myAddition)


//NON-PRIMITIVE
//{KEY: VALUE}
const myObject = { name: 'Peter', age: 45 }
const myArray = [33, 55, 88, 'hallo world', { name: "klaus", age: 65 }]

console.log("Object peter", myObject)
console.log("array", myArray)


//OPERATOREN 
//VERGLEICH
console.log("vergleich 5 mit 5 als Zahl", 5 == 5)
console.log("vergleich 5 mit 5 string", 5 === '5') //prüft auch TYPE

//Arithmetischen Operatoren
let sum = 5 + 3 // Ergebnis: 8
let rest = 10 % 3 // Ergegnis: 1 (Modulo)
let power = 2 ** 3 // Ergebnis 8 (potenzierung)

//Logische Operatoren
const isAdult = true
const hasTicket = false
const isEqual = isAdult === hasTicket

console.log(isEqual) // vergleich zwischen zwei Daten
console.log(isAdult && hasTicket) // UND => vergleich ob BEIDE SEITEN gleich sind
console.log(isAdult || hasTicket) // ODER => entweder die eine oder die andere seite stimmen zu

//zuweisungsoperatoren
let x = 5
//x = x + 5
x += 5
x *= 2
console.log("wert X", x)

let y = 'Hallo'
y += ' '
y += 'world'
console.log("wert string", y)
