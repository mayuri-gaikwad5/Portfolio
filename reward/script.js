const filterButtons = document.querySelectorAll('.filter-btn');
const achievementCards = document.querySelectorAll('.achievement-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    achievementCards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Popup functionality
const popupOverlay = document.getElementById('popup-overlay');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let currentIndex = 0;
const images = Array.from(document.querySelectorAll('.achievement-img'));

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    popupOverlay.classList.remove('hidden');
    popupImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.addEventListener('click', () => {
  popupOverlay.classList.add('hidden');
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  popupImg.src = images[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  popupImg.src = images[currentIndex].src;
});
