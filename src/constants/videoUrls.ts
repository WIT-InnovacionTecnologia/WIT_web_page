/**
 * Centralized video URLs.
 * 
 * CURRENT SETUP: Using local files in 'public/videos'
 * 
 * TO OPTIMIZE:
 * 1. Upload the contents of 'public/videos' to a distinct GitHub repository or use GitHub Pages.
 * 2. Replace the paths below with the full URL (e.g., "https://yourname.github.io/videos/IOT2.mp4")
 * 
 * This change will immediately speed up the site by offloading bandwidth.
 */

export const videoUrls = {
    hero: `${import.meta.env.BASE_URL}videos/aerial-birds-eye-tracking-shot-of-car-and-truck-dr-2025-08-28-14-35-14-utc.mov`,
    iot: `${import.meta.env.BASE_URL}videos/IOT2.mp4`,
    ai: `${import.meta.env.BASE_URL}videos/AI.mp4`,
    pmass: `${import.meta.env.BASE_URL}videos/PMASS.mov`,
    connp2: `${import.meta.env.BASE_URL}videos/connp2.mp4`,
};
