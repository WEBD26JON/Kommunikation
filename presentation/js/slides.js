/*
 * Presentation configuration and content
 *
 * Theme applies to the entire presentation:
 *   "light" or "dark"
 *
 * Image:
 *   - local path, e.g. "images/my-slide.png"
 *   - external URL, e.g. "https://example.com/image.png"
 *
 * fit:
 *   "contain" = show the complete image
 *   "cover"   = fill the available area, cropping if necessary
 */

const presentation = {
    title: "Presentation",
    theme: "light",

    slides: [
        {
            image: "images/image01.jpg",
            title: "Slide 1: Rätt information – men inte alltid tillgänglig",
            caption: "När arbetstempot är högt och flera personer delar på ansvaret blir det lätt att viktig information missas.",
            footer: "Risk för fel → avvikelser → vite",
            fit: "contain"
        },
        {
            image: "images/example-02.svg",
            title: "Slide 2",
            caption: "-",
            footer: "-",
            fit: "contain"
        },
        {
            image: "images/example-03.svg",
            title: "Slide 3",
            caption: "",
            footer: "MVP / exempel",
            fit: "contain"
        },
        {
            image: "images/example-04.svg",
            title: "Slide 4",
            caption: "Avslutning och nästa steg.",
            footer: "",
            fit: "contain"
        }
    ]
};

