interface IPerson {
    name: string;
    age: number;
}

let Tom: IPerson = {
    name: 'Tom',
    age: 12
}

// 可选属性
interface Person {
    name: string;
    age ?: number;
}

let Jerry: Person = {
    name: 'Jerry'
}

// 任意属性

interface ICar {
    name: string;
    price: number;
    [propsName: string]: any;
}

let benz: ICar = {
    name: 'benz',
    price: 3000000,
    speed: 200,
}

// 只读属性

interface InPerson {
    readonly id: number;
    name: string;
    age?: number;
    [propsName: string]: any;
}