export {};

const printItem = <T = boolean>(item: T) => {
  console.log(item);
};

printItem<string[]>(["1"]);

console.log("-----------------------------------------");

interface User<T = boolean | number> {
  contact: T;
}

const a: User = {
  contact: 123,
};
