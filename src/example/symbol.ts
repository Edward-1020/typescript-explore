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

// Symbol.species

// let obj = {
//     [Symbol.match] (string: any) {
//         console.log(string.length)
//     }
// }

// 'abcde'.match(<RegExp>obj)

//  Symbol.replace
//  Symbol.search
//  Symbol.split

// let obj = {
//     [Symbol.split] (string: any) {
//         console.log('split', string.length)
//         return 1
//     }
// }

// console.log('aaaccc'.split(<any>obj));

// const arr = [1, 2, 3];
// const iterator = arr[Symbol.iterator]();
// console.log(iterator.next());

// Symbol.toPrimitive

// let obj: unknown = {
//     [Symbol.toPrimitive] (type: any) {
//         console.log(type)
//     }
// }
// const res = (<number>obj)++;

//  Symbol.toStringTag
//  with无法获取的属性值
//  Symbol.unscopables