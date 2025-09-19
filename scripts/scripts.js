document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const cards = Array.from(document.querySelectorAll('.card'));
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    const dots = Array.from(document.querySelectorAll('.dot'));

    let currentIndex = 0;
    const cardWidth = cards[0].getBoundingClientRect().width; // Largeur d'une carte

    // Fonction pour mettre à jour la position du carrousel
    const updateCarousel = () => {
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateDots();
    };

    // Fonction pour mettre à jour les indicateurs (points)
    const updateDots = () => {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    // Gérer le clic sur le bouton "Précédent"
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    // Gérer le clic sur le bouton "Suivant"
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Gérer le clic sur les points
    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            const dotIndex = parseInt(e.target.dataset.index);
            currentIndex = dotIndex;
            updateCarousel();
        }
    });

    // S'assurer que le carrousel se recalcule si la fenêtre est redimensionnée
    window.addEventListener('resize', () => {
        const newCardWidth = cards[0].getBoundingClientRect().width;
        carouselTrack.style.transform = `translateX(-${currentIndex * newCardWidth}px)`;
    });

    // Initialisation
    updateCarousel();
});
