var person: { firstname: string, lastName: string, age: number } = {
  firstname: "Helium",
  lastName: "Barter",
  age: 15,
};

console.log(
  `Name: ${person.firstname} ${person.lastName}`,
  `Age: ${person.age}`
);

// Note: you have to call every var, or else you will not be able to call the function

function printUser(): { name: string; age: number; isMale: boolean } {
  return {
    name: "BaoBao",
    age: 18,
    isMale: false,
  }
}

let res = printUser() 
console.log(res)
