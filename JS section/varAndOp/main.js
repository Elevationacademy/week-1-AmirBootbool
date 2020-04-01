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

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const heal = []
heal.push("ACADM", "GLMN")
heal.push("CRYZ", "AZIN2", "RLF")
heal.splice(3,1)
heal.splice(heal.length,0,"AZIN2", "AZIN2")
heal.unshift("FXT")

console.log(heal)



