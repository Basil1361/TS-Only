// without void 
const greet2 = (person = "Anonymous") =>  {
  const message = console.log(`Hello ${person}`);
  return message
}

greet2()

// with void 

function printMessage (message: string) : void {
    console.log(`This is my ${message}`)
}
// returns nothing <<<
printMessage("Dog")