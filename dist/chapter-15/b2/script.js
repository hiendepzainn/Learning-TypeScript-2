import { randomNumber } from "./utils.js";
const clearInput = () => {
    inputTodo.value = "";
};
const reloadPage = () => {
    window.location.reload();
};
const inputTodo = document.getElementById("todoInput");
const saveButton = document.getElementById("saveChangeButton");
const tableElement = document.getElementById("bodyTable");
if (inputTodo === null || saveButton === null || tableElement === null) {
    throw new Error("Cannot find Elements");
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
    reloadPage();
});
//Display data
const todoListJSON = localStorage.getItem("data");
if (todoListJSON) {
    const todoListJS = JSON.parse(todoListJSON);
    todoListJS.forEach((item, index) => {
        tableElement.innerHTML += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${item.id}</td>
          <td>${item.todo}</td>
          <td><button class="btn btn-danger" row-id="${item.id}">Delete</button></td>
        </tr>
    `;
    });
}
const deleteTodo = (id) => {
    const todoListJS = JSON.parse(todoListJSON);
    const newList = todoListJS.filter((item) => item.id !== id);
    localStorage.setItem("data", JSON.stringify(newList));
    reloadPage();
};
//Event delete
const deleteList = document.querySelectorAll("td button");
deleteList.forEach((item) => {
    item.addEventListener("click", () => {
        const idDelete = Number(item.getAttribute("row-id"));
        deleteTodo(idDelete);
    });
});
