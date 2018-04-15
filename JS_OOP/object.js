/*jshint esversion: 6 */ 
// The simplest way to create an object is using an object literal 
const circleLiteral = {  //object in js is a key value pair
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('object literal');
    }
};
circleLiteral.draw();

// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 
//Factory function
function CircleFactory(radius){
   return {
       radius, //if key & value r same we can removing the value
       draw: function() {
        console.log('Factory function');
    }
   };
}
const circleFactory = CircleFactory(1);

//constructor Function
function CircleConstructor(radius){ //use Pascal Case
    this.radius = radius; 
    this.draw = function() {
        console.log('Constructor Function');
    };
}
const CircleConst = new CircleConstructor(1);
//by default this point to the global object

// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const x = {};
x.constructor; // returns Object() 