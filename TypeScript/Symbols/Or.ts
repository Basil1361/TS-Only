type general = {
  name: string;
  id: number;
};
type passkey = {
  email: string;
  password: string | number;
};

type final = general | passkey;

const usefulData: final = {
  email: "whatever@gmail.com",
  password: "whatever1234",
};

console.log(usefulData);

// you can also:

// const usefulData : final = {
//     name : "whatever",
//     id : 123
// }

// console.log(usefulData)

var items: (number | string)[] = [1, 2, 3, "san", "moshi-moshi"];
console.log(items);
