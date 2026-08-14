/**
 * ==========================================================================
 * TSHWANE TRANSIT SYSTEM PORTFOLIO INTERACTION CONTROLLER
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initScrollReveal();
    initImageZoom();
    initSmoothNavigation();
});

/**
 * High-performance reveal viewport animations via IntersectionObserver API 
 */
function initScrollReveal() {
    const structuralSections = document.querySelectorAll(".animate-reveal");
    
    if (!structuralSections.length) return;

    const revealOptions = {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                // Unobserve node immediately after entry animation completes to free system hardware overhead
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    structuralSections.forEach(section => {
        revealObserver.observe(section);
    });
}

/**
 * Inline structural zoom controller for multi-layer deliverables charts
 */
function initImageZoom() {
    const zoomContainers = document.querySelectorAll(".js-zoomable");

    zoomContainers.forEach(container => {
        const structuralImage = container.querySelector("img");
        const trackingIndicator = container.querySelector(".zoom-indicator");

        if (!structuralImage) return;

        container.addEventListener("click", () => {
            const activeZoomState = container.classList.toggle("is-zoomed");
            
            if (trackingIndicator) {
                trackingIndicator.textContent = activeZoomState 
                    ? "Click to close zoom view" 
                    : "Click to explore Service Blueprint";
            }
        });
    });
}

/**
 * Smooth anchoring mechanics for in-page section analysis navigation
 */
function initSmoothNavigation() {
    const targetAnchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    targetAnchorLinks.forEach(trigger => {
        trigger.addEventListener("click", function(event) {
            event.preventDefault();
            
            const targetedSelector = this.getAttribute("href");
            const structuralTargetNode = document.querySelector(targetedSelector);

            if (structuralTargetNode) {
                // Keep structural offset variables consistent with the global fixed navigation threshold header height
                const headerOffsetHeight = 80;
                const elementPositionCoordinate = structuralTargetNode.getBoundingClientRect().top;
                const absoluteOffsetCoordinate = elementPositionCoordinate + window.pageYOffset - headerOffsetHeight;

                window.scrollTo({
                    top: absoluteOffsetCoordinate,
                    behavior: "smooth"
                });
            }
        });
    });
}