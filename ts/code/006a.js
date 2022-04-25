"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name + 'say');
    }
}
exports.Animal = Animal;
