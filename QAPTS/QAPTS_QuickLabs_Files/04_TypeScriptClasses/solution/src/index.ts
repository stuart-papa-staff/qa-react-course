// class Vehicle {

//     constructor(private _make: string, private _model: string, private _speed: number = 0) {}

//     get make() {
//         return this._make;
//     }

//     get model() {
//         return this._model;
//     }

//     get speed() {
//         return this._speed;
//     }

//     set speed(delta: number) {
//         if(this._speed + delta > 0) {
//             this._speed = this._speed + delta;
//         }
//         else {
//             this._speed = 0;
//         }
//     }
// }

// let myVehicle: Vehicle = new Vehicle(`Shelby`, `Mustang`);
// console.log(myVehicle);
// console.log(myVehicle.speed);
// myVehicle.speed = 100;
// console.log(myVehicle.speed);
// myVehicle.speed = -75;
// console.log(myVehicle.speed);
// myVehicle.speed = -100;
// console.log(myVehicle.speed);
// // myVehicle._speed = 0;

// class RoadVehicle extends Vehicle {

//     constructor(_make: string, _model: string, private _wheels: number = 4) {
//         super(_make, _model);
//     }

//     get wheels() {
//         return this._wheels;
//     }
// }

// let myRoadVehicle = new RoadVehicle(`Shelby`, `Mustang`);

// console.log(`My ${myRoadVehicle.make} ${myRoadVehicle.model} has ${myRoadVehicle.wheels} wheels and is going at ${myRoadVehicle.speed} mph.`);
// myRoadVehicle.speed = 75;
// console.log(`My ${myRoadVehicle.make} ${myRoadVehicle.model} has ${myRoadVehicle.wheels} wheels and is going at ${myRoadVehicle.speed} mph.`);

// Code for parts 10-12 below
abstract class Vehicle {

    constructor(private _make: string, private _model: string, protected _speed: number = 0) {}

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    abstract get speed();

    abstract set speed(delta: number);
        
}

class RoadVehicle extends Vehicle {

    constructor(_make: string, _model: string, private _wheels: number = 4) {
        super(_make, _model);
    }

    get wheels() {
        return this._wheels;
    }

    get speed() {
        return this._speed;
    }

    set speed(delta: number) {
        if(this._speed + delta > 0) {
            this._speed = this._speed + delta;
        }
        else {
            this._speed = 0;
        }
    }
}


let myRoadVehicle = new RoadVehicle(`Shelby`, `Mustang`);

console.log(`My ${myRoadVehicle.make} ${myRoadVehicle.model} has ${myRoadVehicle.wheels} wheels and is going at ${myRoadVehicle.speed} mph.`);
myRoadVehicle.speed = 75;
console.log(`My ${myRoadVehicle.make} ${myRoadVehicle.model} has ${myRoadVehicle.wheels} wheels and is going at ${myRoadVehicle.speed} mph.`);