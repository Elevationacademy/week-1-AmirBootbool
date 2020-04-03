// iteration over an array

// simple function to print a parameter

// const greet = function (name){
//     console.log(name)
// }

// const names = ["Mr. Woods", "Sir Newton", "Lady Gamora", "Her Highness Kayla", "Master Shen", "Squire Carl", "The Eternal Brittany"]

// for(let n of names){
//   greet(n)
// }

// using more than one param:

// const greet1 = function(name, timeOfDay){
//     console.log("Good " + timeOfDay + ", " + name)
//   }
  
  //calling the function- with two arguments

//   greet1("Darrell", "Evening")

// //   creating Objects with a function

// const createUser = function(name, age){
//     const user = {name: name, age: age}
//     console.log(user)
//   }
  
//   createUser("William", 27) // prints {name: "William", age: 27}
  

  // using loop with a function

//   const growOld = function(user){
//     user.age++
//   } // a new function that takes an object (user) - call its  age property - and increment by 1
  
//   const aDude = {name:"Ayd Ood", age: 23}

//   growOld(aDude) // invoke increment func on object
  
//   console.log(aDude) // prints {name: "Ayd Ood", age: 24}

  // min function for array:

//   const findSmallest = function(numbers){
//     let smallest = numbers[0] // intialize the smallest var with let!
  
//     for(let num of numbers){ // iterate on list
//       if(num < smallest){
//         smallest = num
//       }
//     }
  
//     return smallest
//   }
  
//   const ages = [17, 21, 9, 34]  // we can also get it from prompt
//   const youngest = findSmallest(ages) // assign var name to func with arg
//   console.log(youngest) // prints 9

  // use RETURN to break out of loop

//   const example = function(){
//     while(true){
//       return  // break after 1st iteration!
//     }
//   }

//   const add = function(x, y){
//     const sum = x + y
//     return sum
//     console.log("Returned " + sum)  // will NOT be printed!
//     // return console.log("Returned " + sum) // will return 
//   }
//   add(1, 2) 

  // calling a function inside a function

  // set function to calculate interest on money param
//   const getInterest = function(money){
//     return money * 0.2
//   }
  
//   // set function to call interest-func, store result in var and add the original argument to the interset func result
//   const getDebt = function(money){
//     const interest = getInterest(money)
//     return money + interest
//   }
  
//   const borrowedMoney = 100
//   const debt = getDebt(borrowedMoney)
//   console.log("for a ",borrowedMoney," dollars loan, you will pay back ",debt)

// greet() // calls declaration
// greetExpression() // calls -too early - the expression


// In decleration - no const  is involved. JS will hoist them
// (send them up to) the top of the JS file.

// function greet(){ 
//   console.log("Hello there, from the wild, wild West")
// }


// // expression -  a func is assgined to a var
// // js will read them by the order of appearance

// const greetExpression = function(){

//   console.log("Uh oh")
// }


// function inside an object =  method!
// const person = {
//     name: "Julius",
//     speak: function() {
//       console.log("Et tu, Brutus?")
//     }
//   }

// to call the function-  access the value and use ()

// person.speak()  // retrives the val- which is a function, and uses () for the right syntax to invoke it

// take food and concat with text 

// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log("I like " + food)
//     }
//   }
// person.speak("pasta")

// Exercise 1

// const calcAge = function(currentYear, birthYear){
//     return currentYear- birthYear
// }

// const age = calcAge(2017, 1989)
// console.log(age)

// Exercise 2

//  const calcAge = function(currentYear, birthYear){
//      const delta = currentYear- birthYear
//         return console.log("you are neither "+delta+" or "+(delta-1))
//  }
//  const age = calcAge(2017, 1989)

// Exercise 3

// const isEven = function(number){
//     if (number%2 === 0){
//         return console.log(number+" is an even numebr")
//     } else {
//         return console.log(number+" is an odd number")
//     }
// }
// const value = isEven(-3)

// Exercise 4 - splitting one array to even and odd numbers 

// helper function for finding odd/even num

// const isEven = function(number){
//     if (number%2 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// iterating over the arr function + push to new arr
// const findOdd = function(array){
//     oddArr = []
//     evenArr = []
//     for(let item of array){ 
//       if(!(isEven(item))){
//           oddArr.push(item)
//       } else {
//           evenArr.push(item)
//       }
//     } return console.log("odd numbers are: "+oddArr+"\n"+"even numbers are "+evenArr)
// }

// const numlist = [3451,174554, 21,2,3344, 9, 34]  // we can also get it from prompt
// findOdd(numlist)

// Exercise 5

// let number = parseInt(prompt("please enetr a number to look for in array"))
// const isIn = function (intArray, number){
//     let present = 0
//     for(let item of intArray){
//         if (item === number){
//             console.log(number+" is in this array "+intArray)
//         }
//     } 
// }

// const numlist = [3451,174554, 21,2,3344, 9, 34]
// isIn(numlist, number)  



