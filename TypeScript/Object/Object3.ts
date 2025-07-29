// Optional object
// Just add a ?
// Example 1

type value = {
  name: string;
  age: number;
  isPregnant: boolean;
  genderReveal?: boolean;
}

function Data(patient: value) {
  return `Her name is ${patient.name}, Her Age is ${patient.age}. Is she pregnant? ${patient.isPregnant}. Gender reveal? ${patient.genderReveal}`;
}

let result1 = Data({ name: "Alea", age: 17, isPregnant: false });
let result2 = Data({
  name: "Elmia",
  age: 20,
  isPregnant: true,
  genderReveal: true,
});


console.log(result1);
console.log(result2);

// readonly property: 

