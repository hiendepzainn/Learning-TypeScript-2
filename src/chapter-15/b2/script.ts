import { randomNumber } from "./utils.js";

const clearInput = () => {
  inputTodo!.value = "";
};

const reloadPage = () => {
  window.location.reload();
};

const inputTodo = document.getElementById(
  "todoInput"
) as HTMLInputElement | null;
const saveButton = document.getElementById(
  "saveChangeButton"
) as HTMLButtonElement | null;
const tableElement = document.getElementById(
  "bodyTable"
) as HTMLTableSectionElement | null;

if (inputTodo === null || saveButton === null || tableElement === null) {
  throw new Error("Cannot find Elements");
}

interface ITodo {
  id: number;
  todo: string;
}

saveButton.addEventListener("click", () => {
  const newID: number = randomNumber();
  const content: string = inputTodo.value;
  const newTodo: ITodo = {
    id: newID,
    todo: content,
  };

  const currentDataJSON = localStorage.getItem("data");

  if (currentDataJSON) {
    const currentDataJS: ITodo[] = JSON.parse(currentDataJSON) as ITodo[];
    currentDataJS.push(newTodo);
    localStorage.setItem("data", JSON.stringify(currentDataJS));
  } else {
    localStorage.setItem("data", JSON.stringify([newTodo]));
  }

  clearInput();
  reloadPage();
});

const todoListJSON: string | null = localStorage.getItem("data");
if (todoListJSON) {
  const todoListJS: ITodo[] = JSON.parse(todoListJSON) as ITodo[];
  todoListJS.forEach((item, index) => {
    tableElement.innerHTML += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${item.id}</td>
          <td>${item.todo}</td>
          <td><button class="btn btn-danger">Delete</button></td>
        </tr>
    `;
  });
}
