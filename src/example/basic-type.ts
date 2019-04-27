//  布尔类型
let bool: boolean = false;

//  数值类型
let num: number = 123;

//  字符串
let str: string = `123`;

//  数组
//  写法1
let arr1: number[];
//  写法2
let arr2: Array<number>;
//  联合类型
let arr3: (string | number)[]
let arr4: Array<string | number>

//  元组类型
let tuple: [string, number, boolean]
tuple = ['a', 1, false]

//  枚举类型
//  默认0，1，2
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER
}

//  any类型
let value: any

//  void类型
const consoleText = (text: string): void => {
    console.log(text)
}

//  null和undefined
let u: undefined;
let n: null

//  nerver类型
const errorFunc = (message: string): never => {
    throw new Error(message)
}
const infiniteFunc = (): never => {
    while (true) {
    }
}
// let neverVariable = (() => {
//     while(true){}
// })()
// num = neverVariable;

// object
function getObject(obj: object): void {
    console.log(obj)
}
getObject({name: 1});

// 类型断言
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (<string>target).length;
    } else {
        return target.toString().length;
    }
}
getLength(1);
getLength('aaa')