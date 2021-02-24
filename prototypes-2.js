/*
The keyword `this` refers to the instance of the type.

In a constructor function, the `this` keyword allows you to customize the instance being created. You can attach properties and methods to the instance.

In a prototype method, you can refer to the specific instance using the keyword `this`.

`this` is also known as the owner (or caller) of the method.
*/

function Cat(name) {    // Cat is a "constructor" function.
    // What is this?!
    this.name = name;
    // Why is there no return?!
}
// Adding a .meow method to Cat
Cat.prototype.meow = function () {
    console.log(`Hi my name is ${this.name}`);
};

const oakley = new Cat('oakley');
oakley.meow(); // "Hi my name is oakley"
console.log(`Oakley's name is ${oakley.name}`);


const milla = new Cat('milla');
milla.meow(); // "Hi my name is milla"
console.log(`Milla's name is ${milla.name}`);