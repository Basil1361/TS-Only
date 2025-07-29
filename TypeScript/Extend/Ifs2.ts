// Define the properties we want to check
type Properties = 'id' | 'name' | 'age' | 'email';

// Mapped type that applies conditions to all properties
type Generics<T> = {
    [P in Properties]: T extends string ? string 
                    : T extends number ? number 
                    : boolean
}

// Example usage
const stringExample: Generics<string> = {
    id: "123",        // all properties become string
    name: "text",
    age: "25",
    email: "test@example.com"
}

const numberExample: Generics<number> = {
    id: 123,          // all properties become number
    name: 456,
    age: 789,
    email: 101
}

const otherExample: Generics<boolean> = {
    id: false,        // all properties become boolean
    name: true,
    age: false,
    email: true
}