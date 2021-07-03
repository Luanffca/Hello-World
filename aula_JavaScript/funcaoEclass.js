// Função
// function sayHello(name){
//     console.log('Hello ' + name)
// }

// sayHello("Luan");

// function sum(a,b){
//     return a + b
// }

// console.log(sum(7, 3));

// clase

// class book{
//     constructor(title, author, pages){
//         this.title = title;
//         this.author = author;
//         this.pages = pages;  
//     }
//     read(){
//         return `Estou lendo ${this.title}`
//     }   
// }

// let Book = new book("Algoritmos para viver", "Brian", 500);
// let oBook = new book("Game of Thones", "GEORGE R.R. MARTIN", 590);

// console.log(oBook.read())

// class ITBook extends book{
//     constructor(title, author, pages, technology){
//         super(title, author, pages);
//         this.technology = technology;
//     }
// }

// let itbook = new ITBook("Algoritmos para viver", "Brian", 500, "Algoritmos");

// console.log(itbook.title);

class Person{
    constructor(name){
        this._name= name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}

let person = new Person("Luan");
person.name = "Lu"
console.log(person.name)