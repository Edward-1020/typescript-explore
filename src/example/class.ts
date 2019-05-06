//  抽象方法
// abstract class People {
//     constructor(public name: string) {}
//     public abstract printName(): void
// }
// const p1 = new People();
// class Man extends People {
//     constructor(name: string) {
//         super(name);
//         this.name = name;
//     }
//     public printName() {
//         console.log(this.name);
//     }
// }
// const m = new Man('Tom');

// abstract class People {
//     public abstract _name: string;
//     abstract get insideName(): string;
//     abstract set insideName(value: string);
// }
// class P extends People {
//     public _name: string = ''
//     public insideName: string = ''
// }

class People {
    constructor(public name: string) {}
}

const p2: People = new People('Tom');

class Animal {
    constructor(public name: string) {}
}

const p3 = new Animal('haha');

interface FoodInterface {
    type: string,
    name: string
}

class FoodClass implements FoodInterface {
    public type: string = '';
    public name: string = '';
}

class A {
    protected name: string = '';
}

interface I extends A {};

// class B implements I {
//     public name: string = '';
// };
class B extends A implements I {
    public name: string = '';
};
//  传入了类，返回了类创建的实例
//  new() 表示调用了类的构造函数
const create = <T>(c: new() => T): T => {
    return new c();
}
class Infos {
    public age: number = 0;
}
create<Infos>(Infos);