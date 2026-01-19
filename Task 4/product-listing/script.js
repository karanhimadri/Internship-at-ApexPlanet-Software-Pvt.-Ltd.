// Sample Product Data
const productsData = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        price: 79.99,
        rating: 4.5,
        reviews: 234,
        icon: "🎧",
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
        inStock: true
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "electronics",
        price: 199.99,
        rating: 4.2,
        reviews: 156,
        icon: "⌚",
        description: "Feature-packed smartwatch with fitness tracking, heart rate monitor, and GPS.",
        inStock: true
    },
    {
        id: 3,
        name: "Designer T-Shirt",
        category: "clothing",
        price: 29.99,
        rating: 4.0,
        reviews: 89,
        icon: "👕",
        description: "Premium cotton t-shirt with modern design. Available in multiple colors.",
        inStock: true
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "sports",
        price: 89.99,
        rating: 4.7,
        reviews: 312,
        icon: "👟",
        description: "Lightweight running shoes with excellent cushioning and support.",
        inStock: true
    },
    {
        id: 5,
        name: "Coffee Maker",
        category: "home",
        price: 69.99,
        rating: 4.3,
        reviews: 178,
        icon: "☕",
        description: "Programmable coffee maker with 12-cup capacity and auto-shutoff feature.",
        inStock: true
    },
    {
        id: 6,
        name: "Laptop Backpack",
        category: "electronics",
        price: 49.99,
        rating: 4.4,
        reviews: 267,
        icon: "🎒",
        description: "Durable laptop backpack with multiple compartments and USB charging port.",
        inStock: true
    },
    {
        id: 7,
        name: "Yoga Mat",
        category: "sports",
        price: 24.99,
        rating: 4.6,
        reviews: 445,
        icon: "🧘",
        description: "Non-slip yoga mat with extra cushioning, perfect for all types of exercises.",
        inStock: false
    },
    {
        id: 8,
        name: "Cookbook Collection",
        category: "books",
        price: 34.99,
        rating: 4.8,
        reviews: 523,
        icon: "📚",
        description: "Complete cookbook collection with over 500 recipes from around the world.",
        inStock: true
    },
    {
        id: 9,
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 59.99,
        rating: 4.5,
        reviews: 389,
        icon: "🔊",
        description: "Portable Bluetooth speaker with 360° sound and waterproof design.",
        inStock: true
    },
    {
        id: 10,
        name: "Denim Jeans",
        category: "clothing",
        price: 54.99,
        rating: 4.1,
        reviews: 201,
        icon: "👖",
        description: "Classic fit denim jeans made from premium sustainable cotton.",
        inStock: true
    },
    {
        id: 11,
        name: "Plant Pot Set",
        category: "home",
        price: 19.99,
        rating: 4.4,
        reviews: 156,
        icon: "🪴",
        description: "Set of 3 ceramic plant pots with drainage holes and saucers.",
        inStock: true
    },
    {
        id: 12,
        name: "Gaming Mouse",
        category: "electronics",
        price: 39.99,
        rating: 4.6,
        reviews: 412,
        icon: "🖱️",
        description: "Ergonomic gaming mouse with programmable buttons and RGB lighting.",
        inStock: true
    },
    {
        id: 13,
        name: "Winter Jacket",
        category: "clothing",
        price: 129.99,
        rating: 4.7,
        reviews: 287,
        icon: "🧥",
        description: "Warm winter jacket with water-resistant fabric and insulated lining.",
        inStock: true
    },
    {
        id: 14,
        name: "Tennis Racket",
        category: "sports",
        price: 119.99,
        rating: 4.3,
        reviews: 134,
        icon: "🎾",
        description: "Professional-grade tennis racket with graphite frame and comfort grip.",
        inStock: true
    },
    {
        id: 15,
        name: "Mystery Novel",
        category: "books",
        price: 14.99,
        rating: 4.2,
        reviews: 678,
        icon: "📖",
        description: "Bestselling mystery novel that will keep you guessing until the end.",
        inStock: true
    },
    {
        id: 16,
        name: "LED Desk Lamp",
        category: "home",
        price: 44.99,
        rating: 4.5,
        reviews: 223,
        icon: "💡",
        description: "Adjustable LED desk lamp with multiple brightness levels and USB port.",
        inStock: true
    },
    {
        id: 17,
        name: "Wireless Keyboard",
        category: "electronics",
        price: 64.99,
        rating: 4.4,
        reviews: 298,
        icon: "⌨️",
        description: "Slim wireless keyboard with quiet keys and long battery life.",
        inStock: false
    },
    {
        id: 18,
        name: "Summer Dress",
        category: "clothing",
        price: 39.99,
        rating: 4.0,
        reviews: 167,
        icon: "👗",
        description: "Lightweight summer dress with floral pattern, perfect for warm weather.",
        inStock: true
    },
    {
        id: 19,
        name: "Dumbbell Set",
        category: "sports",
        price: 79.99,
        rating: 4.8,
        reviews: 445,
        icon: "🏋️",
        description: "Adjustable dumbbell set with multiple weight options from 5 to 50 lbs.",
        inStock: true
    },
    {
        id: 20,
        name: "Wall Clock",
        category: "home",
        price: 27.99,
        rating: 4.3,
        reviews: 189,
        icon: "🕐",
        description: "Modern wall clock with silent sweep movement and easy-to-read numbers.",
        inStock: true
    }
];

