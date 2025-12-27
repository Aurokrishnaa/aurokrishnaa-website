/**
 * Premium smooth scroll utility
 * Uses native smooth scrolling for immediate start with no delay
 */

/**
 * Smoothly scrolls to a target element
 * Uses native scroll behavior for immediate response
 * @param {string} elementId - The ID of the target element
 * @param {number} duration - Not used with native approach, kept for API compatibility
 * @param {number} offset - Additional offset from top (default: 0)
 */
export const smoothScrollTo = (elementId, duration = 1000, offset = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

    // Use native smooth scroll - starts immediately with no delay
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
};

/**
 * Smoothly scrolls to a specific Y position
 * @param {number} targetY - Target scroll position
 * @param {number} duration - Animation duration in milliseconds
 */
export const smoothScrollToPosition = (targetY, duration = 800) => {
    const startPosition = window.pageYOffset;
    const distance = targetY - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easedProgress = easeInOutCubic(progress);
        window.scrollTo(0, startPosition + distance * easedProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

export default smoothScrollTo;
