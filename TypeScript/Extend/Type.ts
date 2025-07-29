type A2 = {
    name : string
}

type B2 = {
    type : string
}

type C2 = B2 & A2 & {
    theme : string
}

const c2 : C2 = {
    name : "Hola", 
    type : "Boy",
    theme : "French",
}

console.log(c2.name, c2.type, c2.theme)
