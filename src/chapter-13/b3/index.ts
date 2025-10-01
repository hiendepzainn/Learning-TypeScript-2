export {};

interface ILength {
  length: number;
}

const logLength = <T extends ILength>(value: T) => {
  console.log(value.length);
};

logLength<number[]>([1, 2, 4]);

console.log("-----------------------");

interface IUser {
  id: number;
  name: string;
}

const logItem = <T extends IUser>(item: T) => {
  console.log(item);
};

logItem({
  id: 123,
  name: "hiencuti",
  gender: "male",
});
