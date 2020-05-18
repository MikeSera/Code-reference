//constructor 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// GetSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by 
        ${this.author} in ${this.year}`; 
};

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise / Change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;

}

//instantiate an object
const book1 = new Book('How to sing', 'adrianna Figorora', '2016');
const book2 = new Book('Opening this pit', 'Jack', '2018');

console.log(book2);
book2.revise('2019');
console.log(book2);

//we wanna use author and year for every book, but we might
//not want summary for every book, hence why we store it in the protoype.

