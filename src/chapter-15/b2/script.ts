import { randomNumber } from "./utils.js";

const clearInput = () => {
  inputTodo!.value = "";
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

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
const toastTrigger2 = document.getElementById("liveToastBtn2");
const toastLiveExample2 = document.getElementById("liveToast2");

if (toastTrigger) {
  //@ts-ignore
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

if (toastTrigger2) {
  //@ts-ignore
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2);
  toastTrigger2.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

interface ITodo {
  id: number;
  todo: string;
}

const deleteTodoLocalStorage = (id: number) => {
  const todoListJSON2: string | null = localStorage.getItem("data");

  const todoListJS: ITodo[] = JSON.parse(todoListJSON2!) as ITodo[];
  const newList: ITodo[] = todoListJS.filter((item) => item.id !== id);

  localStorage.setItem("data", JSON.stringify(newList));
};

//Event delete
const assignDeleteToButton = () => {
  const deleteList = document.querySelectorAll("td button");
  deleteList.forEach((item) => {
    item.addEventListener("click", () => {
      const idDelete: number = Number(item.getAttribute("row-id"));
      deleteTodoLocalStorage(idDelete);

      const deleteRow = item.parentNode!.parentNode!;
      console.log("delete row:", deleteRow);

      tableElement.removeChild(deleteRow);
      toastTrigger!.click();
    });
  });
};

//Display data
const todoListJSON: string | null = localStorage.getItem("data");
if (todoListJSON) {
  const todoListJS: ITodo[] = JSON.parse(todoListJSON) as ITodo[];
  todoListJS.forEach((item, index) => {
    tableElement.innerHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.todo}</td>
          <td><button class="btn btn-danger" row-id="${item.id}">Delete</button></td>
        </tr>
    `;
  });
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
  tableElement.innerHTML += `
        <tr>
          <td>${newTodo.id}</td>
          <td>${newTodo.todo}</td>
          <td><button class="btn btn-danger" row-id="${newTodo.id}">Delete</button></td>
        </tr>
    `;
  assignDeleteToButton();
  toastTrigger2!.click();
});

assignDeleteToButton();
