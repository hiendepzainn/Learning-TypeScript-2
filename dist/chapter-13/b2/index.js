const fetchTodos = async () => {
    const res = await fetch("http://localhost:6789/todos");
    const dataAPI = (await res.json());
    const myData = {
        status: 200,
        data: dataAPI,
    };
    console.log(myData);
};
fetchTodos();
export {};
