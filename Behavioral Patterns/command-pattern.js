// A very bad implementation of the command pattern. It's just basic implementation
(function () {
    var CarManager = {
        // Request information
        requestInfo: function (model, id) {
            return 'The information for ' + model + ' with id ' + id + ' is foobar';
        },
        // Purchase a vehicle
        buyVehicle: function (model, id) {
            return 'You have successfully purchased item with id: ' + id + ' of ' + model;
        },
        // Arrange a viewing
        arrangeView: function (model, id) {
            return 'You have successfully booked a viewing of ' + model + ' ( ' + id + ')';
        }
    };

    // To be achieved. The above implementation of the command pattern has to be extended.
    CarManager.execute('buyVehicle', 'Ford Escort', '1234');
    CarManager.execute = function (name) {
        return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
    }

    CarManager.execute('arrangeView', 'Corolla', '4569');
    CarManager.execute('requestInfo', 'Ford', '3951');
    CarManager.execute('buyVehicle', 'Corolla', '5421');

})();