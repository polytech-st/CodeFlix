document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.querySelector(".search-form");
  const genreSelect = document.getElementById("genreSelect");

  function filterSlides(swiperSelector) {
    const query = searchInput.value.trim().toLowerCase();
    const genre = genreSelect.value;
    const swiperWrapper = document.querySelector(`${swiperSelector} .swiper-wrapper`);
    const slides = swiperWrapper.querySelectorAll('.swiper-slide');

    slides.forEach(slide => {
      const name = slide.dataset.name ? slide.dataset.name.toLowerCase() : '';
      const genres = slide.dataset.genre ? slide.dataset.genre.split(',') : [];
      const matchesName = name.includes(query);
      const matchesGenre = !genre || genres.map(g => g.trim().toLowerCase()).includes(genre.toLowerCase());

      slide.style.display = (matchesName && matchesGenre) ? '' : 'none';
    });

    // Оновлення Swiper після фільтрації
    const swiperInstance = document.querySelector(swiperSelector).swiper;
    if (swiperInstance) {
      swiperInstance.update();
    }
  }

  // Початкова фільтрація при завантаженні
  filterSlides('.friends-swiper');
  filterSlides('.family-swiper');

  // Події для пошуку
  searchInput.addEventListener("input", function () {
    filterSlides('.friends-swiper');
    filterSlides('.family-swiper');
  });

  // Подія при зміні жанру
  genreSelect.addEventListener("change", function () {
    filterSlides('.friends-swiper');
    filterSlides('.family-swiper');
  });

  // Подія при відправці форми
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    filterSlides('.friends-swiper');
    filterSlides('.family-swiper');
  });
});
