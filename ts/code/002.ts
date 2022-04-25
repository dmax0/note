let isDone: boolean = false;
let a: number = 10;
let b: number = 0x10;
let c: number = 0o10;
let Name: string = 'Tom';
let myName: string = `my name is ${Name}`;
function getName(): void {
    console.log('my name is'+myName);
}
let d: void = undefined;
// 定义数组
// 普通方式
let arr: number[] = [1,2,3,4];
// 泛型方式
let list: Array<number> = [1,2,3,4];

// 定义元组
let f: [string, number];
f = ['hello', 10];
// 数字枚举
enum ChineseZodiac{
    rat,
    cattle,
    tiger,
    rabbit,
    dragon,
}

// 字符串枚举
enum Persons{
    name = "Tom",
    age = "14",
    height = "189",
    love = "wnq",
    hobby = love,
}
// never作为返回值的函数必须存在无法到达的终点

function error(message: string): never {
   throw new Error(message);
}

let g: any = "g";
g  = false;
g = 2;

// 联合类型
let h: string | number;
h = 5;
h = "string";

let i: object = {};


// 类型断言

let j: any = "this is a sentence";
let jlen = (j as string).length;
let jlen2 = (<string> j).length;
// console.log(ChineseZodiac.rat);
// console.log(Person.hobby)
// getName();
// console.log(isDone, a, b, c, myName);

// error('this is error message');
console.log(jlen);