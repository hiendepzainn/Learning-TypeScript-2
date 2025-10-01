export {};

interface IResponse<T> {
  status: number;
  data: T;
}

interface ITodo {
  id: string;
  todo: string;
  completed: boolean;
  userId: number;
}

const fetchTodos = async () => {
  const res = await fetch("http://localhost:6789/todos");
  const dataAPI = (await res.json()) as ITodo[];
  const myData: IResponse<ITodo[]> = {
    status: 200,
    data: dataAPI,
  };

  console.log(myData);
};

fetchTodos();
