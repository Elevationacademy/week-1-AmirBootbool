// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

// // to print each list[i] item:

// for(let companyIndex in companies){
//   console.log(companies[companyIndex])
// }


// for(let companyIndex in companies){
//   console.log(companyIndex)
// }

// for(let company of companies){
//     console.log("using for - of", company)
//   }

//   for(let i = 0; i < 10; i++){
//     console.log(i)
//   }

// Exercises

// Exercise 1

// let names = ["dan", "yos", "mike"]
// let ages = [11,32,23]
// let i = 0
// for(let name of names){
//     console.log(name + " is " + ages[i]+" years old!")
//     i++
//   }



// Exercise 2
// let numi = [4,5,6,7]
// let i = 0
// let sum = 0

// while (i < numi.length-1){
//     for (let num of numi){
//         sum+=num
//         i++
//     } 
// }
// console.log(sum)

// Exercise 3
// Using the same array of numbers above, write some code that
//  calculates the average of the numbers.

// let numi = [4,5,6,7]
// let i = 0
// let sum = 0
// while (i < numi.length-1){
//     for (let num of numi){
//         sum+=num
//         i++
//     } 
// }
// console.log("average of numi is: ", sum/numi.length-1)

// Exercise 4

// let nums = []
// let i = 100
// let sum = 0

// while (i >0){
//     nums.unshift(i)
//     i--
//     } 
// console.log(nums)

// Exercise 5
// Loop through the array nums from the previous exercise,
//  and print (console log) all the odd numbers. Remember our friend modulo %?
// let oddlist = []
// let evenlist = []
// for (let item of nums){
//     if (item % 2 !== 0){
//         oddlist.push(item)
//     } else {
//         evenlist.push(item)
//     }
// }
// console.log("odd list is: ", oddlist, "even list is: ", evenlist)

// Exercise 6

// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// console.log(nums.indexOf(709))

// Exercise 7

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// let i = 0
// for (name of names){
//     temp = {}
//     temp["name"] = name
//     temp["age"] = ages[i]   // must use [] notation to set a new string key 
//     people.push(temp)
//     i++
// }
// console.log(people)


// Exercise 8
// Based off the people array from before, write a loop that prints out "Ashley is 23 years old", "Donovan is 47 years old", etc.



// Again, consider which loop is most appropriate.



// Note that this is different from Exercise 1 ;)

// Challenging
// Exercise 9
// ==≡== The following exercises are a little more challenging - but this is a good chance to practice your programmer's mind. ==≡==



// Given this array:



// COPY
// const posts = [
//   {id: 1, text: "Love this product"},
//   {id: 2, text: "This is the worst. DON'T BUY!"},
//   {id: 3, text: "So glad I found this. Bought four already!"}
// ]


// Write some code that removes the post with an id of 2 from the posts array. Can't have any negative reviews of our product!



// Obviously, do not do posts.splice(1, 1) - you have to find the post to remove! (Of course, you will use splice - just not hard coded!)

// Challenging
// Exercise 10
// Given this array:



// COPY
// const posts = [
//   {
//     id: 1, 
//     text: "Love this product",
//     comments: []
//   },
//   { 
//     id: 2, 
//     text: "This is the worst. DON'T BUY!", 
//     comments: [
//                 {id: 1, text: "Idiot has no idea"}, 
//                 {id: 2, text:"Fool!"}, 
//                 {id: 3, text: "I agree!"}
//               ]
//    },
//    {
//     id: 3, 
//     text: "So glad I found this. Bought four already!",
//     comments: []
//    }
// ]


// You are given 2 as the ID of a post. Write some code that finds the comment with an ID of 3 (inside of a post with an ID of 2), and remove just that one comment.

// Challenging
// Extension
// There is something called Object.keys - read about this, and then do the following exercise:



// Given the object below:



// COPY
// const dictionary = {
//   "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//   "B": ["Banana", "Bonkers", "Brain", "Bump"],
//   "C": ["Callous", "Chain", "Coil", "Czech"]
// }


// Write some code that prints out the following:



// COPY
// Words that begin with  A:
//     Aardvark
//     Abacus
//     Actually
//     Atomic
// Words that begin with  B:
//     Banana
//     Bonkers
//     Brain
//     Bump
// Words that begin with  C:
//     Callous
//     Chain
//     Coil
//     Czech


// Hint 1: You will have to use what's known as a double for loop - that means a for loop within a for loop.



// Hint 2: Start small; only print out "Words that begin with..." at first, then keep going





// DONE
// COPY
// while(!done){

//   while(headHurts){
//     // massage your head
//   }

//   // keep going for another 20 minutes
// }

// // celebrate
