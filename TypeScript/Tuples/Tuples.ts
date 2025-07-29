// Assigning fixed elements
// destructuring in an array

var myTuples : [string, number] = ["Hello", 12]
    let [first, second] = myTuples 
console.log(first)
console.log(second)
//or 
// console.log(myTuples[0])
// console.log(myTuples[1])


var Tuples2 : (string | number)[] = ["Hello", 20, 30]
    console.log(Tuples2[0])