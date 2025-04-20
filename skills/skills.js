// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        skillCards.forEach(card => {
          if (filter === "all" || card.classList.contains(filter)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
  
const popupOverlay = document.getElementById('popup-overlay');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const certificateImgs = document.querySelectorAll('.certificate-img');

let currentIndex = 0;

// Function to open popup with specific image
function openPopup(index) {
  popupImg.src = certificateImgs[index].src;
  popupOverlay.classList.remove('hidden');
  currentIndex = index;
}

// Click on certificate image
certificateImgs.forEach((img, index) => {
  img.addEventListener('click', () => {
    openPopup(index);
  });
});

// Close Popup
closeBtn.addEventListener('click', () => {
  popupOverlay.classList.add('hidden');
});

// Close if click outside image
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.add('hidden');
  }
});

// Next Button
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % certificateImgs.length;
  openPopup(currentIndex);
});

// Previous Button
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + certificateImgs.length) % certificateImgs.length;
  openPopup(currentIndex);
});
  
