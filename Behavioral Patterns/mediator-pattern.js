// Basic mediator implementation
var mediator = (function() {
    // Storage for topics/events
    var channels = {};

    // Subscribe to an event and provide a callback when event broadcasted
    var subscribe = function(channel, callback) {
        if(!channels[channel]) {
            channels[channel] = [];
        }
        channels[channel].push({
            context: this,
            callback: callback
        });
        return this;
    };

    // Publish or broadcast events
    var publish = function(channel) {
        if(!channels[channel]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        for(var i = 0; i < channels[channel].length; i++) {
            var subscription = channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };

    return {
        publish: publish,
        subscribe: subscribe,
        installTo: function(obj) {
            obj.subscribe = subscribe,
            obj.publish = publish
        }
    };
})();

 (function(m) {
    var person = 'Williams Adu';
    
    // Subscribe to a topic called 'name_change'
    m.subscribe('name_change', function(arg) {
        console.log(person); // Get current person ---- Williams Adu
        person = arg; // Set person whenever topic/channel is published
        console.log(person) // Get newly set person --- Obed Adu
    });

    // Publish a new topic/channel
    m.publish('name_change', 'Obed Adu');
 })(mediator);


 // Advantages
 //     1. Broadcasted events can be handled by any number of events at once.
 // Disadvantages
 //     1. Single point of failure.
 //     2. Potential performance hit as they are always communicating indirectly.