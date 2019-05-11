//  交叉类型
// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//     let res = {} as T & U;
//     res = Object.assign(arg1, arg2);
//     return res;
// };

const getLengthFunc = (content: string | number): number => {
    if (typeof content === 'string') {
        return content.length;
    } else {
        return content.toString().length;
    }
};

const valueList = [123, 'abc'];

//  类型保护
const getRandomValue = () => {
    const number1 = Math.random() * 10;
    if (number1 < 5) {
        return valueList[0];
    } else {
        return valueList[1];
    }
};
const item = getRandomValue();

// 函数保护
// function isString(value: number | string): value is string {
//     return typeof value === 'string';
// }

//  函数保护
// if (isString(item)) {
//     console.log(item.length);
// } else {
//     console.log(item.toFixed());
// }

//  typeof保护
if (typeof item === 'string') {
    console.log(item.length);
} else {
    console.log(item.toFixed());
}

//  instanceof保护

// class CreateByClass1 {
//     public age = 18;
// }

// class CreateByClass2 {
//     public name = 'lison';
// }

// function getRandomItem() {
//     return Math.random() < 0.5 ? new CreateByClass1() : new CreateByClass2();
// }

// const item1 = getRandomItem();

// if (item1 instanceof CreateByClass1) {
//     console.log(item1.age);
// } else {
//     console.log(item1.name);
// }

// let values = '123';

// const sumFunc = (x: number, y?: number) => {
//     return x + (y || 0);
// };

// const getLengthFunction = (value: string | null): number => {
//     if (value === null) {
//         return 0;
//     } else {
//         return value.length;
//     }
// };

// function getSplicedStr(num: number | null): string {
//     function getRes(prefix: string) {
//         return prefix + num!.toFixed().toString();
//     }
//     num = num || 0.1;
//     return getRes('lison-');
// }
// type TypeString = string;
// let str2: string;
// type PositionType<T> = {x: T, y: T};
// const Position1: PositionType<number> = {
//     x: 1,
//     y: 1,
// };

// type Childs<T> = {
//     current: T,
//     child?: Childs<T>,
// };
// let ccc: Childs<string> = {
//     child: {
//         child: {
//             current: 'third',
//         },
//         current: 'second',
//     },
//     current: 'first',
// };
// type Alias = {
//     num: number,
// };
// interface IAlias {
//     num: number;
// }
// let alias1: Alias = {
//     num: 123,
// };
// let alias2: IAlias = {
//     num: 321,
// };

// type Name = 'Lison';
// const name3: Name = 'Lison';

// type Direction = 'north' | 'east' | 'south' | 'west';
// function getDirectionFirstLetter(direction: Direction) {
//     return direction.substr(0, 1);
// }
// getDirectionFirstLetter('north');

type Age = 18;
interface IInfoInterface {
    name: string;
    age: Age;
}
const info: IInfoInterface = {
    age: 18,
    name: 'lison',
};

// 可辨识联合： 1. 具有普通的单例类型属性 2.一个类型别名包含了哪些类型的联合
interface ISquare {
    kind: 'square';
    size: number;
}
interface IRectangle {
    kind: 'rectangle';
    height: number;
    width: number;
}
interface ICircle {
    kind: 'circle';
    radius: number;
}
type Shape = ISquare | IRectangle | ICircle;
function assertNerver(value: never): never {
    throw new Error('Unexpected object' + value);
}
function getArea(s: Shape) {
    switch (s.kind) {
        case 'square': return s.size * s.size;
        case 'rectangle': return s.height * s.width;
        case 'circle': return Math.PI * s.radius ** 2;
        default:  return assertNerver(s);
    }
}
