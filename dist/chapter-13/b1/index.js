const firstElement = (arr) => {
    return arr[0];
};
console.log(firstElement([true, false, true]));
const merge = (a, b) => {
    return [a, b];
};
console.log(merge("hien", true));
console.log("==========================");
const myArray = [1, 2, 3];
const myArray2 = [true, false, false];
const newObject = {
    id: "abc",
    name: "hien",
};
const object2 = {
    id: 123,
    name: "cuti",
};
console.log("============================");
class StringBox {
    constructor(content) {
        this.content = content;
    }
}
class NumberBox {
    constructor(content) {
        this.content = content;
    }
}
class Magicbox {
    constructor(content) {
        this.content = content;
    }
}
const newBox = new Magicbox(true);
console.log(newBox);
export {};
