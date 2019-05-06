// class Point {
//     public x: number = 0;
//     public y: number = 0;

//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }

//     public getPosition() {
//         return `(${this.x}, ${this.y})`;
//     }
// }

// class Parent {
//     public name: string = '';
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// class Child extends Parent {
//     constructor(name: string) {
//         super(name);
//     }
// }

//  public
//  private

// class Parent {
//     private age: number = 0;
//     constructor(age: number) {
//         this.age = age;
//     }
// }
// const p = new Parent(18);
// console.log(p);

// class Child extends Parent {
//     constructor(age: number) {
//         super(age);
//     }
// }

//  protected 仅子类能访问

// class Parent {
//     protected age: number = 0;
//     constructor(age: number) {
//         this.age = age;
//     }
//     protected getAge() {
//         return this.age;
//     }
// }
// const p = new Parent(18);
// console.log(p);

// class Child extends Parent {
//     constructor(age: number) {
//         super(age);
//         // console.log(super.age);
//         console.log(super.getAge());
//     }
// }

// class UserInfo {
//     public readonly name: string = '';
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// const userInfo = new UserInfo('lison');
// // userInfo.name = 'aaa';

// class A {
//     constructor(   name: string) {}
// }
// const a = new A('lison');

class Parent {
    public static age: number = 18;
    public static getAge() {
        return Parent.age;
    }
    constructor() {};
}
const p = new Parent();

class Info {
    public name: string = '';
    public age?: number;
    private _infoStr: string = '';
    constructor(name: string, age?: number, public sex?: string) {
        this.name = name;
        this.age = age;
    }
    get infoStr() {
        return this._infoStr;
    }
    set infoStr(value) {
        this._infoStr = value;
    }
}
const info1 = new Info('lison');
const info2 = new Info('lison', 18);
const info3 = new Info('lison', 18, 'man');
