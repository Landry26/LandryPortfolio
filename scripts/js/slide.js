var slideIndex = 0;
var slides = document.querySelectorAll('.slideshow img');

function showNextSlide() {
  // Masquer toutes les diapositives
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Afficher la diapositive suivante
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = 'block';
}

// Fonction pour démarrer le diaporama automatique
function startSlideshow() {
  showNextSlide(); // Afficher la première diapositive

  // Définir l'intervalle pour passer à la diapositive suivante
  setInterval(function() {
    showNextSlide();
  }, 2000); // Changer de diapositive toutes les 2 secondes (ajustez selon vos besoins)
}

// Démarrer le diaporama automatique lorsque la page est chargée
window.onload = startSlideshow;
  