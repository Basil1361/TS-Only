// Generic function with multiple type parameters

/**
 * Gets the first element of an array, or returns a default value if the array is empty.
 * @param items The array of items.
 * @param defVal The default value to return if the array is empty.
 * @returns The first item of the array, or the default value.
 */
function getFirst<T, U>(items: T[], defVal: U): T | U {
  return items.length > 0 ? items[0] : defVal;
}

// --- Example Usage ---

// 1. Array of strings, default value is a number (as per your request)
const stringArray: string[] = ['apple', 'banana', 'cherry'];
const defaultNumber: number = 0;

const result1 = getFirst(stringArray, defaultNumber);
console.log(`Result 1: ${result1}`); // Output: Result 1: apple (type is string)

const emptyStringArray: string[] = [];
const result2 = getFirst(emptyStringArray, defaultNumber);
console.log(`Result 2: ${result2}`); // Output: Result 2: 0 (type is number)


// 2. Array of numbers, default value is a string
const numberArray: number[] = [10, 20, 30];
const defaultString: string = "none";

const result3 = getFirst(numberArray, defaultString);
console.log(`Result 3: ${result3}`); // Output: Result 3: 10 (type is number)

const emptyNumberArray: number[] = [];
const result4 = getFirst(emptyNumberArray, defaultString);
console.log(`Result 4: ${result4}`); // Output: Result 4: none (type is string)

// 3. TypeScript can also infer the types automatically without explicit declaration
const mixedResult = getFirst(['a', 'b'], false); // T is inferred as string, U is inferred as boolean
console.log(`Mixed Result: ${mixedResult}`); // Output: Mixed Result: a
