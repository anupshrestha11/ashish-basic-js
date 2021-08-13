/* 
? What is DataType?
* type of data like String, Number(Integer, Float, Double, Long Integer), Object, Boolean. 
? String - group of character (alphanumeric - 0 - 9, A - Z)
? Number - Digits (0 - infinty 2^127) Decimal(float)(0.12)
? Boolean - true/false : 1/0 : >0 / <=0
? Object - collection of different kinds of data
? Array - collection data 

? What is Variable?
* assigning named which has value is assigned (let variable_name = 1  :  Variable is variable_name);
* types of variable decleration 
! 1. var (oldest ways of creating variable) functional scope (dont use)
! 2. let  ( block scope) (recommend) (we can mutate the value of the variable) let a = 12; a= 10; (allow)
! 3. const ( block scope) (recommend) (we cannot mutate the value of the varible) const a = 1; a = 2 (error) (constant)

*/

let a = "Hello World"; // variable Declare and assign the value on the variable
// when we use var it will create a hoisting (what is hoisting)
let b; // Variable declare
b = 12; // value assign
console.log(a); // this prints the value on console
console.log(b); // this prints the value on console

// Constant variable ( not mutatable)
const ashish = "Ashish"; // variable declare and value assignment should be done together
const pi = 22 / 7;
console.log(pi); // 3.142857142857143
// a = "Rajiv"

// Boolean
let bool = true;
bool = false;
bool = true;
console.log(bool);
// variable name allowed characters 123, abc and _ (first character must be letter or underscore)
// camelCase
// Object " JSON "
const ashishGasi = {
  name: "Ashish Gasi Shrestha",
  age: 24,
  address: "Bhaktapur",
  isMale: true,
};

console.log(ashishGasi);
console.log(
  "My name is " + ashishGasi.name + ". My age is " + ashishGasi.age + "."
);

//Array
let arr = [1, 2, 3, 4, 5, 6, 7];
//index    0  1  2  3  4  5  6

console.log(arr[0], arr[1], arr[2], arr[5]);

// array methods - next session

// Operators
/* 
? Arthematic Operator - (+, -, *, /, %(reminder)) 
? Conditional/Comparing Operator - (<,>, >= , <=, ==, ===) this operator gives true/false
! 1 == '1' (true only checks value)  1 === '1' (false - checks both value and value type/datatype)(recommended)
? boolean operator - (&& (and), || (OR), ! (Not)) this operator gives true/false
AND Operator
 true && true = true
 true && false = false
 false && false = false
OR Operator
    true || true = true
    true || false = true
    false || false = false
Not operator
  !true = false
  !false = true
*/

console.log(1 == "1"); // true only check value
console.log(1 === "1"); // false checks both value and datatype

const age = 24;

console.log(age > 20 && age < 30);
console.log(age < 20 || age > 20); // true
//          false       true        // true
console.log(age > 20 || age < 20); // true
//          true        false       // true

const isMale = true;

console.log(!!!isMale);
// !!!true = !! (false) = ! (true) = false

// TODO : Task assign value to a & b , add , subtract, multiply, divide, compare > < >= <=
// TODO : Print a string, create a boolean (isYoung, isOld), Not, AND OR
// TODO : Create a simple Object [name ,age, address ,mobile, salary]
