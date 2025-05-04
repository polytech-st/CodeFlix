const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "../Header/header.css"; // шлях відносно index.html
document.head.appendChild(link);

// 2. Завантажуємо HTML
fetch("../Header/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
