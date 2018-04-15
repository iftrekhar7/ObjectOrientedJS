/*jshint esversion: 6 */ 
// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 
let value = 5;
function increase() {
    value++;
}

increase(value);
console.log(value);//10


let reference = { value: 10 };
function increase() {
    reference.value++;
}

increase(reference);
console.log(reference);//11