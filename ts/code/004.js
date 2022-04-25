"use strict";
class People {
    constructor(name) {
        this.name = name;
    }
    static run() {
        console.log(`${People.sex}`);
    }
    sayMyName() {
        console.log(`myName is ${this.name}`);
    }
}
People.sex = 'man';
new People('Jack').sayMyName();
class abstractClass {
}
