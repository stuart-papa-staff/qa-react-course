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

interface HasPassengers {
    
    readonly passengerSeats: number;
    makeStop(numberOn: number, numberOff: number): void;

}

class SingleDeckerBus extends RoadVehicle implements HasPassengers {

    constructor(_make: string, _model: string, _wheels: number, readonly passengerSeats = 52, private _passengersOnBoard = 0) {
        super(_make, _model, _wheels);
    }

    get passengersOnBoard() {
        return this._passengersOnBoard;
    }

    public makeStop(numberOn: number, numberOff: number) : void {
        if((this._passengersOnBoard + (numberOn - numberOff)) >= 0) {
            this._passengersOnBoard += (numberOn - numberOff)
        }
        else {
            this._passengersOnBoard = 0;
        }
    }
}

class Train extends Vehicle implements HasPassengers {
    
    constructor(_make: string, _model: string, readonly passengerSeats = 622, private _passengersOnBoard = 0) {
        super(_make, _model);
    }

    get passengersOnBoard() {
        return this._passengersOnBoard;
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

    public makeStop(numberOn: number, numberOff: number): void {
        if((this._passengersOnBoard + (numberOn - numberOff)) >= 0) {
            if((this._passengersOnBoard + (numberOn - numberOff)) <= this.passengerSeats) {
                this._passengersOnBoard += (numberOn - numberOff)
            }
            else {
                this._passengersOnBoard = this.passengerSeats;
            }
        }
        else {
            this._passengersOnBoard = 0;
        }
    }
}

let myBus = new SingleDeckerBus(`Volvo`, `B9R`, 6);
console.log(`At the start of the journey, the bus had ${myBus.passengersOnBoard} on board.`);
myBus.makeStop(8, 0);
console.log(`At the first stop, 8 people got on and 0 people got off - there was now ${myBus.passengersOnBoard} on board`);
myBus.makeStop(22, 4);
console.log(`At the second stop, 22 people got on and 4 people got off - there was now ${myBus.passengersOnBoard} on board`);

let myTrain = new Train(`Bombardier`, `LRC`);
console.log(`At the start of the journey, the train had ${myTrain.passengersOnBoard} on board.`);
myTrain.makeStop(210, 0);
console.log(`At the first stop, 210 people got on and 0 people got off - there was now ${myTrain.passengersOnBoard} on board`);
myTrain.makeStop(183, 45);
console.log(`At the second stop, 183 people got on and 45 people got off - there was now ${myTrain.passengersOnBoard} on board`);

