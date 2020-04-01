
// Exercise 1

const maxCapacity = 14
let surfTime = true
let bestStudent
const purposeInLife

console.log(maxCapacity)
console.log(surfTime)
console.log(bestStudent)
console.log(purposeInLife)

// Exercise 2

const stringA = "Samba "
const result = stringA + "is the best thing ever

console.log(result)

stringA += "is the best thing ever"

// Exercise 3

 const password = "secret"
 const confirmPassword = "SECRET"
 const isMatch = (password === confirmPassword)

// Exercise 4

console.log(423*12)
console.log(802/2)
console.log((5+6)*3)

// Exercise 5

console.log((5 > 2) && false) // flase


console.log(!("knife" === "sword")) // true


console.log((1 < 2) || (-1 > -1) || !false) // true


"" // can be used as false


(31 % 5) == "1" // true


!!true // true


"5th Avenue" != "5th Avenue" // false


52 !== "52" // true


(undefined || null) // false

Exercise 6
Bit of a mind-twister: what are the values of a, b, and c in the end?



COPY
let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b


