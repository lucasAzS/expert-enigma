const addId = (obj) => {
    const id = Math.random().toString(16);
    return Object.assign(Object.assign({}, obj), { id });
};
const user4 = {
    name: 'Jack',
    data: {
        meta: 'This is a test',
    },
    age: '42',
};
const user5 = {
    name: 'Bob',
    data: ['foo', 'bar', 'baz'],
    age: '43',
};
