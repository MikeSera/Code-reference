//Object Of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`; 
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
    }
}

// Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Opening up this pit, a biography'
// book1.author = 'Jack'
// book1.year = '2017'


//other method for this
const book1 = Object.create(bookProtos, {
    title: { value: 'stupid sad'},
    author: { value: 'Jules'},
    year: { value: '2018'}
});

console.log(book1);


