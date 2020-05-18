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

//Magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Innherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//inmstantiate magazine object
const mag1 = new Magazine('Mag one', 'Jack', '2017', 'Jan');

//use magazine constructor
Magazine.prototype.constructor = Magazine;



console.log(mag1);


