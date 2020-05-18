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

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }


    static topBookStore() {
        return 'Music hits';
    }
    
}


//Instantiate object
const book1 = new Book('Einsteins theory of whatever', 'Jules', '2015');

// console.log(book1);
// book1.revise('2018');
// console.log(book1);

//need to run static functions on the actual functions,
//not the instantiated object
console.log(Book.topBookStore());



