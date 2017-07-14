var AbstractVehicleFactory = (function() {
    var types = {};

    return {
        getVehicle: function(type, customizations) {
            var Vehicle = types[type];
            return Vehicle ? new Vehicle(customizations) : null;
        },
        registerVehicle: function(type, Vehicle) {
            var proto = Vehicle.prototype;
            // Only register classes that fulfill the vehicle contract
            if(proto.drive && proto.breakDown) {
                types[type] = Vehicle;
            }
            return AbstractVehicleFactory;
        }
    }
})();

// Usage
AbstractVehicleFactory.registerVehicle('car', Car);
AbstractVehicleFactory.registerVehicle('truck', Truck);

var car = AbstractVehicleFactory.getVehicle('car', { color: 'yellow', turbo: true });
var truck = AbstractVehicleFactory.getVehicle('truck', { monsters: true, cylinders: 14 });