document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.querySelector(".search-form");
  let friendsSwiper, familySwiper;

  function initSwipers() {
    if (friendsSwiper) friendsSwiper.destroy(true, true);
    if (familySwiper) familySwiper.destroy(true, true);
  }

  function filterSlides(swiperSelector) {
    const query = searchInput.value.trim().toLowerCase();
    const swiperWrapper = document.querySelector(`${swiperSelector} .swiper-wrapper`);
    const slides = swiperWrapper.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
      const name = slide.dataset.name ? slide.dataset.name.toLowerCase() : '';
      slide.style.display = name.includes(query) ? '' : 'none';
    });
  }

  initSwipers();
  
  searchInput.addEventListener("input", function () {
    filterSlides('.friends-swiper');
    filterSlides('.family-swiper');
  });

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    filterSlides('.friends-swiper');
    filterSlides('.family-swiper');
  });
});