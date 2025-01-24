const apiKey = "AIzaSyCWnzCfhAwOOjwsNl9JoZ_Q936heoFZDRQ"; // Замените на ваш ключ
const spreadsheetId = "1qs9a1q8mi3WWIsQfCxOOlWmy-jx8ITavd9YSZkby_uk"; // Замените на ID вашей таблицы
const range = "Лист1!A2:F2"; // Диапазон ячеек для чтения

async function getData() {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
  );
  const data = await response.json();
  return data.values;
}

getData().then((data) => {
  // Обработка данных
  console.log(data);
  // Выводим данные на страницу
  const tableBody = document.getElementById("tableBody");
  data.forEach((row) => {
    const newRow = document.createElement("tr");
    row.forEach((cell) => {
      const newCell = document.createElement("td");
      newCell.textContent = cell;
      newRow.appendChild(newCell);
    });
    tableBody.appendChild(newRow);
  });
});
