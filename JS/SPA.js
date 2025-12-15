// Function to fetch and inject HTML
async function loadSection(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const text = await response.text();
            document.getElementById(elementId).innerHTML = text;
        } else {
            console.error(`Error loading ${filePath}: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Helper: Creates a container div if it doesn't exist yet
function getOrCreateContainer(id) {
    let container = document.getElementById(id);
    if (!container) {
        container = document.createElement('div');
        container.id = id;
        // Append to the main 'spa-container' so they stack vertically
        document.getElementById('spa-container').appendChild(container);
    }
    return container;
}

// 1. PRELOAD ALL SECTIONS ON STARTUP
document.addEventListener('DOMContentLoaded', () => {
    // Load Product (Container already exists in index.html)
    loadSection('product_place_holder', 'sectionPages/html/product.html');

    // Create & Load About Section immediately
    getOrCreateContainer('about-view');
    loadSection('about-view', 'sectionPages/html/about.html');

    // Create & Load Contact Section immediately
    getOrCreateContainer('contact-view');
    loadSection('contact-view', 'sectionPages/html/contact.html');
});

// 2. Simplified Routing Function (Just Scrolls)
async function route(page) {
    if (page === 'home') {
        // If clicking "Product", scroll to the specific product ID
        if (window.location.hash === '#all-products') {
            const productSec = document.getElementById('all-products');
            if (productSec) productSec.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Default Home: Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    else if (page === 'about') {
        // Scroll to the already-loaded About section
        const container = document.getElementById('about-view');
        if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if (page === 'contact') {
        // Scroll to the already-loaded Contact section
        const container = document.getElementById('contact-view');
        if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
