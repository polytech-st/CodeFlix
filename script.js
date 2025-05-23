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

  document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const elements = document.querySelectorAll('[data-name]');

    elements.forEach(el => {
        const name = el.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            el.style.display = ''; // показати
        } else {
            el.style.display = 'none'; // приховати
        }
    });
});

  // const searchInput = document.getElementById("search");

  // searchInput.addEventListener("input", function () {
  //   const query = this.value.toLowerCase();
  //   const items = document.querySelectorAll(".swiper-slide poster");

  //   items.forEach(item => {
  //     console.log(item);
  //     const name = item.dataset.name.toLowerCase();
  //     if (name.includes(query)) {
  //       item.classList.remove("hidden");
  //     } else {
  //       item.classList.add("hidden");
  //     }
    // });
  // });