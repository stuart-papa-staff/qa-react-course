class Circle {
    constructor(public radius: number, public center: [number, number]) {}
}

abstract class Vehicle {
    constructor(public make: string, public model: string, public speed = 0) {}
}

interface RoadVehicle extends Vehicle {
    wheels: number;
    taxed: boolean;
}

class Car extends Vehicle implements RoadVehicle{
    wheels: number;
    taxed: boolean;

    constructor(make: string, model: string, wheels: number, taxed: boolean) {
        super(make,model);
        this.wheels = wheels;
        this.taxed = taxed;
    }
}

class Bus extends Vehicle implements RoadVehicle {
    wheels: number;
    taxed: boolean;

    constructor(make: string, model: string, wheels: number, taxed: boolean) {
        super(make, model);
        this.wheels = wheels;
        this.taxed = taxed;
    }
}

class Plane extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model);
    }
}

class Garage<T> {
    garage: T[] = [];
    
    park(aThing: T) {
        this.garage.push(aThing);
        // console.log(this.garage[0].speed); // Initially T may not be a Vehicle so it may not have a speed property
    }
}

class VehicleGarage<T extends Vehicle> {
    vehicleGarage: T[] = [];

    park(vehicle: T) {
        this.vehicleGarage.push(vehicle);
        this.vehicleGarage[0].speed = 0;              // Allow as T must be a subclass of Vehicle
        //console.log(this.vehicleGarage[0].taxed);     // Not allowed as T may not implement Road Vehicle
    }

}

class RoadVehicleGarage<T extends RoadVehicle> {
    roadVehicleGarage: T[] = [];

    park(roadVehicle: T) {
        this.roadVehicleGarage.push(roadVehicle);
        this.roadVehicleGarage[0].speed = 0;
        console.log(this.roadVehicleGarage[0].taxed);
    }
}

let myCircle = new Circle(5, [0, 0]);
let myCar = new Car (`Shelby`, `Mustang`, 4, true);
let myBus = new Bus (`Volvo`, `B9R`, 6, false);
let myPlane = new Plane (`Boeing`, `747`);

let myGarage = new Garage();
let myVehicleGarage = new VehicleGarage();
let myRoadVehicleGarage = new RoadVehicleGarage();

myGarage.park(myCircle);
myGarage.park(myCar);
myGarage.park(myBus);
myGarage.park(myPlane);

// myVehicleGarage.park(myCircle);
myVehicleGarage.park(myCar);
myVehicleGarage.park(myBus);
myVehicleGarage.park(myPlane);

// myRoadVehicleGarage.park(myCircle);
myRoadVehicleGarage.park(myCar);
myRoadVehicleGarage.park(myBus);
// myRoadVehicleGarage.park(myPlane);

function logVehicleGarage<T extends Vehicle>(anyVehicleGarage: T[]): void {
    console.log(anyVehicleGarage);
}

// logVehicleGarage(myGarage.something);
logVehicleGarage(myVehicleGarage.vehicleGarage);
logVehicleGarage(myRoadVehicleGarage.roadVehicleGarage);




