
// Exercise 1 - increment num if not carefull

let numChildren = parseInt(prompt("please type a number of childern 0 to 5 "))
const isCareful = false
if (isCareful === false){
    numChildren++
}
console.log(numChildren)
// refuses to run wuth const for the numC var

// Exercise 2

let silverware = 0
silverwareCount = parseInt(prompt("how maney silverware items do you see?"))
if (silverwareCount % 2 === 0){
    console.log("chillax dude- the count number is even- nothing is missing")
} else {    console.log("damnnn...the count number is odd- you had lost a fork?")
}

// Exercise 3

let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if (performance === "stellar"){
    salary+=stellarBonus
} else {salary+=goodBonus}

console.log(salary)

// Exercise 4

const isVIP = false
let cash = 500

if (isVIP || cash > 300){
    console.log("Welcomem to De-Club Amigo mio")
} else{
    console.log("sorry dude -its a Ladies night")
}

Exercise 5
What will be the values of a, b, c, and d in the end? 

const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2

// a, b, c, d = 3, 15, 12, 160


// Exercise 6

const gender = null
// const gender = "male"
// const gender = "female"

let profession = "business"


if (gender === "male"){
    console.log(profession+="man")
} else if (gender === "female"){
    console.log(profession+="woman")
} else if (gender=== null){
    console.log(profession+="person")
}


// Exercise 7 - used input to get years since purchase instead of
// the static option (cur year - purch year)>=4   

// let boughtTesla = false
let boughtTesla = true

let isUSCitizen = true
// let isUSCitizen = false

if (boughtTesla){
    if (isUSCitizen){
        let years = parseInt(prompt("how many years had passed since you got it?"))
        if (years >= 4){
            console.log("would like an upgrade Madame?")
        } else {
            console.log("are you satisfied so far from your purchase?")
        }
    } else {
        console.log(" would like to move to new-york? we have planty of free Corona")
    }
} else {
    console.log("would you like to buy a new Tesla Madam? ")
}