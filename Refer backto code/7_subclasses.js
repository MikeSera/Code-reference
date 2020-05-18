class Book {
    constructor(title, author, year) {
        this.title = title;
        this.year = year;
        this.author = author;
    }

    getSummary() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`; 
    }    
}

//Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Shredding monthly', 'Jules and Jack', 
'2018', 'Jan');

console.log(mag1.getSummary())

