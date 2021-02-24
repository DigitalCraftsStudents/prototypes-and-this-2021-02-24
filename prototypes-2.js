/*
The keyword `this` refers to the instance of the type.

In a constructor function, the `this` keyword allows you to customize the instance being created. You can attach properties and methods to the instance.

In a prototype method, you can refer to the specific instance using the keyword `this`.

`this` is also known as the owner (or caller) of the method.

What makes a function a constructor? Nothing in particular!
It's in the way you use it:
- you do stuff with `this` inside of the function
- you call it with `new`, which tells JavaScript to auto-magically return the `this` object.

What is `this` outside of a constructor or a prototype method?
It refers to the `global` object. In node, that's a special object that has all the "built-in" functions and properties.

What is the global `this` in a browser?!
It's the `window` object.

The global object is an instance of new Object.
It has some custom properties and methods specific to "running" your JavaScript (e.g., it has console, setTimeout, setInterval, etc.). These are not on Object.prototype
*/

function Cat(name) {    // Cat is a "constructor" function.
    // What is this?!
    this.name = name;
    this.hasClaws = true;
    this.toys = [];
    // Why is there no return?!
    // It's auto-magic if you use `new`

    // DO NOT DO THIS:
    //return this; // It returns the global object
}
// Adding a .meow method to Cat
Cat.prototype.meow = function () {
    console.log('inside meow==========================');
    console.log(this);
    console.log(`Hi my name is ${this.name}`);
    console.log('end of meow==========================');
};

const oakley = new Cat('oakley');
oakley.meow(); // "Hi my name is oakley"
console.log(`Oakley's name is ${oakley.name}`);


const milla = new Cat('milla');
milla.meow(); // "Hi my name is milla"
console.log(`Milla's name is ${milla.name}`);

// Explicitly not using the `new` keyword!!!!
// const chrisaquino = Cat('chris'); // `this` is the "global" obj in node
// console.log(chrisaquino);
// chrisaquino.meow();
// console.log(`ChrisAquino's name is ${chrisaquino.name}`);