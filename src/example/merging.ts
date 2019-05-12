interface IInfoInter {
    name: string;
}

interface IInfoInter {
    age: number;
    getRes(input: string): number;
}

let infoInter: IInfoInter;
infoInter = {
    age: 18,
    name: 'lison',
    getRes(input: string) {
        return String.length;
    },
};
