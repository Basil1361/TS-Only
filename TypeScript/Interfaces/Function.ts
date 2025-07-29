import { link } from "node:fs";

interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
console.log(add(5, 3));

interface MathOperator {
  a: number;
  b: number;
}

function subtracts(values: MathOperator): number {
  return values.a - values.b;
}

console.log(subtracts({ a: 5, b: 3 })); // → 2

/* ------------------------------------------------------------------------------------------------------------------------------------------*/

interface Person {
  firstname: string;
  secondname: string;
  lastname: string;
  sayHello(): void;
}

function greetme(person: Person) {
  let hey = console.log(
    `${person.firstname} ${person.secondname} ${person.lastname} said: `
  );
  person.sayHello();
  return hey;
}

const John: Person = {
  firstname: "Jaice",
  secondname: "Hungary",
  lastname: "Bandicam",
  sayHello() {
    console.log("Heya");
  },
};

greetme(John);

/*--------------------------------------------------------------------------------------------------*/
interface Movies {
  readonly title: string;
  price: number;
  rating: number;
  reviewed?(who: string, comments: string, dataofReview: string): string;
}

interface Genre extends Movies {
  genre: string;
}
// or type Genre = Movies & { genre: string };

const theme: Genre = {
  title: "Demon Slayer Infinity Castle",
  price: 10,
  rating: 0.8, // you can use 0.8 instead of 8/10
  genre: "action",
  reviewed(who, comments, dateOfReview) {
    return `Reviewed by ${who} on ${dateOfReview}: ${comments}`;
  },
};

if (theme.reviewed) {
  console.log(theme.reviewed("Critic", "A masterpiece!", "2025-07-24"));
}

