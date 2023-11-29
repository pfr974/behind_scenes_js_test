// This is variable with block scope
var name = 'Fred';
// Following with let name = 'Paul' would cause an error
/*
var name = 'Fred';
var name = 'Frederic';
This would not cause an error but it would overwrite the first declaration of name
*/

if (name === 'Fred') {
  let hobbies = ['Sports','Cooking'];
  // this log will work
  console.log(hobbies);
}
function greet() {
  var age = 32;
  var name = 'Paul';
  console.log(name, age, hobbies);
}

// this log will not work
console.log(name, hobbies);

greet();