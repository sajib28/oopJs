// function Person(name, email){
//    this.name = name;
//    this.email = email;
//    this.print =function(){
//        console.log('Name = '+this.name);
//    }
    
// }
// var p1 = new Person("Sajib","sajibcse28@gmail.com");
// var p2 = new Person("Kishore","Kishore@gmail.com");
// var p3 = new Person("Shovon","shovon@gmail.com");

// var people = [p1,p2,p3];
// console.log(people);

// people.forEach(function(person) {
//     console.log('Email = ' +person.email);
//     person.print();
// });

// for(var props in p1){
//     console.log("Properties =" +props);
    
// }

function Book(name, author, price){
this.name = name;
this.author = author;
this.price = price;
}
var book = new Book("Js","Pc Das",200);
console.log(book.constructor);