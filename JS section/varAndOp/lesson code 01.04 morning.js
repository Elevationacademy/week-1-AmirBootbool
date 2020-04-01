/ const sayHello = function (name) {
//   console.log('Hello there, ' + name)
// }
// sayHello('Yoli')
// const names = ['mariana', 'daniel', 'vicki', 'efrat']
// for (let name of names) {
//   sayHello(name)
// }
const displayAge = function (name, age) {
  console.log(`My name is ${name} and I am ${age} years old`)
}
// displayAge('Efrat')
const likePost = function (post) {
  post.likes++
}
const newPost = {
  text: 'Going to the gym',
  likes: 32
}
// likePost()
// console.log(newPost)
// Function expression
const getSum = function (x, y) {
  const sum = x + y
  return
}
// const num1 = prompt('Enter number')
// const num2 = prompt('Enter number')
// const sumOfNumbers = getSum(10, 10)
// console.log(sumOfNumbers)
const numbers = [10, 7, 18, 91, 100, 27, 18, 45]
// const largest = findLargestNumber(numbers)
//Hoisting
//Function declaration
function findLargestNumber (numbers) {
  let largestNum = numbers[0]
  for (let num of numbers) {
    if (num > largestNum) {
      largestNum = num
    }
  }
  return largestNum
}
// console.log(largest)
const talk = function () {
  console.log('Shoobi doobi')
}
const person = {
  name: 'Jona',
  speak: talk
}
person.speak()