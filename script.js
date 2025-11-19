let score = parseInt(localStorage.getItem('coinScore')) || 0;
const scoreElement = document.getElementById('score');
const coinElement = document.getElementById('coin');

// Hisobni yangilash
function updateScore() {
  scoreElement.textContent = score;
  localStorage.setItem('coinScore', score);
}

// Tugmaga bosish hodisasi
coinElement.addEventListener('click', () => {
  score += 1;
  updateScore();

  // Qisqa animatsiya qo'shish
  coinElement.style.transform = 'scale(0.9)';
  setTimeout(() => {
    coinElement.style.transform = 'scale(1)';
  }, 100);
});

// Dastlabki hisobni ko'rsatish
updateScore();
