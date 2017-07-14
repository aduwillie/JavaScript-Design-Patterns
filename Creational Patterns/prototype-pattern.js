// Simple object
var someCar = {
    name: 'Corolla',
    drive: function() {
        console.log('Driving!');
    }
};

var anotherCar1 = Object.create(someCar);       // Simple  prototypical inheritance
// Note: Properties can be initialized on the second property to Object.create
var anotherCar2 = Object.create(someCar, {      // Prototypical inheritance with defaults (differential)
    'id': {
        value: 'Some unique id',
        enumerable: true
    },
    'model': {
        value: 'Another unique id',
        enumerable: true
    }
});

// Prototypical inheritance without Object.create
// With this approach, you can't define readonly properties
var vehiclePrototype = {
    init: function(carModel) {
        this.model = carModel;
    },
    getModel: function() {
        return this.model;
    }
};

function Vehicle(model) {
    function F() {};
    F.prototype = vehiclePrototype;

    var f = new F();

    f.init(model);
    return f;
}

var car = new Vehicle('Ford');
car.getModel();

//  A third option to prototypical inheritance
var beget = (function() {
    function F() {};

    return function(proto) {
        F.prototype = proto;
        return new F();
    }
})();