document.addEventListener('DOMContentLoaded', function () {
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  let currentItem = 0;

  function showItem(index) {
    carouselItems.forEach((item) => {
      item.classList.remove('active');
    });
    carouselItems[index].classList.add('active');
  }

  function nextItem() {
    currentItem = (currentItem + 1) % totalItems;
    showItem(currentItem);
  }

  function prevItem() {
    currentItem = (currentItem - 1 + totalItems) % totalItems;
    showItem(currentItem);
  }

  document
    .querySelector('.carousel-control-prev')
    .addEventListener('click', prevItem);
  document
    .querySelector('.carousel-control-next')
    .addEventListener('click', nextItem);

  showItem(currentItem);
});
