// Function to fetch and inject HTML
async function loadSection(elementId, filePath, callback) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const text = await response.text();
            document.getElementById(elementId).innerHTML = text;
            if (callback) callback(); // Run the script (renderProducts) after loading
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
        document.getElementById('spa-container').appendChild(container);
    }
    return container;
}

// 1. PRELOAD ALL SECTIONS ON STARTUP
document.addEventListener('DOMContentLoaded', () => {
    // Load Product and then Render Cards
    loadSection('product_place_holder', 'sectionPages/html/product.html', () => {
        // Ensure script.js is loaded and render function exists
        if (typeof renderProducts === "function" && typeof allProducts !== "undefined") {
            renderProducts(allProducts);
        }
    });

    // Create & Load About Section
    getOrCreateContainer('about-view');
    loadSection('about-view', 'sectionPages/html/about.html');

    // Create & Load Contact Section
    getOrCreateContainer('contact-view');
    loadSection('contact-view', 'sectionPages/html/contact.html');
});

// 2. Simplified Routing Function
async function route(page) {
    if (page === 'home') {
        if (window.location.hash === '#all-products') {
            const productSec = document.getElementById('all-products');
            if (productSec) productSec.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    else if (page === 'about') {
        const container = document.getElementById('about-view');
        if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if (page === 'contact') {
        const container = document.getElementById('contact-view');
        if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
