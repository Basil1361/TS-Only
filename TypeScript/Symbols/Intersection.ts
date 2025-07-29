type user = {
    name : string
    id : number
}

type info = {
    religion : string
    isHealthy : boolean
}

type data = user & info

const Variables : data = {
    name : "Alice",
    id : 17,
    religion : "Buddist",
    isHealthy : true
}

console.log(Variables)

// & (and)