/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane (name) {
  this.name = name
  this.isFlying = false
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true
}
Airplane.prototype.land = function () {
  this.isFlying = false
}

/*
👇 COMPLETE YOUR WORK BELOW 👇
👇 COMPLETE YOUR WORK BELOW 👇
👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person (name, age) {
  this.name = name
  this.age = age
  this.stomach = []
}

Person.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food)
  }
}

Person.prototype.poop = function () {
  this.stomach = []
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`
}

const personOne = new Person ('Chris', 27)
const personTwo = new Person ('Shay', 25)
const personThree = new Person ('Loralai', 1.5)
const personFour = new Person ('Vera-Rose Jones', 6)
const personFive = new Person ('Jace Jones', 4)

// console.log(personOne.toString())
// personOne.eat('Biscuits')
// personOne.eat('Coffee')
// personOne.eat('Bagel')
// personOne.eat('Shake')
// personOne.eat('Sandwhich')
// personOne.eat('Cereal')
// console.log(personOne.stomach)
// personOne.poop()
// console.log(personOne.stomach)

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(make, model, tankCapacity, mpg) {
  this.make = make
  this.model = model
  this.tankCapacity = tankCapacity
  this.mpg = mpg
  this.tank = 0
  this.odometer = 0
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons
  if (this.tank > this.tankCapacity) {
    this.tank = this.tankCapacity
  }
}

Car.prototype.drive = function (distance) {
  this.odometer += distance
  this.tank -= distance / this.mpg
  if (this.tank <= 0) {
    const emptyAt = this.odometer + this.tank
    this.tank = 0
    return `The ${this.make} ${this.model} ran out of fuel at ${emptyAt} miles`
  } else {
    return `The ${this.make} ${this.model} drove ${distance} miles and ${this.tank} gallons left`
  }
}

const carOne = new Car('Ford', 'Focus', 13.2, 28)
const carTwo = new Car('Ram', '1500', 30, 16)
const carThree = new Car('Chevy', 'Impala', 18.5, 28)

// carOne.fill(15)
// carTwo.fill(15)
// carThree.fill(15)
// console.log(carOne)
// console.log(carTwo)
// console.log(carThree)

// carOne.drive(20)
// carTwo.drive(20)
// carThree.drive(20)
// console.log(carOne)
// console.log(carTwo)
// console.log(carThree)

// console.log(carOne.drive(2000))
// console.log(carOne)
// console.log(carTwo.drive(100))
// console.log(carTwo)
// console.log(carThree.drive(1500))
// console.log(carThree)

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby (name, age, favoriteToy) {
  this.name = name
  this.age = age
  this.stomach = []
  this.favoriteToy = favoriteToy
}

Baby.prototype.play = function () {
  return `${this.name} is playing with ${this.favoriteToy}`
}

Baby.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food)
  }
}

Baby.prototype.poop = function () {
  this.stomach = []
}

Baby.prototype.toString = function () {
  return `${this.name}, ${this.age}`
}

const babyOne = new Baby ('Chipmunk', '1.5 months', 'fake mouse')
const babyTwo = new Baby ('Sir Skully', '1.5 months', 'scratching post')
const babyThree = new Baby ('spaz', '1.5 months', 'bugs')

console.log(babyOne.stomach) 
babyOne.eat('cat food')
babyOne.eat('cat food')
babyOne.eat('cat food')
babyOne.eat('cat food')
babyOne.eat('cat food')
babyOne.eat('cat food')
babyOne.eat('cat food')
console.log(babyOne.stomach)
babyOne.poop()
console.log(babyOne.stomach)
console.log(babyOne)
console.log(babyTwo) 
console.log(babyThree)


/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Implicit Binding: The object before the dot in the declaretive statement
  2. Explicit Binding: 'force' a function call to use a choosen object for this keyword to refer to using the .call, .apply, and .bind keywords
  3. New Binding: the function that is called with the new operator creates a new empty object to be referenced by this keyword
  4. Default Binding: this by default refers to the scope of the function is called in
*/


// ///////// END OF CHALLENGE /////////
// ///////// END OF CHALLENGE /////////
// ///////// END OF CHALLENGE /////////
// if (typeof exports !== 'undefined') {
//   module.exports = module.exports || {}
//   if (Airplane) { module.exports.Airplane = Airplane }
//   if (Person) { module.exports.Person = Person }
//   if (Car) { module.exports.Car = Car }
//   if (Baby) { module.exports.Baby = Baby }
// }
