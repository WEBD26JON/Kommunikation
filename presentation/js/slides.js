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
            eyebrow: "Slide 00 · INLEDNING · 45 sek",
            title: "Webbaserad lösning för fastighetsbranschen",
            content: "TUC-IT → FASTIGHETSBOLAG",
            footer: "Digital lösning · fungerande MVP"
        },
        {
            eyebrow: "Slide 01 · ETHOS · NULÄGET · 2 min",
            title: "Rätt information – men inte alltid tillgänglig",
            caption: "När arbetstempot är högt och flera personer delar på ansvaret blir det lätt att viktig information missas.",
            image: "images/image01.jpg",
            footer: "Risk för fel → avvikelser → vite",
            fit: "contain"
        },
        {
            eyebrow: "Slide 02 · LOGOS · INFORMATIONSGLAPPET · 1 min",
            title: "När arbetsområdet ändras följer kraven inte med",
            caption: "Oavsett vem som arbetar på området behövs rätt information till rätt person.",
            image: "images/image02.jpg",
            footer: "Informationen finns – men kopplingen saknas.",
            fit: "contain"
        },
        {
            eyebrow: "Slide 03 · LOGOS · LÖSNINGEN · 1 min",
            title: "Rätt information till rätt person",
            caption: "Arbetsuppgift, arbetsområde och rätt instruktioner samlas på samma plats.",
            image: "images/image03.jpg",
            footer: "Informationen följer medarbetaren – till rätt plats och rätt uppgift.",
            fit: "contain"
        },
        {
            eyebrow: "Slide 04 · PATHOS · VÄRDET · 1 min",
            title: "Mindre risk – större trygghet",
            caption: "När det är stressigt frågar man inte alltid – man gör som man tror är rätt.",
            image: "images/image04.jpg",
            footer: "Det är lättare att göra rätt när rätt information finns nära.",
            fit: "contain"
        },
        {
            eyebrow: "Slide 05 · NÄSTA STEG · 1 min",
            title: "Ska vi testa det i verkligheten?",
            caption: "Vi har en fungerande MVP – informationen finns nära när medarbetaren behöver den.",
            image: "images/image05.jpg",
            footer: "Vad skulle ni vilja testa först?",
            fit: "contain"
        },
        {
            eyebrow: "FEEDBACK · REFLEKTION · 45 sek",
            title: "Såg ni informationsglappet?",
            content: "Var uppstod det?",
            footer: "Informationen fanns – men kopplingen saknades."
        }

    ]
};
