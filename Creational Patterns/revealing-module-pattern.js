// Basic Revealing Pattern 
var revealingModule = ((function() {
    var name = 'Williams Adu';
    var age = 40;

    function updatePerson() {
        name = 'Updated Williams Adu';
    }

    function setPerson() {
        name = 'Set Williams Adu';
    }

    function getPerson() {
        return name;
    }

    return {
        set: setPerson,
        get: getPerson
    }
})());

revealingModule.get();