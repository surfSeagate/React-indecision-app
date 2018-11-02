
// const square = function (x) {
//   return x * x;
// };

// // const squareArrow = (x) => {
// //   return x * x;
// // }

// const squareArrow = (x) => x * x;


// console.log(squareArrow(4));



// const firstName = (fullName) => {
//   return fullName.split(' ')[0];
// };

// const firstNameshort = fullName => fullName.split(' ')[0];

// console.log(firstNameshort('Randy Smith'));


// arguments objects - no longer bound
// const add = (a, b) => {
//   return a + b
//}

//console.log(add(55, 1));

// this keyword no longer bound

// const user = {
//   name: 'Glenn',
//   cities: ['Jax Beach', 'Chicago', 'Milwaukee'],
//   printPlacesLived() {

//     return this.cities.map((city) => this.name + ' has lived in ' + city + '!');



//     return cityMessages
//     // this.cities.forEach((city) => {
//     //   console.log(this.name + ' has lived in ' + city);

//     //});
//   }
// }

// console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 4],
  multiplyBy: 2,
  multiply() {

    return this.numbers.map((number) => number + ' times ' + this.multiplyBy + ' equals ' + number * this.multiplyBy);
  }
}
console.log(multiplier.multiply());


