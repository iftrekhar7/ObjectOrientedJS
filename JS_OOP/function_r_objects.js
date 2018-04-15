/*jshint esversion: 6 */ 
function Circle(radius){ //use Pascal Case
    this.radius = radius; 
    this.draw = function() {
        console.log('functions are object');
    };
}
// In JavaScript, functions are objects. They have properties and methods. 
Circle.name; 
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function ,, 1st arg specify the target of this
Circle.apply({}, [1]);

//// JavaScript objects are dynamic. You can add/remove properties: 
const circle = new Circle(1);
circle.location =  {x: 1}; // dot notation

const property_Name = 'center_locataio';
circle[property_Name] = {x: 1}; //bracket notation-good for dynamic value

delete circle.location;
delete circle[property_Name];