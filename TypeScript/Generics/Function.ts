// Regular function
function printValue(item: number, defaultValue: number) {
  return [item, defaultValue];
}
console.log(printValue(3, 5));
// vs

// Generic function
function tryValue<T>(items: T, defVal: T): [T, T] {
  return [items, defVal];
}

const rest = tryValue<number>(10, 20);
console.log(rest)

// Generic function with different types

