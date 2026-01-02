(function () {
    // about image
    const LIGHT = "/assets/images/profile/picture-light.png";
    const DARK = "/assets/images/profile/picture-dark.png";

    // navbar logo (sun/moon)
    const SUN = "/assets/images/sun.png";
    const MOON = "/assets/images/moon.png";

    function setupAboutImage() {
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
    }

    function updateAboutImage() {
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

    function updateNavbarLogo() {
        const img = document.querySelector(".navbar-brand img");
        if (!img) return;

        const isDark = document.body.classList.contains("quarto-dark");
        const desired = isDark ? MOON : SUN;

        // Avoid needless work
        const current = img.getAttribute("src") || "";
        if (current === desired) return;

        // Fast fade similar to about-image swap
        img.style.transition = img.style.transition || "opacity 120ms ease-out";
        img.style.opacity = "0";

        setTimeout(() => {
            img.setAttribute("src", desired);
            img.style.opacity = "1";
        }, 120);
    }

    function updateAll() {
        updateAboutImage();
        updateNavbarLogo();
    }

    document.addEventListener("DOMContentLoaded", () => {
        setupAboutImage();
        updateAll();

        const obs = new MutationObserver(updateAll);
        obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    });
})();
