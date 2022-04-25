function foo1(name: string): void {
    console.log('name');
}

// 匿名函数
const foo2 = function(): void {
    console.log("foo2");
}

foo1('jey');
foo2();

function foo3(name: string, age?: number) : void {
    if (age) {
        console.log(name, age);
    } else {
        console.log(name);
    }
}

foo3('1');

function sum(...items: any[]): number {
    let s = 0;
    items.forEach(elem => s += elem);
    return s;
}

console.log(sum(1,2,3,4,5));

// 用接口的方式来定义一个函数需要符合的形状

interface Foo {
    (x: number, y: number): boolean;
}

const foo: Foo = (a: number, b: number) => a > b;
console.log(foo(1,2));

// 函数重载

function getInfo(name: string): string;
function getInfo(age: number): number;
function getInfo(str: any): any {
    if (typeof str == "string") console.log('name:'+str);
    else console.log('age'+str);
}

getInfo('Tom');
getInfo(12);
