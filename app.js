class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    displayInfo() {
        console.log(`name: ${this.model};
        year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type}:`);
    }
}

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I am starting transporting passendger`);
    }
    
}

class Truck extends Vehicle {
    constructor(carModel,carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truc";
    }

    transportContainer() {
        console.log(`I am starting transportig heavy container`);
    }
    
    static staticTransport() {
        console.log(`I am static method`);
    }
}

class Bus extends Vehicle {
    constructor(carModel,carYear, maxSpeed){
        super(carModel, carYear, maxSpeed);
        this.type = "bus";
       }
    displayInfo() {
        console.log(`model: ${this.model}`);
        }
}

let vehicle = new Vehicle("test", 1990, 120);
vehicle.displayInfo();

let car = new Car("testCar",'',250);
console.log(car);
car.transportPeople();
//Call method of father’s class
car.displayInfo(); 

let truck = new Truck("Man", 2000, 120);
truck.displayInfo();
truck.transportContainer();

//Add static method to one class, try to call it and investigate output.
Truck.staticTransport();

//Override method of father’s class.
let bus = new Bus("Volvo",1997,90)
bus.displayInfo();
