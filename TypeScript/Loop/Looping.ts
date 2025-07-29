type O = {
  name: string;
  info: number;
};

type NewLoop<T> = {
  [P in keyof T]: T[P];
};
// [P in keyof T] : string
// Explanation: This type will convert all properties of T to string type
// So if T has properties like name, info, etc., they will all be converted to string type

// [P in keyof T] : T[P] gives us the parameter type of T

// T[P] extends string ? string : number;
// Explanation: This type will convert all properties of T to string type if they are strings

// [P in keyof T] : P
// name : "name", info : "info"

const f: NewLoop<O> = {
  name: "Hello",
  info: 5
};
// What does this do?
// It creates a new object 'a' of type NewLoop<O> where all properties are strings.

// What if there are readonly, public, protected, and private properties?

type Properties2 = {
  location: string;
  readonly isMarried: boolean;
  baixo? : string;
};

type NewLoop2 <T> = {
   -readonly [P in keyof T] -? : T[P]
}

const b : NewLoop2<Properties2> = {
    isMarried : true,
    location : "",
    baixo : "Boxe"
}

// Now baixo is a must to add. 

b.location = "Hello"
// Now I can rename it because I removed it
