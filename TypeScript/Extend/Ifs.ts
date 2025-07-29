// Generic conditional type that checks if T extends string
// If T is a string, value will be string type, otherwise number type
type Generic<T> = {
    value: T extends string ? string : number;
}

// Custom type is a union type that can be either:
// 1. An object with 'anything' property of type number
// 2. A string
type Custom = {
    anything: number;
} | string;

// Since Custom is a union type that includes string,
// the Generic<Custom> resolves to { value: string }
// This is because when evaluating a union type in a conditional,
// if any part of the union satisfies the condition, it's true
const result: Generic<Custom> = {
    value: "Hello", // Valid because string part of Custom extends string
}

// Outputs "Hello"
console.log(result.value)