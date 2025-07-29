// specifics: In detail.
type KeySplitter<T> = T extends `${infer K}:${infer I}`
  ? {
      key: K extends string ? string : never;
      index: I extends string ? number : never;
    }
  : never;

type compiling =  KeySplitter<"string:number">

const CompileType: compiling = {
  key: "Hello", 
  index: 2,
};

console.log(CompileType.key)