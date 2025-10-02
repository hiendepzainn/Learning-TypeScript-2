export {};

class Animal {
  move = () => {
    console.log("moving...");
  };
}

class Dog extends Animal {
  bark = () => {
    console.log("Woof");
  };
}

const tessClass = <T extends Animal>(item: T) => {
  if (item instanceof Dog) {
    item.bark();
  } else {
    item.move();
  }
};

const a1 = new Animal();
const b1 = new Dog();

tessClass(a1);
tessClass(b1);

console.log("..............................");

const getProperty = <T, U extends keyof T>(item: T, key: U) => {
  return item[key];
};

console.log(getProperty({ name: `hien`, age: 22 }, `age`));
