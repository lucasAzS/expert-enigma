// void is used in functions that don't return a value
const doSomething = (): void => {
  console.log('doSomething');
};
// there's no reason to do that:
let a: void;
// a = 'something'

// using any make typescript useless
let b: any = '1';
let c: any = 3;
console.log(b + c); // the result should be 13 like in normal javascript

// is better to use unknown than any if we do not now the type
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny; // type any can be assigned to other types
// let s2: string = vUnknown; // type unknown cannot

//we can make conversions unknown to other types
let pageNumber: string = '1';
let numericPageNumber: number = (pageNumber as unknown) as number;
