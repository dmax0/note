"use strict";
let isDone = false;
let a = 10;
let b = 0x10;
let c = 0o10;
let Name = 'Tom';
let myName = `my name is ${Name}`;
function getName() {
    console.log('my name is' + myName);
}
let d = undefined;
// 定义数组
// 普通方式
let arr = [1, 2, 3, 4];
// 泛型方式
let list = [1, 2, 3, 4];
// 定义元组
let f;
f = ['hello', 10];
// 数字枚举
var ChineseZodiac;
(function (ChineseZodiac) {
    ChineseZodiac[ChineseZodiac["rat"] = 0] = "rat";
    ChineseZodiac[ChineseZodiac["cattle"] = 1] = "cattle";
    ChineseZodiac[ChineseZodiac["tiger"] = 2] = "tiger";
    ChineseZodiac[ChineseZodiac["rabbit"] = 3] = "rabbit";
    ChineseZodiac[ChineseZodiac["dragon"] = 4] = "dragon";
})(ChineseZodiac || (ChineseZodiac = {}));
// 字符串枚举
var Persons;
(function (Persons) {
    Persons["name"] = "Tom";
    Persons["age"] = "14";
    Persons["height"] = "189";
    Persons["love"] = "wnq";
    Persons["hobby"] = "wnq";
})(Persons || (Persons = {}));
// never作为返回值的函数必须存在无法到达的终点
function error(message) {
    throw new Error(message);
}
let g = "g";
g = false;
g = 2;
// 联合类型
let h;
h = 5;
h = "string";
let i = {};
// 类型断言
let j = "this is a sentence";
let jlen = j.length;
let jlen2 = j.length;
// console.log(ChineseZodiac.rat);
// console.log(Person.hobby)
// getName();
// console.log(isDone, a, b, c, myName);
// error('this is error message');
console.log(jlen);
