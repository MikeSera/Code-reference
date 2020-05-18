//  const s1 = 'Hello';
// console.log(typeof s1); //this is string

//  const s2 = new String('Hello')
//  console.log(typeof s2); //this is object

// console.log(window);
// window.alert("yes");

// console.log(navigator.appVersion); //this is an object, not a property

// **************************

const book1 = {
    title: 'how to headbang',
    author: 'Jack',
    year: '2020',
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`; 
        //using back quotes so you don't have to do a bunch of concatenation
    }
};

const book2 = {
    title: 'Making badass music',
    author: 'Jules',
    year: '2019',
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`; 
        //using back quotes so you don't have to do a bunch of concatenation
    }
};

// console.log(book2.getSummary());
console.log(Object.values(book2)); //gives an array of values inside
console.log(Object.keys(book2));


