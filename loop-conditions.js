// Loop & Conditions
/* 

* What is Loop?
* Repeat same block of code over and over

* Examples of loops:
* 1. For Loop - 3 part (a. initialization, b. condition, c. modify(increment/decrement)) 
* 2. while loop - 1 part (condition) - loops until the condition satisfies 
* 3. do-while loop - runs 1 time first then checks the condition to run again

*/

// pre-increment/decrement and post-increment/decrement
// pre-increment/decrement -> ++i (adds one before) , --i(subs one before)
// post-increment/decrement -> i++ (adds one after) , i--(subs one after)

// For Loop
for (let i = 0; i < 10; i++){
    console.log("For Loop number " + i)
}

// while loop
let a = 0;
while (a < 10) {
    console.log("While Loop number " + a);
    a++;
}

//do-while loop
let b = 0;
do {
    console.log("do-while loop number " + b)
    b++;
} while (b < 10)

// ForEach loop - array and collection
let arr = ['a', 2, 3, 4, 5, 6, 7]

arr.forEach((item, idx) => {
    console.log("arr "+ item + " of index " + idx)
})
// map
// reduce
// filter
// sort
// slice
// splice

// Conditions
/*
* Every condition must give results as belows:
* true / >=1
* false / <=0

conditions 
1. if-else
2. switch
4. ternary operator

*/

// if-else condition
let age = 9;
if (age > 20) {
    // * Nested If-else
  if (age > 30) {
    console.log("Ashish is too old");
  } else {
      
      console.log("Ashish is adult");
  }
}
// * extended if-else 
else if (age > 10) {
    console.log("Ashish is in teenage")
}
else {
  console.log("Ashish is fucchee");
}

// switch condition
let n = 0
switch (n) {
    case 0:
        console.log("value is 0")
        break;
    case 1:
        console.log("value is 1")
        break;
    case 2:
        console.log("value is 3")
        break;
    default:
        console.log("value is invalid")
        break;
}

// Trenary operator
// syntax
// condit ? true value : false value ;

let state = 11;
let a = state === 10 ? 1 : 2; // dynamic value assignment
console.log(a)

