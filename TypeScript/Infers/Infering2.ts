type Cosmetic<T> = T extends Array<infer R> ? R : never;
// In simpler terms: "If the input type is any kind of array,
// give me a string type; otherwise, give me the `never` type."
// if it's not an array, then also returns never

const datas = ["heya", "wassup", 234, { value: true }];

type Actual = Cosmetic<typeof datas>;

// You can edit the T so that it's always a function, array, or not anything else
// This case, it's a function
type FunctionReturns<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

  
