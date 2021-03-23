// we need to specify what type of element that we are using to be able to call its methods
const someElement = document.querySelector('.input') as HTMLInputElement;

console.log('someElement: ' + someElement.value);

const someElement2 = document.querySelector('.foo');

someElement2.addEventListener('blur', (event) => {
  const target = event.target as HTMLInputElement;
  console.log('event', target.value);
});
