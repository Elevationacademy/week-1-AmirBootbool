// objects

// Exercise 1

Create two 'people' objects, p1 and p2. Each should have the following properties:
const p1 = {
    name: "dod",
    age: 20,
    city:"bon"
}

const p2 = {
    name: "ron",
    age: 66,
    city: "york"
}

if (p1.age === p2.age){
    if (p1.city === p2.city){
        console.log("Jill wanted to date Robert")
    } else {
        console.log("Jill wanted to date Robert, but couldn't")
    }
}

// Exercise 2

const myList = [{ size : "big", color : "blue" }, { size : "medium", color : "black" }]
console.log("array before actions: ", [{ size : "big", color : "blue" }, { size : "medium", color : "black" }])
myList[0].color = "green"
myList.splice(1,1)
console.log("array after actions: ", myList)

// Exercise 3

hisList = [{ size : "xtra", color : "rosie" }, { size : "biggy", color : "crema" }]
myList.push(...hisList)
console.log("myList after changes ", myList, "the added list ", hisList)

// Exercise 4

const library = { 
     book:[{title: "Starship Troopers",author: "robert heinlein"},
           {title: "Foundation", author: "Aisaac Asimov"}, 
           {title: "Ring-World", author: "Larry Niven"}]}

myList.push(library.book)
console.log(library.book , "was pushed to myList, and the result is: ", myList)


// I'm planning to get to these later on - now I need to run foward to catch up.

// Exercise 5
// You have this setup code:

// COPY
// const reservations = {
//   Bob: { claimed: false },
//   Ted: { claimed: true }
// }

// const name = prompt('Please enter the name for your reservation');


// Note that prompt will show a popup on your screen and allow you to input some text - that text will be stored inside name

// The above code is a reservation system where people can claim their reservations when they arrive.

// After receiving the name from the prompt,

// If the reservation exists and is unclaimed, welcome the user (console log or use alert)
// If the reservation exists and is already claimed, inform the user about the situation
// If there is no reservation, tell the user there is nothing under their name

// Use 'Bob' and 'Ted' to test your code:

// When you test Bob, it should say "Welcome, Bob"
// When you test Ted, it should say "Hmm, someone already claimed this reservation"
// If you try a different name, it should say "You have no reservation"

//  Note: Definitely upload this code to Github, you might want to use it later on ;)

// Exercise 5.1
// It so happens that our restaurant has a bunch of open tables. 

// ﻿Therefore, if someone doesn't have a reservation, add it to the reservations object and set "claimed" to true for that person.

// Exercise 5.2
// As of now, 'Ted' and 'ted' are two different names in our system. Change your code so that 'ted' and 'Ted' or even 'TeD' is all the same. 



// You might be interested in toLowerCase.

// Extensions
// This one is not hard, it's just involved. Take a breath, take your time.

// Given these two variables:

// const date = 3

// const kitchen = {
//     owner: "Geraldine",
//     hasOven: true/false, // choose one
//     fridge: {
//         price: 500,
//         works: true/false, // choose one
//         items: [
//             { name: "cheese", expiryDate: 7 },
//             { name: "raddish", expiryDate: 2 },
//             { name: "bread", expiryDate: 1 }
//         ]
//     }
// }

// You're going to console log these four options conditionally, based on the values you selected for hasOven and works:

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

// const hasOven = kitchen.hasOven
// //...

// if(hasOven){
//   //...//this will be cleaner than doing: //if(kitchen.hasOven){...
