"use strict";
function foo1(name) {
    console.log('name');
}
// 匿名函数
const foo2 = function () {
    console.log("foo2");
};
foo1('jey');
foo2();
function foo3(name, age) {
    if (age) {
        console.log(name, age);
    }
    else {
        console.log(name);
    }
}
foo3('1');
function sum(...items) {
    let s = 0;
    items.forEach(elem => s += elem);
    return s;
}
console.log(sum(1, 2, 3, 4, 5));
const foo = (a, b) => a > b;
console.log(foo(1, 2));
function getInfo(str) {
    if (typeof str == "string")
        console.log('name:' + str);
    else
        console.log('age' + str);
}
getInfo('Tom');
getInfo(12);
