/*
The `this` keyword is also known as "the context object".

You can manipulate it using .bind, .call, and .apply.

When would you do this?
When you're writing a library.

*/

/*
You can manually assign the `this` keyword using:
- .bind() - returns a copy of the fn
- .call() - calls the function
- .apply() - calls the function

.call and .apply let you pass in the arguments that the function was originally expecting, but:
- with .call, you list them out like normal
- with .apply, you pass them in as an arry

*/

// show ownership and borrowing
// difference between arrow and regular function

const apartment = {
    occupants: [
        'oakley',
        'milla'
    ],
    rentDue: 12345.99,
    print: function () {
        console.log(this.occupants);
        console.log(`They owe ${this.rentDue}`);
    }
};

const house = {
    occupants: [
        'chris'
    ],
    rentDue: 0
}

// console.log(apartment.occupants);
// console.log(apartment.rentDue);
// apartment.print();
// console.log('==========');

// const housePrint = apartment.print.bind(house); // bind the `this` keyword to `house`
// housePrint();

// console.log('==========');
// apartment.print.apply(house);
// apartment.print.call(house);

const payments = {
    amounts: [10, 10, 5, 7],
    make: function (discount) {
        let sum = this.amounts.reduce((acc, n) => acc + n, 0);
        if (discount) {
            sum = sum - (sum * discount);
        }
        return sum;
    }
}
const p2 = {
    amounts: [20, 20, 3, 7]
}

const p2MakePayments = payments.make.bind(p2);
console.log(p2MakePayments());
console.log(p2MakePayments(.5));

const p2MakePaymentsWithDiscount = payments.make.bind(p2, .5);
console.log(p2MakePaymentsWithDiscount());
console.log('=====================');


console.log(payments.make.apply(p2));
console.log(payments.make.apply(p2, [.5]));

console.log(payments.make.call(p2));
console.log(payments.make.call(p2, .5));


