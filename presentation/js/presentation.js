(() => {
    "use strict";

    let currentSlide = 0;
    let slideStartedAt = performance.now();

    const elements = {
        image: document.getElementById("slide-image"),
        title: document.getElementById("slide-title"),
        caption: document.getElementById("slide-caption"),
        footer: document.getElementById("slide-footer"),
        counter: document.getElementById("slide-counter"),
        timer: document.getElementById("timer"),
        previous: document.getElementById("previous"),
        next: document.getElementById("next")
    };

    function applyTheme() {
        const theme = presentation.theme === "dark" ? "dark" : "light";
        document.body.dataset.theme = theme;
    }

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function renderSlide() {
        const slide = presentation.slides[currentSlide];

        elements.image.src = slide.image;
        elements.image.alt = slide.title || `Slide ${currentSlide + 1}`;

        elements.title.textContent = slide.title || "";
        elements.caption.textContent = slide.caption || "";
        elements.footer.textContent = slide.footer || "";

        elements.title.hidden = !slide.title;
        elements.caption.hidden = !slide.caption;
        elements.footer.hidden = !slide.footer;

        elements.image.classList.toggle("cover", slide.fit === "cover");

        elements.counter.textContent =
            `${currentSlide + 1} / ${presentation.slides.length}`;

        // Every slide gets a fresh timer.
        slideStartedAt = performance.now();
        elements.timer.textContent = "00:00";

        updateNavigation();
    }

    function updateNavigation() {
        elements.previous.disabled = currentSlide === 0;
        elements.next.disabled = currentSlide === presentation.slides.length - 1;
    }

    function goToSlide(index) {
        if (index < 0 || index >= presentation.slides.length) {
            return;
        }

        currentSlide = index;
        renderSlide();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function previousSlide() {
        goToSlide(currentSlide - 1);
    }

    function updateTimer(now) {
        const elapsedSeconds = Math.floor((now - slideStartedAt) / 1000);
        elements.timer.textContent = formatTime(elapsedSeconds);
        requestAnimationFrame(updateTimer);
    }

    elements.next.addEventListener("click", nextSlide);
    elements.previous.addEventListener("click", previousSlide);

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "PageDown") {
            event.preventDefault();
            nextSlide();
        }

        if (event.key === "ArrowLeft" || event.key === "PageUp") {
            event.preventDefault();
            previousSlide();
        }

        if (event.key === "Home") {
            event.preventDefault();
            goToSlide(0);
        }

        if (event.key === "End") {
            event.preventDefault();
            goToSlide(presentation.slides.length - 1);
        }
    });

    if (!presentation.slides.length) {
        document.body.innerHTML =
            "<p style='padding: 2rem'>No slides configured.</p>";
        return;
    }

    applyTheme();
    renderSlide();
    requestAnimationFrame(updateTimer);
})();

