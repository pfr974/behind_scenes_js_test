// This is variable with block scope
let name = 'Fred';
// Following with let name = 'Paul' would cause an error
/*
var name = 'Fred';
var name = 'Frederic';
This would not cause an error but it would overwrite the first declaration of name
*/
function greet() {
  // This is a variable with local scope
  let age = 32;
  let name = 'Paul';
  // name is shadowed by the local variable but only inside the function
  console.log(name,age);
}

console.log(name);

greet();