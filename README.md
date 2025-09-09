#### 1) What is the difference between var, let, and const?
**Answer:** var,let and const use for declare vaiable. var is function scope. It available out of function.
But let or const is block scope. Only available inside th block.

Var can be reassigned and redeclared but let can be reassigned but cannot redeclared.
Otherwise const cannot be reassigned and redeclared.

#### 2) What is the difference between map(), forEach(), and filter()? 
**Answer:**
forEach() : Loops through each element of the array and executes a callback.
map(): creates a new array and return
filter(): Creates new array containing elements that pass a condition if condition true the pass.

#### 3) What are arrow functions in ES6?
**Answer:** Arrow function in Es6 is a short syntax for writing function in js.
it use => arrow icon. Like example:
1) const addnumber  =(a,b)=>a+b  
here automatic calculation then return
2) const firstName = (fname) =>{
  //** //
return
}

#### 4) How does destructuring assignment work in ES6?
**Answer:** It allows you to unpack values from arrays or objects into distinct variables in a very clean way.

make a object and declare 
object.name
but destructuring no need write object name you can write during assignment time like
const { name, age } = person;
console.log(name, age);

#### 5) Explain template literals in ES6. How are they different from string concatenation?
**Answer:** template literals like "" '' but diffrent is you use `` this you can add js syntax under `` by using ${}. Example
console.log(`I am a `${student}) here student is variable but i wrote easily by template literal. And it like string type but diffrent some. That is String wirte only but cannot calculation js. and string write only single line user cannot enter second line with using enter button. but template can do it. Also string cannot write use under the string. If i using string example
console.log("I am a "+student)
