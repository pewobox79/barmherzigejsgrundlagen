function greetingGroup(){ 
    const myGreeting = 'Hallo Liebe Gruppe!'
    console.log(myGreeting)
}







greetingGroup() //trigger function
greeting("martin")

function greeting(name){
    const myGreeting = 'Hallo' + ' ' + name
    console.log(myGreeting)

}

greeting('Peter')
greeting('Lukas')

//function decleration
const sayHallo = function(){
    console.log("ich sage hallo!")
}
//ARROW FUNCTION (ES6)
const sayNo = () => {
    console.log("no")
}
sayHallo()
sayNo()

//optional Check
function greetingWithCheck(name) {

    if(name === undefined){
        console.log("kein name vorhanden")
    } else if(name === "Peter"){
        console.log("ganz was anderes")
    } else{
        const myGreeting = 'Hallo' + ' ' + name
        console.log(myGreeting)
    }
}


greetingWithCheck("Klaus")
greetingWithCheck('Peter')

function addTwoNumbers(num1, num2){

    const result = num1 + num2

    const isChecked = checkResultForTen(result)
    
    if(isChecked){
        console.log("Hurra")
    }
    else{  
        console.log("ergebnis", result)
    }

    return result
}

function checkResultForTen(dataToCheck){

    if (dataToCheck === 10) {
        return true
    } else {
        return false
    }

}
addTwoNumbers(5,5)
addTwoNumbers(10,4)

function addTwoNumberAndMultiplyByTwo(num1, num2){

    const resultOfAdd = addTwoNumbers(num1,num2)
    const resultOfMultiply = multiplyByTwo(resultOfAdd)
    return resultOfMultiply
}

function multiplyByTwo(value){
    const result = value * 2
    return result
}

//global verfügbar
const result = addTwoNumberAndMultiplyByTwo(20, 55)
const result2 = addTwoNumberAndMultiplyByTwo(30,775)

const allResults = result + result2
console.log("globales result", result, result2)
console.log("gesamt", allResults)