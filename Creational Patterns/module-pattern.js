// Basic self contained module
var moduleTest = (function() {
    var counter = 0;
    
    return {
        incrementCounter: function() {
            return counter++;
        },
        resetCounter: function() {
            console.log('Counter value prior to reset: ' + counter);
            counter = 0;
        }
    }
})();

moduleTest.incrementCounter();
moduleTest.resetCounter();

// Advanvatages of module pattern
//  1. It's a lot cleaner for developers with oop background
//  2. It supports private data

// Disadvantages of module pattern
//  1. You access private and public members differently
//  2. Inability to create unit test for private members