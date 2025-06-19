function simpleDecorator(target: any) {
    console.log(`simpleDecorator called`);
}

@simpleDecorator
class DecoratedClass {}

function decoratorFactory(name: string) {
    return function(target: Function) {
        console.log(`${name} decorator was called`)
    }
}

@decoratorFactory("factory")
class FactoryDecoratedClass {}

function merge(toMerge: Object) {
    return function(target: any) {
        for(let prop in toMerge) {
            target.prototype[prop] = toMerge[prop];
        }
    }
}

let user = {
    name: `John Smith`,
    age: 22,
    instructor: true
}

@merge(user)
class AnotherDecoratedClass{}

let thing = new AnotherDecoratedClass();

console.log((thing as any).name);

function readOnly(target: any, methodName: string, descriptor?: PropertyDescriptor) {
    descriptor.writable = false;
    descriptor.enumerable = false;
}

class HoldingClass {
    @readOnly
    sayHello() { console.log(`Hello`)}
}

let newThing = new HoldingClass();

newThing.sayHello();

//newThing.sayHello = false;