/*
? What is class?
* Class is blueprint of an object.

? What is Object?
* entity/structured data, which has collection of data and methods

! syntax
 DataDeclarator (let/const/var)  object_name = {
 attribute_name : attribute_value,
 attribute_name : attribute_value,
 method_name : method/function
}

*/

// * Person Object without class - important
const person = {
  name: "Ashish Gasi Shrestha",
  age: 25,
  address: "Bhaktapur",
  mobile: 9849280314,
  salary: 12000.5,
  isMarried: false,
  young: function () {
    return this.age > 18 && this.age < 24;
  }, // this === person
  girlfriends: [
    "Mia Khalifa",
    "Dani Daniels",
    "Nicole Aniston",
    "Austin Kincaid",
    "Lisa Ann",
  ],
};

console.log(person);
console.log(person.young()); 
console.log(person.name) 
console.log(person['name']) // same above



// * JSON Object - important
const animal = {
    name: "Bear",
    type: "Mammal",
    danger: true,
    weight: 200,
    "hairy animal" : true
}

console.log(animal["name"])
console.log(animal["hairy animal"])



// Class - blueprint - just understand
class Person {
  constructor(name, age, address, mobile, salary) {
    // * =>  Person("ashish", 25, "bhaktapur", 984858, 94842.25) || Person()
    this.name = name;
    this.age = age;
    this.address = address;
    this.mobile = mobile;
    this.salary = salary;
  }

  young() {
    // method
    return this.age > 18 && this.age < 24;
  }
}

// * create Object using Class
const ashish = new Person();
console.log(ashish);

ashish.name = "Ashish Gasi";
ashish.age = 24;
ashish.address = "Bhalkot";

console.log(ashish);

const anup = new Person("Anup Shrestha", 22, "Bhalkot", 9849280314, 20000.0);
console.log(anup);

console.log(anup.young());

class Rectangle {
    // default value
  constructor({ length = 0, bredth = 0 }) {
    this.length = length;
    this.bredth = bredth;
  }
  area() {
    return this.length * this.bredth;
  }
}

const rect = new Rectangle({ bredth: 10, length: 12 });
console.log(rect, rect.area());








//? addition things on class 
// * 1. Inheritance
// * 2. Encapsulation
// * 3. many more
