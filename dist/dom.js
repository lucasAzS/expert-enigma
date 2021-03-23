const someElement = document.querySelector('.input');
console.log('someElement: ' + someElement.value);
const someElement2 = document.querySelector('.foo');
someElement2.addEventListener('blur', (event) => {
    const target = event.target;
    console.log('event', target.value);
});
