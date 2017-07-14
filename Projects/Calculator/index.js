function Calculator() {
    this._currentValue = 0;
    this._commands = [];
}

Calculator.prototype = {
    getCurrentValue: function () {
        return this._currentValue;
    },
    undo: function() {
        var cmd = this._commands.pop();
        this._currentValue = cmd.undo(this._currentValue);
    },
    execute: function (command) {
        this._currentValue = command.execute(this._currentValue);
    }
};

function add(value) {
    return value + this.value;
}

function sub(value) {
    return value - this.value;
}

function Command(fn, undo, value) {
    this.execute = fn;
    this.value = value;
}

function AddCommand(value) {
    Command.call(this, add, sub, value);
}

function SubCommand(value) {
    Command.call(this, sub, add, value);
}

var calc = new Calculator();