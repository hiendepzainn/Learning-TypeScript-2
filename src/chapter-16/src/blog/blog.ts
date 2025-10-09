interface IBlog {
  id: string;
  title: string;
  description: string;
}

const deleteBlog = async (id: string) => {
  const res = await fetch(`http://localhost:1410/blogs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
};

const assignDeleteToButton = () => {
  const deleteButtonList = document.querySelectorAll(".btn-danger");
  deleteButtonList.forEach((item) => {
    item.addEventListener("click", async () => {
      const idDelete: string =
        item.parentNode!.parentNode!.firstElementChild!.innerHTML;

      //delete data at json-server
      await deleteBlog(idDelete);

      //reFetch
      await fetchAndSet();
    });
  });
};

const fetchAndSet = async () => {
  const res = await fetch("http://localhost:1410/blogs");
  const data = (await res.json()) as IBlog[];

  const tableElement = document.querySelector(
    "tbody"
  ) as HTMLTableSectionElement;

  let htmlTable: string = "";
  data.forEach((item) => {
    htmlTable += `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.title}</td>
            <td>${item.description}</td>
            <td>
              <button class="btn btn-warning me-2">Edit</button>
              <button class="btn btn-danger">Delete</button>
            </td>
        </tr>
    `;
  });
  tableElement.innerHTML = htmlTable;
  assignDeleteToButton();
};

const mainExecute = async () => {
  await fetchAndSet();
};

mainExecute();
