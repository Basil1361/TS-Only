// class

interface CarEngine {
    carstart() : void,
    carend() : void,
}

class Cars implements CarEngine{
    carstart() : void {
        console.log("Engine started");
    }
    carend() : void {
        console.log("Engine stopped");
    }
}

const newCar = new Cars
newCar.carstart()
newCar.carend()
