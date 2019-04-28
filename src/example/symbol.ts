// const s1 = Symbol();
// console.log(s1);

// const s2 = Symbol();
// console.log(s2);

// const s3 = Symbol('lison');
// console.log(s3, s3.toString());
// console.log(Boolean(s3));
// console.log(!s3);

// const s4 = Symbol('name');
// const info2 = {
//     age: 19,
//     sex: 'man',
//     [s4]: 'lison'
// };
// console.log(info2[s4]);

// for (const key in info2) {
//     console.log(key);
// }

// console.log(Object.keys(info2));

// Object.getOwnPropertyNames(info2);

// console.log(JSON.stringify(info2));

// console.log(Object.getOwnPropertySymbols(info2));

// console.log(Reflect.ownKeys(info2));

//  s8 和 s9是相等的
// const s8 = Symbol.for('lison');
// const s9 = Symbol.for('lison');

// console.log(Symbol.keyFor(s9));

//  11个内置的Symbol值

//  Symbol.hasInstance
// const obj = {
//     [Symbol.hasInstance] (otherObj: any) {
//         console.log(otherObj);
//     }
// }

// console.log({a: 'a'} instanceof <any>obj);