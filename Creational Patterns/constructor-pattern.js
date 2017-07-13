// Basic constructor function
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    // This object gets redefined for each new object created
    // This method has to be shared among created objects
    this.toString = function() {
        return this.model + ' has done ' + this.miles + ' miles';
    }
}


// Constructors with prototypes
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// A single instance will be shared between all instances of Car
Car.prototype.toString = function() {
    return this.model + ' has done ' + this.miles + ' miles';
}

var civic = new Car('Honda', 2014, 1000);
var corolla = new Car('Toyota', 2015, 2000);