// State
let filteredProducts = [...productsData];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilters = {
    categories: ['all'],
    minPrice: null,
    maxPrice: null,
    rating: 'all',
    search: ''
};

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cartCount = document.getElementById('cartCount');
const categoryFilters = document.getElementById('categoryFilters');
const ratingFilters = document.getElementById('ratingFilters');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const applyPriceFilter = document.getElementById('applyPriceFilter');
const clearFilters = document.getElementById('clearFilters');
const productModal = document.getElementById('productModal');
const closeModal = document.querySelector('.close-modal');

// Initialize
function init() {
    updateCartCount();
    renderProducts();
    setupEventListeners();
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Sort
    sortSelect.addEventListener('change', handleSort);

    // Category filters
    categoryFilters.addEventListener('change', (e) => {
        if (e.target.value === 'all') {
            // If "All Products" is checked, uncheck others
            if (e.target.checked) {
                categoryFilters.querySelectorAll('input').forEach(input => {
                    if (input.value !== 'all') input.checked = false;
                });
                currentFilters.categories = ['all'];
            }
        } else {
            // If any specific category is checked, uncheck "All Products"
            const allCheckbox = categoryFilters.querySelector('input[value="all"]');
            allCheckbox.checked = false;
            
            // Update categories array
            const checkedCategories = Array.from(categoryFilters.querySelectorAll('input:checked'))
                .map(input => input.value);
            currentFilters.categories = checkedCategories.length ? checkedCategories : ['all'];
            
            if (checkedCategories.length === 0) {
                allCheckbox.checked = true;
                currentFilters.categories = ['all'];
            }
        }
        applyFilters();
    });

    // Rating filters
    ratingFilters.addEventListener('change', (e) => {
        currentFilters.rating = e.target.value;
        applyFilters();
    });

    // Price filter
    applyPriceFilter.addEventListener('click', () => {
        currentFilters.minPrice = minPriceInput.value ? parseFloat(minPriceInput.value) : null;
        currentFilters.maxPrice = maxPriceInput.value ? parseFloat(maxPriceInput.value) : null;
        applyFilters();
    });

    // Clear filters
    clearFilters.addEventListener('click', resetFilters);

    // Modal
    closeModal.addEventListener('click', () => {
        productModal.classList.remove('active');
    });

    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('active');
        }
    });
}

// Search
function handleSearch() {
    currentFilters.search = searchInput.value.trim().toLowerCase();
    applyFilters();
}

// Apply Filters
function applyFilters() {
    filteredProducts = productsData.filter(product => {
        // Category filter
        const categoryMatch = currentFilters.categories.includes('all') || 
                            currentFilters.categories.includes(product.category);

        // Price filter
        const priceMatch = (!currentFilters.minPrice || product.price >= currentFilters.minPrice) &&
                          (!currentFilters.maxPrice || product.price <= currentFilters.maxPrice);

        // Rating filter
        const ratingMatch = currentFilters.rating === 'all' || 
                          product.rating >= parseFloat(currentFilters.rating);

        // Search filter
        const searchMatch = !currentFilters.search || 
                          product.name.toLowerCase().includes(currentFilters.search) ||
                          product.category.toLowerCase().includes(currentFilters.search);

        return categoryMatch && priceMatch && ratingMatch && searchMatch;
    });

    renderProducts();
}

// Sort Products
function handleSort() {
    const sortValue = sortSelect.value;

    switch (sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating-high':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            filteredProducts.sort((a, b) => a.id - b.id);
    }

    renderProducts();
}

// Render Products
function renderProducts() {
    resultsCount.textContent = `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} found`;

    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    productsGrid.style.display = 'grid';
    noResults.style.display = 'none';

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image" onclick="viewProduct(${product.id})">
                ${product.icon}
                ${!product.inStock ? '<span class="product-badge">Out of Stock</span>' : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${getStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})" 
                            ${!product.inStock ? 'disabled' : ''}>
                        ${!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                    <button class="btn-view" onclick="viewProduct(${product.id})">👁️</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Get Star Rating
function getStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '⭐'.repeat(fullStars);
    if (hasHalfStar) stars += '⭐';
    return stars;
}

// Add to Cart
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// View Product
function viewProduct(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const modalContent = document.getElementById('modalProductDetails');
    modalContent.innerHTML = `
        <div class="modal-product-image">${product.icon}</div>
        <div class="modal-product-info">
            <span class="product-category">${product.category.toUpperCase()}</span>
            <h2>${product.name}</h2>
            <div class="product-rating">
                <span class="stars">${getStars(product.rating)}</span>
                <span class="rating-count">(${product.reviews} reviews)</span>
            </div>
            <p>${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <button class="btn-add-cart" onclick="addToCart(${product.id}); productModal.classList.remove('active');"
                        ${!product.inStock ? 'disabled' : ''}>
                    ${!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                </button>
            </div>
        </div>
    `;

    productModal.classList.add('active');
}

// Reset Filters
function resetFilters() {
    // Reset checkboxes
    categoryFilters.querySelectorAll('input').forEach(input => {
        input.checked = input.value === 'all';
    });

    // Reset radio buttons
    ratingFilters.querySelector('input[value="all"]').checked = true;

    // Reset price inputs
    minPriceInput.value = '';
    maxPriceInput.value = '';

    // Reset search
    searchInput.value = '';

    // Reset sort
    sortSelect.value = 'default';

    // Reset filters object
    currentFilters = {
        categories: ['all'],
        minPrice: null,
        maxPrice: null,
        rating: 'all',
        search: ''
    };

    applyFilters();
}

// Cart Functions
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize app
init();