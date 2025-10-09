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
  console.log("Res Delete:", res);
};

const createBlog = async (blog: IBlog) => {
  const res = await fetch("http://localhost:1410/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  console.log("Res Create:", res);
};

const updateBlog = async (blog: IBlog) => {
  const res = await fetch(`http://localhost:1410/blogs/${blog.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
  console.log(res);
};

const assignEditToButton = () => {
  const editButtonList = document.querySelectorAll(".edit-button");
  editButtonList.forEach((item) => {
    item.addEventListener("click", () => {
      const listInput = document.querySelectorAll("input");

      listInput[3].value = item.getAttribute("id-row")!;
      listInput[4].value = item.getAttribute("title-row")!;
      listInput[5].value = item.getAttribute("description-row")!;
    });
  });
};

const assignUpdateToButton = () => {
  const updateButton = document.getElementById("updateButton");
  updateButton!.addEventListener("click", async () => {
    const listInput = document.querySelectorAll("input");
    const id = listInput[3].value;
    const title = listInput[4].value;
    const description = listInput[5].value;

    const newBlog: IBlog = {
      id,
      title,
      description,
    };

    await updateBlog(newBlog);

    await fetchAndSet();

    toastTrigger3!.click();
  });
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

      toastTrigger2!.click();
    });
  });
};

const assignCreateNewBlog = () => {
  const saveButton = document.getElementById("saveButton") as HTMLButtonElement;
  saveButton.addEventListener("click", async () => {
    const listInput = document.querySelectorAll("input");
    const newBlog: IBlog = {
      id: listInput[0].value,
      title: listInput[1].value,
      description: listInput[2].value,
    };
    await createBlog(newBlog);

    listInput.forEach((item) => {
      item.value = "";
    });

    await fetchAndSet();
    toastTrigger1!.click();
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
              <button
              type="button"
              class="edit-button btn btn-warning"
              id-row="${item.id}"
              title-row="${item.title}"
              description-row="${item.description}"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop2"
              >
              Edit
              </button>
              <button class="btn btn-danger">Delete</button>
            </td>
        </tr>
    `;
  });
  tableElement.innerHTML = htmlTable;
  assignDeleteToButton();
  assignEditToButton();
};

const mainExecute = async () => {
  await fetchAndSet();
  assignCreateNewBlog();
  assignUpdateToButton();
};

const toastTrigger1 = document.getElementById("liveToastBtn-create");
const toastLiveExample1 = document.getElementById("liveToast-create");
if (toastTrigger1) {
  //@ts-ignore
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample1);
  toastTrigger1.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

const toastTrigger2 = document.getElementById("liveToastBtn-delete");
const toastLiveExample2 = document.getElementById("liveToast-delete");
if (toastTrigger2) {
  //@ts-ignore
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2);
  toastTrigger2.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

const toastTrigger3 = document.getElementById("liveToastBtn-update");
const toastLiveExample3 = document.getElementById("liveToast-update");
if (toastTrigger3) {
  //@ts-ignore
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample3);
  toastTrigger3.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

mainExecute();
