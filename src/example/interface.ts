interface INameInfo {
    firstName: string;
    lastName: string;
}

const getFullName = ({firstName, lastName}: INameInfo): string => {
    return `${firstName} ${lastName}`;
};

getFullName({
    firstName: '111',
    lastName: '222',
});

interface IVegetables {
    color?: string;
    readonly type: string;
    [prop: string]: any;
}

const getVegetables = ({color, type}: IVegetables) => {
    return `${color} ${type}`;
};

getVegetables({
    color: 'red',
    size: 2,
    type: 'blue',
});

let vegetableObj: IVegetables = {
    type: 'tomato',
};

// vegetableObj.type = 'aaa'

const vegetableInfo = {
    color: 'red',
    size: 2,
    type: 'blue',
};

getVegetables(vegetableInfo);

interface IArrInter {
    0: number;
    readonly 1: string;
}

let arr: IArrInter = [0, '1'];

type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (n1, n2) => n1 + n2;

interface IRoleDic {
    [id: number]: string;
}
const role1: IRoleDic = {
    0: '111',
};

interface IRoleDic1 {
    [id: string]: string;
}
const role2: IRoleDic1 = {
    0: '111',
};

interface IVegetables1 {
    color: string;
}

interface ITomato extends IVegetables1 {
    radius: number;
}

const tomato: ITomato = {
    color: 'red',
    radius: 1,
};

interface ICounter {
    (): void;
    count: number;
}

const getCounter = (): ICounter => {
    const c = () => c.count++;
    c.count = 0;
    return c;
};

const counter: ICounter = getCounter();

counter();
