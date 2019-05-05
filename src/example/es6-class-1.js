// function Point (x, y) {
//     this.x = x;
//     this.y = y;
// }

// Point.prototype.getPosition = function () {
//     return '[' + this.x + ',' + this.y + ']'
// }

// var p1 = new Point(2, 3)

// class Point {
//     constructor (x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     getPosition () {
//         return `${this.x}${this.y}`
//     }
// }

// const p1 = new Point(1, 2);

// var info = {
//     _age: 18,
//     set age (newValue) {
//     },
//     get age () {
//     }
// }

// class info {
//     constructor (age) {
//         this.age = age
//     }

//     set age (newAge) {
//     }
//     get age () {
//     }
// }

// class Point {
//     z = 0
//     constructor (x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     getPosition () {
//         return `${this.x} ${this.y}`;
//     }

//     static getPositionName () {
//         return Point.name;
//     }
// }

// class Point {
//     fn1 () {}
//     _fn2 () {}
// }

// const _func2 = () => {}

// class Point {
//     func1 () {
//         _func2.call(this)
//     }
// }

// const p = new Point()

// const fn1 = Symbol('func1')
// class Point {
//     static fn1 () {}
// }

// class Point {
//     // 私有属性
//     #ownProp = 12
// }

class Point {
    constructor () {
        console.log(new.target)
    }
}

const p3 = new Point()

class Parent {
    constructor () {
        console.log(new.target)
    }
}

class Child extends Parent {
    constructor () {
        super()
    }
}

const c = new Child()