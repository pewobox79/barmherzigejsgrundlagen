console.log("zum schluss")

const array = [{name: "peter", age: 45}, {name: "klaus", age: 33}]

//iteration Array
array.forEach((item)=>{

    console.log("item", item.name)
})


const object = {
    name: "peter", 
    age: 45,
    street: "daheim"
}

//iteration OBJECT

for(let key in object){

    console.log("object", object[key])

}

//erweitern von datensätzen beispiel Object
//{...} => SPREAD OPERATOR

const object2 = {...object, city: "ingolstadt"}
console.log("object2", object2)



//MATH Operators

const value = 4.3
console.log("value", Math.round(value))
console.log("floor", Math.floor(value))
console.log("ceil", Math.ceil(value))


//Datum formatieren

const date = new Date()
console.log(date)
console.log(date.toDateString())
console.log(date.toLocaleString())

const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()


const myBirthay = new Date(1979, 1, 1)
console.log("mein datum", myBirthay)
console.log(day + '.'+ month +'.'+ year)