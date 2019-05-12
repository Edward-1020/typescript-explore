// function setProp (target) {
//     console.log(1);
// }
// @setProp;
// function setProp () {
//     return function (target) {}
// }
// @setProp()
// function setName() {
//     console.log('get setName');
//     return (target) => {
//         console.log('setName');
//     };
// }
// function setAge() {
//     console.log('get setAge');
//     return (target) => {
//         console.log('setAge');
//     };
// }
// @setName()
// @setAge()
// class ClassDec {}
// let sign = null;
// function setName(name: string) {
//     return (target: new() => any) => {
//         sign = target;
//         console.log(target.name);
//     };
// }
// @setName('lison')
// class ClassDec {
//     constructor() {}
// }
// function addName(constructor: new() => any) {
//     constructor.prototype.name = 'lison';
// }
// @addName
// class ClassD {}
// interface ClassD {
//     name: string;
// }
// const d = new ClassD();
// function classDecorator<T extends new(...args: any[]) => {}>(target: T) {
//     return class extends target {
//         public newProperty = 'new';
//         public hello = 'override';
//     };
// }

// @classDecorator
// class Greeter {
//     public property = '1';
//     public hello = '2';
//     constructor(m: string) {
//         this.hello = m;
//     }
// }
// function enumerable(bool: boolean) {
//     return (target: any, propertyName: string) {
//         console.log(target);
//     };
// }
// class ClassF {
//     constructor(public age: number) {}
//     @enumerable(false)
//     public getAge() {}
// }
// function enumerable(bool: boolean) {
//     return (target: any, propertyName: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = bool;
//     };
// }
// class ClassG {
//     private _name: string;
//     constructor(name: string) {
//         this._name = name;
//     }
//     @enumerable(false)
//     get name() {}
//     set name() {}
// }
// function printPropertyName(target: any, propertyName: string) {
// }
// class ClassH {
//     @printPropertyName
//     public name: string;
// }
function require(target: any, properName: string) {
    console.log(111);
}
class ClassI {
    public name: string = '111';
    public getInfo(prefix1: string, @require prefix2: string): string {
        return prefix1 + this.name;
    }
}
interface IClass {
    [key: string]: string | number | Function;
}
