let name1 = 'lison';
// name1 = 222;

let arr5: Array<string | number> = [1, 'a'];
window.onmousedown = (mouseEvent) => {
    console.log(mouseEvent);
};
interface IInfo1 {
    name: string;
    info: {age: number};
}
let infos: IInfo1;
const infos1 = {name: 'lison', info: {age: 1}};
const infos2 = {age: 18};
const infos3 = {name: 'lison', age: 18};
infos = infos1;
// infos = infos2;
// infos = infos3;

let x = (a: number) => 0;
let y = (b: number, c: string) => 0;
y = x;
// x = y;
const arrs = [1, 2, 3];
arrs.forEach((item, index, array) => {
    console.log(item);
});

let x1 = (a: number) => 0;
let y1 = (b: string) => 0;
// x1 = y1;

const getSum = (arr: number[], cb: (...args: number[]) => number) => {
    cb(...arr);
};
getSum([1, 2], (...args: number[]): number => args.reduce((a, b) => a + b, 0));
