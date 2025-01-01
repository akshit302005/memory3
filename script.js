// Fireworks animation
function createFireworks() {
    const fireworks = document.getElementById('fireworks');
    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.setProperty('--i', i);
        fireworks.appendChild(firework);
    }
}

// Confetti animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }
}

// Start animations
function startAnimations() {
    createFireworks();
    createConfetti();
}

// Trigger animations on page load
window.onload = startAnimations;
