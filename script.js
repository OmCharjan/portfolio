function tiltEffect(element, maxTilt = 12) {
    element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        element.style.transform =
            `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    element.addEventListener("mouseleave", () => {
        element.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
}

// HERO TILT
const heroCard = document.querySelector(".hero-card");
if (heroCard) tiltEffect(heroCard, 10);

// PROJECT CARDS TILT
document.querySelectorAll(".card").forEach(card => {
    tiltEffect(card, 14);
});