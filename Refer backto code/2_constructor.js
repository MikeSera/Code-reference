//constructor 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`; 
    }
}

//instantiate an object
const book1 = new Book('How to sing', 'adrianna Figorora', '2019');
const book2 = new Book('Opening this pit', 'Jack', '2020');

console.log(book2);



