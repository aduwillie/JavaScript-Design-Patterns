// A simple pub sub implementation
var pubSub = {};

(function(q) {
    var topics = {};
    var subUid = -1;
    
    // Publish or broadcasts events of interest with a specific topic name and arguments such as data
    // to pass along
    q.publish = function(topic, args) {
        if(!topics[topic]) {
            return false;
        }
        var subscribers = topics[topic];
        var len = subscribers ? subscribers.length : 0;

        while(len--){
            subscribers[len].func(topic, args);
        }

        return this;
    }

    // Subscribe to events of interest with a specified topic name and a callback 
    q.subscribe = function(topic, func) {
        if(!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    }

    // Unscubcribe from a specific topic based on a tokenized reference to the subscription
    q.unsubscribe = function(token) {
        for(var t in topics) {
            if(topics[t]) {
                for(var i=0; i< topics[t].length; i++) {
                    if(topics[t][i].token === token) {
                        topics[t].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    };
})(pubSub);

// Basic use of pub sub
var testHandler = function(topics, data) {
    console.log(topics + ': ' + data);
};

// Subscribers basically subscribe (listen). Once they've been notified, their callbacks are called
var subscription = pubSub.subscribe('subscription', testHandler);

// Publishere publish events/notifications
pubSub.publish('subscription', 'hello world!');
pubSub.publish('subscription', [1,2,3,4]);

// Unsubscribe if no longer interested in subscription
pubSub.unsubscribe(subscription);

// Publish fail after unsubcription has already taken place
pubSub.publish('subscription', 'hello world again!');