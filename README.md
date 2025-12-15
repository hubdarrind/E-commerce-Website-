# Fashora - Modern E-Commerce Website

**Fashora** is a responsive, modern, and luxury-themed e-commerce frontend built with **HTML**, **CSS**, **Bootstrap 5**, and **Vanilla JavaScript**. It features a Single Page Application (SPA) architecture for smooth navigation, a dynamic shopping cart with local storage persistence, and an elegant user interface.

## 🚀 Features

  **SPA Architecture:** Content sections (Products, About, Contact) are loaded dynamically using `fetch` API without refreshing the page.
  * **Dynamic Shopping Cart:**
      Add items to the cart with real-time badge updates.
      Adjust quantities or remove items directly from the side drawer (Offcanvas).
      **Data Persistence:** Cart items are saved to the browser's `localStorage`, so users don't lose their selection on refresh.
**Modern UI/UX:**
      Luxury design with gold accents and hover animations
      Animated marquee bar for announcements
      Testimonial carousel with auto-scrolling
  **Simulated Checkout:** Includes a checkout process that clears the cart and displays a success confirmation modal
  **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens using Bootstrap 5.

## 🛠️ Tech Stack

  **Frontend:** HTML5, CSS3, JavaScript (ES6+)
  **Framework:** Bootstrap 5.3.3 (Grid, Modals, Offcanvas).
  **Icons:** FontAwesome & Bootstrap Icons.
  **Fonts:** Google Fonts (Bebas Neue & Poppins).

## 📂 Project Structure

```bash
E-commerce-Website/
├── index.html              # Main entry point (Shell page)
├── style/
│   └── style.css           # Custom CSS for luxury theme & animations
├── JS/
│   ├── script.js           # Shopping cart logic & local storage
│   └── SPA.js              # Routing & dynamic HTML loading
├── sectionPages/html/      # Partial HTML files loaded dynamically
│   ├── product.html        # Product listings
│   ├── about.html          # About Us section
│   └── contact.html        # Contact form
└── images/                 # Product images and assets
```

## ⚡ How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Fashora-Ecommerce.git
    ```
2.  **Open the project:**
    Navigate to the project folder and open `index.html` in your browser.
3.  **Live Server (Recommended):**
    For the dynamic `fetch` API features (SPA loading) to work correctly, it is best to run this project using a local server (like **Live Server** in VS Code) to avoid CORS issues with local file paths.


## 🔮 Future Enhancements

  * Backend integration for real payment processing.
  * User authentication (Login/Sign up).
  * Product filtering and sorting.


**Developed by Hubdar Ali Rind**
