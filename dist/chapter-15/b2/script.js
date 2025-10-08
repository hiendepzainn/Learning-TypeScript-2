import { randomNumber } from "./utils.js";
const clearInput = () => {
    inputTodo.value = "";
};
const inputTodo = document.getElementById("todoInput");
const saveButton = document.getElementById("saveChangeButton");
const tableElement = document.getElementById("bodyTable");
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
const deleteTodoLocalStorage = (id) => {
    const todoListJSON2 = localStorage.getItem("data");
    const todoListJS = JSON.parse(todoListJSON2);
    const newList = todoListJS.filter((item) => item.id !== id);
    localStorage.setItem("data", JSON.stringify(newList));
};
//Event delete
const assignDeleteToButton = () => {
    const deleteList = document.querySelectorAll("td button");
    deleteList.forEach((item) => {
        item.addEventListener("click", () => {
            const idDelete = Number(item.getAttribute("row-id"));
            deleteTodoLocalStorage(idDelete);
            const deleteRow = item.parentNode.parentNode;
            console.log("delete row:", deleteRow);
            tableElement.removeChild(deleteRow);
            toastTrigger.click();
        });
    });
};
//Display data
const todoListJSON = localStorage.getItem("data");
if (todoListJSON) {
    const todoListJS = JSON.parse(todoListJSON);
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
    const newID = randomNumber();
    const content = inputTodo.value;
    const newTodo = {
        id: newID,
        todo: content,
    };
    const currentDataJSON = localStorage.getItem("data");
    if (currentDataJSON) {
        const currentDataJS = JSON.parse(currentDataJSON);
        currentDataJS.push(newTodo);
        localStorage.setItem("data", JSON.stringify(currentDataJS));
    }
    else {
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
    toastTrigger2.click();
});
assignDeleteToButton();
