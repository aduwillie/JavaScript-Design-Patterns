// An outward appearance to the world which may conceal a very different reality.---Facade
// An example facade ---- Cross browser event listener
var addMyEvent = function(element, event, callback) {
    if(element.addEventListener) {
        element.addEventListener(event, callback, false);
    } else if(element.attachEvent) {
        element.attachEvent('on' + event, callback);
    } else {
        element['on' + event] = callback;
    }
}