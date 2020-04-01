// code sandbox connected to HTML

// let numChildren = parseInt(prompt("please type a number of childern 0 to 5 "))
// const isCareful = false
// if (isCareful === false){
//     numChildren++
// }
// console.log(numChildren)
// // refuses to run wuth const for the numC var

// let silverware = 0
// silverwareCount = parseInt(prompt("how maney silverware items do you see?"))
// if (silverwareCount % 2 === 0){
//     console.log("the count number is even")
// } else {    console.log("the count number is odd- you had lost a fork?")
// }

// let performance = "stellar"
// let salary = 10000
// const goodBonus = 1000
// const stellarBonus = 3000

// if (performance === "stellar"){
//     salary+=stellarBonus
// } else {salary+=goodBonus}

// console.log(salary)

// const isVIP = false
// let cash = 500

// if (isVIP || cash > 300){
//     console.log("Welcomem to De-Club Amigo mio")
// } else{
//     console.log("sorry dude -its a Ladies night")
// }

// const gender = null
// const gender = "male"
// const gender = "female"

// let profession = "business"


// if (gender === "male"){
//     console.log(profession+="man")
// } else if (gender === "female"){
//     console.log(profession+="woman")
// } else if (gender=== null){
//     console.log(profession+="person")
// }



// let boughtTesla = false
// let boughtTesla = true

// let isUSCitizen = true
// let isUSCitizen = false

// if (boughtTesla){
//     if (isUSCitizen){
//         let years = parseInt(prompt("how many years had passed since you got it?"))
//         if (years >= 4){
//             console.log("would like an upgrade Madame?")
//         } else {
//             console.log("are you satisfied so far from your purchase?")
//         }
//     } else {
//         console.log(" would like to move to new-york? we have planty of free Corona")
//     }
// } else {
//     console.log("would you like to buy a new Tesla Madam? ")
// }

// const a = 3
// let b = 2
// let c = 0 || 12
// let d

// b = c
// b++
// if(d){
//   b = a
// }

// d = a + (b * c)
// d++
// b += 2

// console.log(a,b,c,d) 


//arrays

// let newlist = [1,2,3,4,5,6]
// let newlist2 = [7,8,9]

// adding to head or tail with push and unshift 
// newlist.push(2)
// newlist.unshift(6)
// newlist.push(...newlist2)
// console.log(newlist)

// splice

// let newlist = [1,2,3,4,5,6,7,8,9]
// newlist.splice(1, (newlist.length-2))
// console.log(newlist)

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)  // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

// // removing and adding
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits) // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]


// Arrays

// 1. The first two genes should be the same as those in genes
// 2. Replace "RLF" with "CRYZ" and "CRYZ" with "RLF" (swap their places)
// 3. Remove "AZIN2" from where it is, and insert two of these "AZIN2"s
//  at the end of the strand.
// 4. add the gene "FXT" to the beginning of the strand

// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
// const heal = []
// heal.push("ACADM", "GLMN")
// heal.push("CRYZ", "AZIN2", "RLF")
// heal.splice(3,1)
// heal.splice(heal.length,0,"AZIN2", "AZIN2")
// heal.unshift("FXT")

// console.log(heal)

// Objects

// dict1 = {"name":"apoo", color:"green"}
// brother = dict1["name"]
// console.log("do you know " + brother +" he is my brother!")

// object with an array inside
// const bag = {
//     weight: 10,
//     owner: "Larissa",
//     items: ["Pen", "Bottle", "Book"]
//   }
//   zen = bag.items[0]
//   console.log(zen)


// Spot check objects

// dict = {
//     item:"brca1",
//     toBeginning: true,
//     items:[1,2,3,4]
// }

//  if (dict.toBeginning){
//      dict["items"].unshift(dict.item)
//  } else {
//      dict["items"].push(dict.item)
//  }
//  console.log(dict)

// spot check

// const human = {
//     age: 0
// }
// const babyNameKey = "name"
// const babyNameValue = "Goojibear"

// human.name = "Goojibear"
// console.log(human)
// Write some code that gives human the key-value pair 
// of name: "Goojibear", using the variables above.


// type refrences

// let person = {
//     firstName: "Dopple",
//     lastName: "Ganger"
//   }
  
//   let p = person  // now both are pointing at the same object
//   p.firstName= "Chappy"  // updating the object pointed by both
  
//   console.log(p)
//   console.log(person)

// ex 1

// const p1 = {
//     name: "dod",
//     age: 20,
//     city:"bon"
// }

// const p2 = {
//     name: "ron",
//     age: 20,
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

