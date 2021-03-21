let str = 'something';
// str = 2 // typescript automatic assing a type to the variable according to the usage
// so that you cannot change the type

let hello: string = 'world'; // is best to always give the type in the initialization.

const getFullName = (name: string, surname: string): string => {
  return name + ' ' + surname;
};

console.log(getFullName('Lucas', 'az'));
