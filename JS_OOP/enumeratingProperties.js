/*jshint esversion: 6 */ 

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}
const circle = new Circle(1);
// To enumerate the members in an object: 
for (let key in circle) {
    if (typeof circle[key] != 'function')
    console.log(key, circle[key]);//use bracket notation
} 

const keys = Object.keys(circle); 
                      
// To see if an object has a given property
if ('location' in circle)
 {
     
 }