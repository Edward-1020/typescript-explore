let name1 = 'lison';
// name1 = 222;

let arr5: Array<string | number> = [1, 'a'];
window.onmousedown = (mouseEvent) => {
    console.log(mouseEvent);
};
interface IInfo1 {
    name: string;
    info: {age: number};
}
let infos: IInfo1;
const infos1 = {name: 'lison', info: {age: 1}};
const infos2 = {age: 18};
const infos3 = {name: 'lison', age: 18};
infos = infos1;
// infos = infos2;
// infos = infos3;

let x = (a: number) => 0;
let y = (b: number, c: string) => 0;
y = x;
// x = y;
const arrs = [1, 2, 3];
arrs.forEach((item, index, array) => {
    console.log(item);
});

let x1 = (a: number) => 0;
let y1 = (b: string) => 0;
// x1 = y1;

const getSum = (arr: number[], cb: (...args: number[]) => number) => {
    cb(...arr);
};
getSum([1, 2], (...args: number[]): number => args.reduce((a, b) => a + b, 0));
getSum([1, 2, 3], (arg1: number, arg2: number, arg3: number): number => arg1 + arg2 + arg3);

//  函数参数双向协变
let funcA = (arg: number | string): void => {console.log(1); };
let funcB = (arg: number): void => {console.log(2); };
//  funcA = funcB
funcB = funcA;

//  返回值类型
let xx = (): string | number => 0;
let yy = (): string => 'a';
xx = yy;
// yy = xx;

//  函数重载
function merge1(arg1: number, arg2: number): number;
function merge1(arg1: string, arg2: string): string;
function merge1(arg1: any, arg2: any) {
    return arg1 + arg2;
}

function sum2(arg1: number, arg2: number): number;
function sum2(arg1: any, arg2: any): any {
    return arg1 + arg2;
}
let func = merge1;
// func = sum

enum StatusInterface {
    On,
    Off,
}
let s = StatusInterface.On;
// s = 'a';

class AnimalClass {
    public static age: number;
    constructor(public name: string) {
        console.log(1);
    }
}

class PeopleClass {
    public static age: string;
    constructor(public name: string) {
        console.log(2);
    }
}

class FoodClass1 {
    constructor(public name: number) {
        console.log(2);
    }
}

let animal: AnimalClass;
let people1: PeopleClass;
let food: FoodClass1;
animal = people1;