/*jshint esversion: 6 */ 
// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 
function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function(){
        console.log("draw");
    };

    object.defineProperty(this, defaultLocation, {
        get: function() {
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
            throw new Error('invalid lovation');
            defaultLocation = value;
        }
    });
}

const circle = new Circle(1);
circle.draw();