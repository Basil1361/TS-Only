interface A {
    name : string
}

interface B {
    type : string
}

interface C extends B, A {
    theme : string
}

// C is not + B or + A, it means than C is the superset of B and A !

const c : C = {
    name : "Hola", 
    type : "Boy",
    theme : "French",
}

console.log(c.name, c.type, c.theme)
