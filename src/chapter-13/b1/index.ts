export {};

const firstElement = <T>(arr: T[]) => {
  return arr[0];
};

console.log(firstElement<boolean>([true, false, true]));

const merge = <T, U>(a: T, b: U) => {
  return [a, b];
};

console.log(merge<string, boolean>("hien", true));

console.log("==========================");

type StringArray = string[];
type NumberArray = number[];
type BooleanArray = boolean[];

type Array<T> = T[];
const myArray: Array<number> = [1, 2, 3];
const myArray2: Array<boolean> = [true, false, false];

type Object<T> = {
  id: T;
  name: string;
};

const newObject: Object<string> = {
  id: "abc",
  name: "hien",
};

const object2: Object<number> = {
  id: 123,
  name: "cuti",
};

console.log("============================");

class StringBox {
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}

class NumberBox {
  content: number;

  constructor(content: number) {
    this.content = content;
  }
}

class Magicbox<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }
}

const newBox = new Magicbox<boolean>(true);

console.log(newBox);
