// class Counter {
//     constructor(public count: number = 0) {
//         console.log(1);
//     }
//     public add(value: number) {
//         this.count += value;
//         return this;
//     }
//     public substract(value: number) {
//         this.count -= value;
//         return this;
//     }
// }
// let counter1 = new Counter(10);
// console.log(counter1.add(3).substract(2));

// class PowCounter extends Counter {
//     constructor(public count: number = 0) {
//         super(count);
//     }
//     public pow(value: number) {
//         this.count = this.count ** value;
//         return this;
//     }
// }
// let powCounter = new PowCounter(2);
// powCounter.pow(3).add(1).substract(3);

// interface IInfoInterfaceAdvanced {
//     name: string;
//     age: number;
// }
// let infoProp: keyof IInfoInterfaceAdvanced;
// infoProp = 'name';
// infoProp = 'age';
// // infoProp = 'sex';

// function getValue<T, K extends keyof T>(obj: T, name: K[]) {
//     return name.map((n) => obj[n]);
// }
// const infoObj = {
//     age: 18,
//     name: 'lison',
// };
// let values = getValue(infoObj, ['name']);

// interface IObjs<T> {
//     [key: string]: T;
// }
// const objs1: IObjs<number> = {
//     age: 18,
// };
// let keys: keyof IObjs<number>['name'];

// interface IType {
//     a: never;
//     b: never;
//     c: string;
//     d: number;
//     e: undefined;
//     f: null;
//     g: object;
// }

// type Test = IType[keyof IType];

// interface IInfo1 {
//     age: number;
//     name: string;
//     sex: string;
// }
// type ReadonlyType<T> = {
//     readonly [P in keyof T]?: T[P];
// };
// type ReadonlyInfo1 = ReadonlyType<IInfo1>;
// let info11: ReadonlyInfo1 = {
//     age: 18,
//     name: 'lison',
//     sex: 'man',
// };
// // type Pick<T, K extends keyof T> = {
// //     [P in K]: T[P]
// // };
// interface IInfo2 {
//     name: string;
//     age: number;
//     address: string;
// }
// const info2: IInfo2 = {
//     address: 'beijing',
//     age: 18,
//     name: 'lison',
// };

// function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
//     const res: any = {};
//     keys.map((key) => {
//         res[key] = obj[key];
//     });
//     return res;
// }
// const nameAndAddress = pick(info11, ['name']);

// function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U) {
//     let res: any = {};
//     for (const key in obj) {
//         res[key] = f(obj[key])
//     }
//     return res;
// }

// const names = {0: 'hello', 1: 'world', 2: 'bye'};
// const lengths = mapObject(names, (s) => s.length);

// type Proxy<T> = {
//     get(): T;
//     set(value: T): void;
// };
// type Proxify<T> = {
//     [P in keyof T]: Proxy<T[P]>
// };
// function proxify<T>(obj: T): Proxify<T> {
//     let result = {} as Proxify<T>;
//     for (const key in obj) {
//         result[key] = {
//             get: () => obj[key],
//             set: (value) => obj[key] = value,
//         }
//     }
//     return result;
// }
// let props = {
//     name: 'lison',
//     age: 18,
// };
// let proxyProps = proxify(props);

// function unproxify(t: Proxify<T>): T {
//     let result = {} as T;
//     for (const k in t) {
//         result[k] = t[k].get();
//     }
//     return result;
// }
// let originalProps = unproxify(proxyProps)
