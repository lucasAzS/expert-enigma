const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface BorgInterface<T, V> {
  name: string;
  data: T;
  age: V;
}

const user4: BorgInterface<{ meta: string }, string> = {
  name: 'Jack',
  data: {
    meta: 'This is a test',
  },
  age: '42',
};

const user5: BorgInterface<string[], string> = {
  name: 'Bob',
  data: ['foo', 'bar', 'baz'],
  age: '43',
};

// const result = addId<BorgInterface>(user4);
// console.log(result);
