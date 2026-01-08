const books = [
  {
    title: "Абай жолы",
    author: "Мұхтар Әуезов",
    description: "Қазақ әдебиетіндегі ең көрнекті роман-эпопея."
  },
  {
    title: "Қан мен тер",
    author: "Әбдіжәміл Нұрпейісов",
    description: "Қазақ халқының әлеуметтік өмірін суреттейтін шығарма."
  },
  {
    title: "Менің атым Қожа",
    author: "Бердібек Соқпақбаев",
    description: "Балалар мен жасөспірімдерге арналған повесть."
  }
];

const bookList = document.getElementById("book-list");

books.forEach(book => {
  const div = document.createElement("div");
  div.className = "book";

  div.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Автор:</strong> ${book.author}</p>
    <p>${book.description}</p>
  `;

  bookList.appendChild(div);
});
