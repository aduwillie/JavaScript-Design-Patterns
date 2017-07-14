// Starting up with the initially created Car class (Constructor injection)
// Constructors with prototypes
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// A single instance will be shared between all instances of Car
Car.prototype.toString = function () {
    return this.model + ' has done ' + this.miles + ' miles';
}

var civic = new Car('Honda', 2014, 1000);
var corolla = new Car('Toyota', 2015, 2000);

// Create a Truck 'class'
function Truck(monster, cylinders) {
    // Dummy
}

// Factory Pattern
function VehicleFactory() {
    VehicleFactory.prototype.vehicleClass = Car;
    VehicleFactory.prototype.getVehicle = function(options) {
        return new this.vehicleClass(options);
    }
}
var carFactory = new VehicleFactory();
var car = carFactory.getVehicle({ model: 'Corolla', year: 2014, miles: 10000 });
console.log(car instanceof Car);  // => True

// Approach #1: Modify vehicleClass to now use Truck
carFactory.vehicleClass = Truck;

var mover = carFactory.getVehicle({ model: 'Tippa', year: 1990, miles: 10 });
console.log(mover instanceof Truck);

// Approach #2: Subclass the VehicleFactory to create a factory that builds trucks
function TruckFactory() {
    TruckFactory.prototype = new VehicleFactory();
    TruckFactory.vehicleClass = Truck;
}

var truckFactory = new TruckFactory();
var bigFoot = truckFactory.getVehicle({ monster: true, cylinders: 12 });
console.log(bigFoot instanceof Truck);

//  When to use factory pattern
//      1. Object's setup requires high level of complexity
//      2. Generate different instances depending on the environment
//      3. Working with many small objects that share the same properties
//      4. Composing classes with instances of other classes that need only satisfy an API contract