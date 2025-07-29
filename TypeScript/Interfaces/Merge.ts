// Merger

interface Car {
    module : string
    engine : string
    start() : void
}

// declaration merging 
interface Car {
    popularin : string
    expensiveness? : boolean
    stop() : void
}

const Brand : Car = {
    module : "BMW M4",
    engine : "V8",
    popularin : "Everywhere",
    start() {console.log(`${Brand.module}.${Brand.engine},${Brand.popularin}. Founded in 1986`)},
    stop() {console.log(`${Brand.module}.${Brand.engine}.${Brand.popularin}. Stop Producing in 202X`)},
}

Brand.start()
Brand.stop()

// now Car has these properties
// module
// engine 
// price
// popularin
// expensiveness