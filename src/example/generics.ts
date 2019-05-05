// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value);
// };

// getArray<number>(2, 3).map((item) => item.length);

// const getArray = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
//     return new Array(times).fill([param1, param2]);
// };

// let getArray: <T>(arg: T, times: number) => T[];
// getArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg);
// };
// type GetArray = <T>(arg: T, times: number) => T[];

interface IValueWithLength {
    length: number;
}

const getArray = <T extends IValueWithLength>(arg: T, times: any): T[] => {
    return new Array(times).fill(arg);
};

getArray([1, 2], 3);

getArray('123', 3);

const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName];
};
const objs = {
    a: 'a',
    b: 'b',
};
getProps(objs, 'a');
getProps(objs, 'c');
