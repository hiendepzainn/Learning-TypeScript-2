class Animal {
    constructor() {
        this.move = () => {
            console.log("moving...");
        };
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.bark = () => {
            console.log("Woof");
        };
    }
}
const tessClass = (item) => {
    if (item instanceof Dog) {
        item.bark();
    }
    else {
        item.move();
    }
};
const a1 = new Animal();
const b1 = new Dog();
tessClass(a1);
tessClass(b1);
console.log("..............................");
const getProperty = (item, key) => {
    return item[key];
};
console.log(getProperty({ name: `hien`, age: 22 }, `age`));
export {};
