(function () {
    const LIGHT = "/picture-light.png";
    const DARK = "/picture-dark.png";

    function setup() {
        const img = document.querySelector(".quarto-about-jolla img.about-image");
        if (!img || img.dataset.swapReady) return;

        // Wrap the existing image so layout keeps its space
        const wrap = document.createElement("span");
        wrap.className = "about-image";
        img.parentNode.insertBefore(wrap, img);
        wrap.appendChild(img);

        // Add the second image stacked on top
        const alt = img.cloneNode();
        alt.classList.add("about-image-alt");
        wrap.appendChild(alt);

        img.dataset.swapReady = "1";
        update();
    }

    function update() {
        const wrap = document.querySelector(".quarto-about-jolla .about-image");
        if (!wrap) return;

        const base = wrap.querySelector("img.about-image");
        const alt = wrap.querySelector("img.about-image-alt");
        if (!base || !alt) return;

        base.src = LIGHT;
        alt.src = DARK;

        const isDark = document.body.classList.contains("quarto-dark");
        base.style.opacity = isDark ? "0" : "1";
        alt.style.opacity = isDark ? "1" : "0";
    }

    document.addEventListener("DOMContentLoaded", () => {
        setup();
        const obs = new MutationObserver(update);
        obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    });
})();
