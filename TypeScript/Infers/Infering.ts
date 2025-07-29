function add (a : number, b : number) : number {
    return a + b
}

type ValueTypes = MyReturn <typeof add>

type AnswerType = ValueTypes extends number ? 1 : 0
// This will print 1 because ValueTypes is number (inferred from add function's return type)

type MyReturn <T> = T extends (...args: any[]) => infer R ? R : never

