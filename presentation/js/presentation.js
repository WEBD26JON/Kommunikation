(() => {
    "use strict";

    let currentSlide = 0;
    let slideStartedAt = performance.now();

    const elements = {
        image: document.getElementById("slide-image"),
        content: document.getElementById("slide-content"),
        eyebrow: document.getElementById("slide-eyebrow"),
        title: document.getElementById("slide-title"),
        caption: document.getElementById("slide-caption"),
        footer: document.getElementById("slide-footer"),
        counter: document.getElementById("slide-counter"),
        timer: document.getElementById("timer"),
        previous: document.getElementById("previous"),
        next: document.getElementById("next"),
        navigation: document.getElementById("slide-navigation")
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

        /*
         * Header
         */
        elements.eyebrow.textContent = slide.eyebrow || "";
        elements.eyebrow.hidden = !slide.eyebrow;

        elements.title.textContent = slide.title || "";
        elements.title.hidden = !slide.title;

        elements.caption.textContent = slide.caption || "";
        elements.caption.hidden = !slide.caption;

        elements.footer.textContent = slide.footer || "";
        elements.footer.hidden = !slide.footer;


        /*
         * Main content
         *
         * A slide can contain either an image or central content.
         */
        const hasImage = Boolean(slide.image);
        const hasContent = Boolean(slide.content);

        elements.image.hidden = !hasImage;
        elements.content.hidden = !hasContent;

        
        if (hasImage) {
            elements.image.src = slide.image;
            elements.image.alt =
                slide.title || `Slide ${currentSlide + 1}`;

            elements.image.classList.toggle(
                "cover",
                slide.fit === "cover"
            );
        } else {
            elements.image.removeAttribute("src");
            elements.image.alt = "";
        }

        if (hasContent) {
            elements.content.textContent = slide.content;
        }


        /*
         * Slide counter
         */
        elements.counter.textContent =
            `${currentSlide + 1} / ${presentation.slides.length}`;


        /*
         * Every slide gets a fresh timer.
         */
        slideStartedAt = performance.now();
        elements.timer.textContent = "00:00";


        /*
         * Navigation
         */
        updateNavigation();
        updateSlideButtons();
    }

    function updateNavigation() {
        elements.previous.disabled = currentSlide === 0;
        elements.next.disabled =
            currentSlide === presentation.slides.length - 1;
    }

    function createSlideButtons() {
        elements.navigation.innerHTML = "";

        presentation.slides.forEach((slide, index) => {
            const button = document.createElement("button");

            button.type = "button";
            button.textContent = index + 1;
            button.className = "slide-number";
            button.setAttribute(
                "aria-label",
                `Go to slide ${index + 1}`
            );

            button.addEventListener("click", () => {
                goToSlide(index);
            });

            elements.navigation.appendChild(button);
        });
    }

    function updateSlideButtons() {
        const buttons =
            elements.navigation.querySelectorAll(".slide-number");

        buttons.forEach((button, index) => {
            const isActive = index === currentSlide;

            button.classList.toggle("active", isActive);
            button.setAttribute("aria-current", isActive ? "true" : "false");
        });
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
        const elapsedSeconds =
            Math.floor((now - slideStartedAt) / 1000);

        elements.timer.textContent =
            formatTime(elapsedSeconds);

        requestAnimationFrame(updateTimer);
    }

    elements.next.addEventListener("click", nextSlide);
    elements.previous.addEventListener("click", previousSlide);

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "ArrowRight" ||
            event.key === "PageDown"
        ) {
            event.preventDefault();
            nextSlide();
        }

        if (
            event.key === "ArrowLeft" ||
            event.key === "PageUp"
        ) {
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
    createSlideButtons();
    renderSlide();
    requestAnimationFrame(updateTimer);
})();
