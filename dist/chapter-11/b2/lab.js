const fetchAPI = async () => {
    const res = await fetch("http://localhost:2772/blogs");
    const data = (await res.json());
    let tableHTML = document.querySelector("tbody");
    data.forEach((item) => {
        tableHTML.innerHTML += `
        <tr>
          <td>${item.ID}</td>
          <td>${item.Title}</td>
          <td>${item.Author}</td>
          <td>${item.Content}</td>
        </tr>
    `;
    });
};
fetchAPI();
export {};
