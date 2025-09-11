// script.js
// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация при прокрутке
function checkScroll() {
    const elements = document.querySelectorAll('.advantage-item, .cta-button, .details-button');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Если элемент виден в viewport
        if (position.top < window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Инициализация анимации
document.addEventListener('DOMContentLoaded', function() {
    // Установка начальных стилей для анимации
    const elements = document.querySelectorAll('.advantage-item, .cta-button, .details-button');
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Проверка при загрузке и прокрутке
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});
