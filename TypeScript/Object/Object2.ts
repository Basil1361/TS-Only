type User = {
    name : string,
    age : number,
    location : string
}

const printInfo = (user : User) => {
    return (`My name is ${user.name}. I am ${user.age} years old, living in ${user.location}.`)
}
const data = printInfo({name : "Lelo", age : 4, location :"Australia"})
console.log(data)
