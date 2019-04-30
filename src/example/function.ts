function add1 (arg1: number, arg2: number): number {
    return arg1 + arg2;
}

const add2 = (arg1: number, arg2: number) => arg1 + arg2;

//  函数类型
let add3: (x: number, y: number) => number
add3 = (arg1: number, arg2: number): number => arg1 + arg2;

type add4 = (x:number, y:number) => number

let add5: add4

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
// let addFunc = (arg1: any, arg2: any, arg3: any) => arg1 + arg2+ arg3
let addFunc: AddFunction
// addFunc = (x: number, y: number) => x + y
// addFunc = (x: number, y: number, z: number) => x + y
addFunc = (x: number, y: number = 3) => x + y

// const handleData = (arg1: number, ...args: number[]) => { 
// }

//  重载
function handleData (x: string): string[]
function handleData (x: number): number[]
function handleData (x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item: any) => Number(item))
    }
}
handleData('123')
handleData(123)