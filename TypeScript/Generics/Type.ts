// Simplified

type ApiResponse<Data> = {
  data: Data;
  isFaulty: boolean;
  conclude(): void;
};

type UserResponse = ApiResponse<{ name: string; year: number }>;

const Unit: UserResponse = {
  data: {
    name: "LaptopA",
    year: 2018,
  },
  isFaulty: true,
  conclude() {
    console.log(Unit.data.name, Unit.data.year, Unit.isFaulty);
  },
};

Unit.conclude();

// problem is, any is almost not recommended.
// create your own generic
//<---------------------------------------------------------------------------------------------------------------------------------->//
// You can also type to be default

type General<Data = { name: string }> = {
  data: Data;
};

const TakeVal: General = {
  data: {
    name: "Buzz",
  },
};

console.log(TakeVal.data.name);
//<---------------------------------------------------------------------------------------------------------------------------------->//
// How about setting default to not an object?

type Fixed<Data extends string = string> = {
  data: Data;
};

const fixedVal: Fixed = {
  data: "Hi",
};

console.log(fixedVal.data);
