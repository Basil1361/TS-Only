// Basically says: If you pass a string, it will return a string, if you pass a number,
//  it will return a number,
//  otherwise it will return undefined.
type CustomType<T> = T extends string ? string : T extends number ? number : undefined

let strVar : CustomType<string> = "Hello"; // strVar is of type string
console.log(strVar); // Output: Hello