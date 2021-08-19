// * Functions

/* 

? What is function / methods?
* 

 */



function greatest(a,b,c) {
    return (a > b) ? (a > c ? a : c) : (b> c ? b : c)
}
console.log(greatest(1,5,3))