// objects

// Exercise 1

// const p1 = {
//     name: "dod",
//     age: 20,
//     city:"bon"
// }

// const p2 = {
//     name: "ron",
//     age: 66,
//     city: "york"
// }

// if (p1.age === p2.age){
//     if (p1.city === p2.city){
//         console.log("Jill wanted to date Robert")
//     } else {
//         console.log("Jill wanted to date Robert, but couldn't")
//     }
// }

// Exercise 2

// const myList = [{ size : "big", color : "blue" }, { size : "medium", color : "black" }]
// console.log("array before actions: ", [{ size : "big", color : "blue" }, { size : "medium", color : "black" }])
// myList[0].color = "green"
// myList.splice(1,1)
// console.log("array after actions: ", myList)

// Exercise 3

// hisList = [{ size : "xtra", color : "rosie" }, { size : "biggy", color : "crema" }]
// myList.push(...hisList)
// console.log("myList after changes ", myList, "the added list ", hisList)

// // Exercise 4

// const library = { 
//      book:[{title: "Starship Troopers",author: "robert heinlein"},
//            {title: "Foundation", author: "Aisaac Asimov"}, 
//            {title: "Ring-World", author: "Larry Niven"}]}

// myList.push(library.book)
// console.log(library.book , "was pushed to myList, and the result is: ", myList)


// I'm planning to get to these later on - now I need to run foward to catch up.

// Exercise 5

// const reservations = {
//   Bob: { claimed: false },
//   Ted: { claimed: true }
// }
// prompting user for name and storing in var "name"
// const name = prompt('Please enter the name for your reservation')
// if (name in reservations){
//     if (reservations[name].claimed){
//         alert("Welcome Mr "+name+" your place is saved for you")
//     } else {
//         alert("sorry Mr "+ name+" your table has been taken")
//     }
// } else {
//     alert("sorry Mr "+name+" we have no res. under this name")
// }

// Exercise 5.1

// if (name in reservations){
//     if (reservations[name].claimed){
//         alert("Welcome Mr "+name+" your place is saved for you")
//     } else {
//         alert("sorry Mr "+ name+" your table has been taken")
//     }
// } else {
//     reservations[name]= {claimed:true}
// }
// console.log(reservations)

// Exercise 5.2
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
const name = prompt('Please enter the name for your reservation').toLowerCase()

if (name in reservations) {
    if (reservations[name].claimed){
        alert("Welcome Mr "+name+" your place is saved for you")
    } else {
        alert("sorry Mr "+ name+" your table has been taken")
    }
} else {
    reservations[name]= {claimed:true}
}
console.log(reservations)

// Extensions

// Given these two variables:

// const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true/false,   // choose one STATE
    fridge: {
        price: 500,
        works: true/false,   // choose one STATE
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const hasOven = kitchen.hasOven

if(hasOven && ){

// hasOven: true and works: true

// Geraldine's raddish expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.

// hasOven: false and works: true
// Geraldine's raddish expired 1 day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.
// hasOven: true and works: false
// Geraldine's raddish expired 1 day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay 250 to fix the fridge.
// hasOven: false and works: false
// Geraldine's raddish expired 1 day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay 250 to fix the fridge.

// Note that the expired 1 day ago should be calculated based off the date variable and expiryDate property.

// Also, she'll have to pay 250 to fix the fridge should be calculated based off the priceproperty in fridge - it should be half the price.

// Make sure to only use information from the variables you've been given. 

// Do not write out "raddish". Instead, use kitchen.fridge.items...

// Hint: Use helper variables to make your life easier. For instance:


