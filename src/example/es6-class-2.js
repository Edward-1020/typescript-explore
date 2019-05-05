function Food () {
    this.type = 'food'
}

Food.prototype.getType = function () {
    return this.type
}

function Vegetables (name) {
    this.name = name
}

Vegetables.prototype = new Food()

const tomato = new Vegetables('tomato')

// class Parent {
//     constructor (name) {
//         this.name = name
//     }
//     getName () {
//         return this.name
//     }
// }

//  super 作为函数
// class Child extends Parent {
//     constructor (name, age) {
//         super(name)
//         this.age = age
//     }
// }

// const c = new Child('lison', 18)
// console.log(c instanceof Child)
// console.log(c instanceof Parent)
// console.log(Child.getNames())
// console.log(Object.getPrototypeOf(Child) === Parent)

//  super 作为对象
//  在普通方法中，指向父类的原型对象
//  在静态方法中，父类
// class Parent {
//     constructor () {
//         this.type = 'parent'
//     }
//     getName () {
//         return this.type
//     }
//     static getType () {
//         return this.type
//     }
// }
// Parent.getType = () => {
//     return 'is parent'
// }

// class Child extends Parent {
//     constructor () {
//         super()
//         console.log(super.getName())
//     }

//     getParentName () {
//         console.log(super.getName())
//     }

//     static getParentType () {
//         console.log(super.getType())
//     }
// }

// const c = new Child()
// c.getParentName()
// Child.getParentType()

// class Parent {
//     constructor () {
//         this.name = 'parent'
//     }

//     print () {
//         console.log(this.name)
//     }
// }

// class Child extends Parent {
//     constructor () {
//         super()
//         this.name = 'Child'
//     }
//     childPrint () {
//         super.print()
//     }
// }
// const c = new Child()
// c.childPrint()

// 子类的_proto_指向父类本身
//  子类的prototype属性的_proto_指向分类的prototype属性
//  实例的_proto_属性的_proto_指向父类实例的_proto_

//  继承原生构造函数
//  es5先创建子构造函数的this，再添加属性方法。es6向父类传入子实例this