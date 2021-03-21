var str = 'something';
// str = 2 // typescript automatic assing a type to the variable according to the usage
// so that you cannot change the type
var hello = 'world'; // is best to always give the type in the initialization.
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
console.log(getFullName('Lucas', 'az'));
