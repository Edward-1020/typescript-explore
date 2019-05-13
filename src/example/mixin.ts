interface ObjectA {
    a: string;
}

interface ObjectB {
    b: string;
}

let a: ObjectA = {
    a: 'a',
};

let b: ObjectB = {
    b: 'b',
};

let ab: ObjectA & ObjectB = Object.assign(a, b);

class ClassAa {
    public isA: boolean;
    public functionA() {};
}

class ClassBb {
    public isB: boolean;
    public functionB() {};
}

class AB implements ClassAa, ClassBb {
    public isA: boolean = false;
    public isB: boolean = false;
    public funcA: () => void;
    public funcB: () => void;
    constructor() {}
}

function mixins(base: any, from: any[]) {
    from.forEach((fromItem) => {
        Object.getOwnPropertyNames(fromItem.prototype).forEach((key) => {
            base.prototype[key] = fromItem.prototype[key];
        });
    });
}
