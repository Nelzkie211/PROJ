let word = 'dylan'
let word2 = 'israel'
let num1 = 2
let num2 = 3

// const fullname = word + ' ' + word2
// const fullname2 = `${num1 + num2} ${word2}`

// console.log(fullname2)

let example = `${word} ${word2}`



//Destructuring Objects-----

const personalInformation = {
  firsname : 'Neil',
  lastname : 'Reyes',
  city : 'Cebu',
  state : 'Texas',
  zipcode : '6046',
}

const {firsname: fn, lastname: ln} = personalInformation

// console.log(`${fn} ${ln}`)



//Destructuring Arrays-----

let [firstname, middlename, lastname] = ['Neil', 'Reyes', 'Good'];
lastname = 'clements'
// console.log(lastname)



// Object Literal------------

// function addressMaker(city, state){

//   const newAddress = {city, state}

//   console.log(newAddress)
// }

// addressMaker('austin','texas')




// Object Literal Challenges------------

// function addressMaker(address){

//   const {city, state} = address

//   const newAddress = {
//     city,
//     state,
//     country: 'United States'
//   }

//   console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
// }

// addressMaker({city: 'Austin', state: 'Texas'})


//for loop ----------------------------------

// let incomes = [62000, 63000, 64000]
// let total = 0

// for (const income of incomes){
//   console.log(income)
//   total += income
// }

// console.log(total)

// let fullname = "Dylan Coding God Israel"

// for (const char of fullname){
//   console.log(char)
// }



// for loop challenge-------------------------------

// let incomes = [62000, 63000, 64000]

// for (let income of incomes){
//   income += 5000
// }

// console.log(incomes)


// Spread Operator-------------------------------------

// let example1 = [1,2,3,4,5,6]
// let example2 = [...example1]

// example2.push(true)
// console.log(example1)

// let example1 = {
//   firstname: 'Neil'
// }

// let example2 = {
//   ...example1
// }
// console.log(example1)




// Rest Operator--------------------------------------------

// function add(...nums){
//   console.log(nums)
// }

// add(4, 5, 6, 7, 8)





// arrow functions---------------------------------------------

// function add(...nums){
//   let total = nums.reduce((x, y) => x + y)
//   console.log(total)
// }

// add(4, 5, 6, 7, 8)




// default params--------------------------------------------------

// function add(numArray = []){
//   let total = 0
//   numArray.forEach( element => total += element )
//   console.log(total)
// }

// add()



// includes----------------------------------------------------------

// let numArray = [1,2,3,4,5,6]

// console.log(numArray.includes(2))



// let & const----------------------------------------------------------
// if(false){
//    let exampled = 5
// }
// console.log(exampled)


// const exampleds = 5
// console.log( exampleds)



// Classes-----------------------------------------------------

// export class Animal{
//   constructor(type, legs){
//     this.type = type;
//     this.legs = legs;
//   }

//   makeNoise(sound = 'Loud Noise'){
//     console.log(sound)
//   }

//   static return10() {
//     return 10
//   }

//   get metaData(){
//     return `Type: ${this.type}, Legs: ${this.legs}`
//   }
// }


// export class Cat extends Animal {
//   // constructor(type, legs, tail){
//   //   super(type, legs)
//   //   this.tail = tail
//   // }

//   makeNoise(sound = "moew") {
//     console.log(sound)
//   }
// }




// Trailing Commas------------------------------------------

// function add(param1,){
//  const exam = {
//   name: 'Neil',
//  }

//  console.log(exam)
// }
// add()



// Async and Await-----------------------------------------------
const apiUrl = 'https://graph.facebook.com/facebook/picture?redirect=false'

function getTop100Campers() {
  fetch(apiUrl)
  .then((response)=>response.json())
  .then((json)=>{
    console.log(json[0])
  })
}

getTop100Campers()