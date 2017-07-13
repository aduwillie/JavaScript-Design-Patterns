// Different ways of creating an object
var obj = {}; // Object literal
var obj = new Object();
var obj = Object.create(null); 

obj.someKey = "Hello World!";   // 1. Dot syntax
obj["someKey"] = "Hello World!";    // 2. Square bracket syntax
Object.defineProperty(obj, "someKey",   // 3. Object.defineProperty syntax
{ 
    value: "Hello World!",
    writable: true,
    enumerable: true,
    configurable: true
});

// A shorthand for Object.defineProperty
var defineProp = function(obj, key, value) {
    config.value = value;
    Object.defineProperty(obj, key, config)
}
var obj = Object.create(null);
defineProp(obj, "name", "Williams");
defineProp(obj, "surname", "Adu");

Object.defineProperties(obj,    //4. Object.defineProperties syntax
{
    "someKey": {
        value: "Hello World!",
        writable: true,
        enumerable: true,
        configurable: true
    },
    "anotherKey": {
        value: "Foo bar",
        writable: true,
        enumerable: true,
        configurable: true
    }
});