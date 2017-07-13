// Very simple singleton
var Singleton = (function() {
    var instance;
    
    function init() {
        return {
            publicProperty: 'Public property',
            publicMethod: function() {
                console.log('Public method');
            }
        };
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

var instance = Singleton.getInstance(); // retrieves the singleton object

// Singletons can be designed to take options to set themselves up
var Singleton = (function() {
    var instance;

    function init(options) {
        this.name = options.name;
        this.age = options.age;
    }

    return {
        getInstance: function(options) {
            if(!instance) {
                instance = new init(options)
            }
            return instance;
        }
    }
})();

var instance = Singleton.getInstance({ name: 'Williams', age: 25});