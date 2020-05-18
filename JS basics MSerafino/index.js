
/* cannot be a reserved keyword
should be meaningful
cannot start with a number (1name)
cannot containt a space or hyphen (-)
are case-sensitive
*/

let firstName = 'Jack'; //use let instead of var cause of issues with var
let lastName = 'lets open up this pit dude'; //String literal
//let age = 30; //number literal
let isApproved = true; //Boolean literal
let name = undefined;
let selectedColor = null;

/* *************** */
/*

let person = {
    firstName: 'Jack',
    age: 25
};

//two ways to work with this property
//Dot notation
person.firstName = 'Jules';
console.log(person.firstName);
//more concise, shorter, generally what you'll usually choose. 

//Bracket notation
person['name'] = 'Adri';
console.log(person.name);
//may not know the name of the target property until run time.
//with this notation, we can access that property with bracket notation
//let selection = 'name';
//person[selection] = 'Mary';

//console.log(person);

*/
/* ************* */

const interestRate = 0.3; //if you don't need to reassign, const is best choice. 
//interestRate = 1; //will return an error
//console.log(interestRate);

//control + L to clear console in chrome

/* *************** */

/*
let selectedColors = ['red', 'blue'];
selectedColors[2] = '1';
console.log(selectedColors.length);
*/

/* *************** */

//displays the name of someone on the console
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Jack', 'Lets open up this pit dude');
greet('Jules'); //no value passed makes it undefined

//calculating a value
function square(number) {
    return number * number;
}

//square(2);
//let number = square(2);
//console.log(number);
console.log(square(2));
//function is a set of statements 
//that perform a set of tasks or returns a value.