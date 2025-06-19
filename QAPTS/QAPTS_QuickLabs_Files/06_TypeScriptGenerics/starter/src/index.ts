class Circle {
    constructor(public radius: number, public center: [number, number]) {}
}

abstract class Vehicle {
    constructor(public make: string, public model: string, public speed = 0) {}
}

interface RoadVehicle {
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
