// ==================== BLOG DATA ====================
// Sample blog posts with image URLs from Unsplash (optimized for performance)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Modern JavaScript",
    category: "javascript",
    author: "Sarah Johnson",
    date: "2026-01-15",
    views: 1234,
    excerpt: "Learn the fundamentals of ES6+ JavaScript and modern development practices. This comprehensive guide covers arrow functions, async/await, and more.",
    content: "JavaScript has evolved significantly over the years. Modern JavaScript, often referred to as ES6+, introduces powerful features that make code more readable and maintainable. In this article, we'll explore arrow functions, destructuring, template literals, promises, and async/await. These features form the foundation of modern JavaScript development and are essential for any developer looking to build robust web applications.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Responsive Web Design Best Practices",
    category: "design",
    author: "Mike Chen",
    date: "2026-01-14",
    views: 987,
    excerpt: "Master the art of creating websites that look great on all devices. Learn about flexbox, grid, and mobile-first design.",
    content: "Responsive web design is no longer optional—it's essential. With the variety of devices people use to browse the web, your site needs to adapt seamlessly. We'll cover CSS Grid and Flexbox for layout, media queries for different breakpoints, and the mobile-first approach that ensures optimal performance across all devices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Building RESTful APIs with Node.js",
    category: "web-development",
    author: "Emily Rodriguez",
    date: "2026-01-13",
    views: 2156,
    excerpt: "A complete guide to creating scalable and maintainable REST APIs using Node.js and Express framework.",
    content: "RESTful APIs are the backbone of modern web applications. In this tutorial, we'll build a complete API from scratch using Node.js and Express. You'll learn about routing, middleware, error handling, authentication, and best practices for API design. We'll also cover testing and deployment strategies.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    featured: false
  },
  {
    id: 4,
    title: "CSS Grid Layout: A Complete Guide",
    category: "design",
    author: "David Park",
    date: "2026-01-12",
    views: 1543,
    excerpt: "Everything you need to know about CSS Grid, from basics to advanced techniques for creating complex layouts.",
    content: "CSS Grid revolutionized web layouts. Unlike older techniques, Grid allows you to create two-dimensional layouts with ease. This guide covers grid containers, grid items, tracks, gaps, alignment, and responsive grids. You'll learn how to create magazine-style layouts, dashboards, and complex responsive designs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Introduction to React Hooks",
    category: "javascript",
    author: "Lisa Wang",
    date: "2026-01-11",
    views: 3421,
    excerpt: "Discover how React Hooks have changed the way we write React components. Learn useState, useEffect, and custom hooks.",
    content: "React Hooks transformed React development by allowing state and lifecycle features in functional components. We'll explore useState for state management, useEffect for side effects, useContext for global state, and how to create custom hooks. You'll understand when and why to use hooks, making your React code more elegant and maintainable.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Web Performance Optimization Techniques",
    category: "tutorials",
    author: "Alex Thompson",
    date: "2026-01-10",
    views: 1876,
    excerpt: "Learn how to make your websites faster with lazy loading, code splitting, and performance monitoring.",
    content: "Website performance directly impacts user experience and SEO. In this comprehensive guide, we'll cover image optimization, lazy loading, code splitting, caching strategies, and performance monitoring tools. You'll learn how to measure and improve Core Web Vitals, reduce bundle sizes, and implement progressive enhancement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false
  },
  {
    id: 7,
    title: "Understanding Async/Await in JavaScript",
    category: "javascript",
    author: "Ryan Mitchell",
    date: "2026-01-09",
    views: 2234,
    excerpt: "Master asynchronous JavaScript with async/await. Say goodbye to callback hell and promise chains.",
    content: "Asynchronous programming is crucial in JavaScript. Async/await syntax makes asynchronous code look and behave more like synchronous code. We'll cover the basics, error handling with try/catch, parallel execution, and common patterns. You'll learn how to handle multiple async operations efficiently.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    featured: false
  },
  {
    id: 8,
    title: "The Future of Web Development",
    category: "news",
    author: "Jessica Lee",
    date: "2026-01-08",
    views: 4321,
    excerpt: "Explore emerging technologies and trends shaping the future of web development in 2026 and beyond.",
    content: "Web development is constantly evolving. From WebAssembly and Progressive Web Apps to AI integration and edge computing, new technologies are reshaping how we build for the web. We'll discuss the latest trends, upcoming standards, and what developers need to learn to stay relevant in the changing landscape.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    featured: false
  },
  {
    id: 9,
    title: "Building Accessible Websites",
    category: "tutorials",
    author: "Marcus Brown",
    date: "2026-01-07",
    views: 1654,
    excerpt: "Learn how to make your websites accessible to everyone, including users with disabilities.",
    content: "Web accessibility ensures everyone can use your website. We'll cover ARIA labels, semantic HTML, keyboard navigation, screen reader compatibility, and WCAG guidelines. You'll learn practical techniques to make your sites more inclusive while improving SEO and usability for all users.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    featured: false
  },
  {
    id: 10,
    title: "TypeScript for JavaScript Developers",
    category: "javascript",
    author: "Anna Martinez",
    date: "2026-01-06",
    views: 2987,
    excerpt: "Make the transition from JavaScript to TypeScript and enjoy the benefits of static typing.",
    content: "TypeScript adds static typing to JavaScript, catching errors before runtime. This guide helps JavaScript developers understand types, interfaces, generics, and advanced TypeScript features. You'll learn how TypeScript improves code quality, enhances IDE support, and makes large codebases more maintainable.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    featured: false
  },
  {
    id: 11,
    title: "Modern CSS Animations",
    category: "design",
    author: "Chris Anderson",
    date: "2026-01-05",
    views: 1432,
    excerpt: "Create stunning animations with CSS transitions, transforms, and keyframe animations.",
    content: "CSS animations can enhance user experience without JavaScript. We'll explore transitions for smooth property changes, transforms for 2D and 3D effects, and keyframe animations for complex sequences. You'll learn performance considerations, animation timing functions, and how to create engaging micro-interactions.",
    image: "https://images.unsplash.com/photo-1550063873-ab792950096b?w=800&q=80",
    featured: false
  },
  {
    id: 12,
    title: "Git and GitHub Workflow for Teams",
    category: "tutorials",
    author: "Tom Wilson",
    date: "2026-01-04",
    views: 2145,
    excerpt: "Master Git branching strategies, pull requests, and collaboration workflows for successful team projects.",
    content: "Effective Git workflows are essential for team collaboration. We'll cover branching strategies like Git Flow and GitHub Flow, creating meaningful commits, managing pull requests, resolving conflicts, and using Git hooks. You'll learn best practices that keep projects organized and collaborative.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80",
    featured: false
  },
  {
    id: 13,
    title: "Progressive Web Apps (PWA) Guide",
    category: "web-development",
    author: "Nina Patel",
    date: "2026-01-03",
    views: 1876,
    excerpt: "Build web applications that work offline and provide native app-like experiences.",
    content: "Progressive Web Apps combine the best of web and mobile apps. We'll cover service workers for offline functionality, app manifests for installability, push notifications, and caching strategies. You'll learn how to create PWAs that work offline, load instantly, and engage users like native apps.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    featured: false
  },
  {
    id: 14,
    title: "Database Design Best Practices",
    category: "web-development",
    author: "Kevin Zhang",
    date: "2026-01-02",
    views: 1543,
    excerpt: "Learn how to design efficient, scalable, and maintainable database schemas for your applications.",
    content: "Good database design is crucial for application performance. We'll discuss normalization, denormalization, indexing strategies, relationships, and query optimization. You'll understand when to use SQL vs NoSQL, how to model data effectively, and techniques for scaling databases as your application grows.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    featured: false
  },
  {
    id: 15,
    title: "Cybersecurity Essentials for Developers",
    category: "news",
    author: "Rachel Green",
    date: "2026-01-01",
    views: 3214,
    excerpt: "Protect your applications from common security vulnerabilities and attacks.",
    content: "Security should be a priority in development. We'll cover OWASP Top 10 vulnerabilities, SQL injection prevention, XSS protection, CSRF tokens, authentication best practices, and secure coding principles. You'll learn how to think like an attacker to build more secure applications.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    featured: false
  },
  {
    id: 16,
    title: "Mastering Flexbox Layouts",
    category: "design",
    author: "Sophie Turner",
    date: "2025-12-30",
    views: 1987,
    excerpt: "Complete guide to CSS Flexbox for creating flexible and responsive layouts with ease.",
    content: "Flexbox is perfect for one-dimensional layouts. We'll cover flex containers, flex items, alignment properties, flex-grow/shrink/basis, and practical layout patterns. You'll learn when to use Flexbox vs Grid, how to center elements perfectly, and create navigation bars, card layouts, and more.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    featured: false
  },
  {
    id: 17,
    title: "Testing JavaScript Applications",
    category: "tutorials",
    author: "Daniel Kim",
    date: "2025-12-29",
    views: 1654,
    excerpt: "Learn unit testing, integration testing, and end-to-end testing for JavaScript apps.",
    content: "Testing ensures code reliability. We'll explore Jest for unit testing, React Testing Library for component testing, and Cypress for end-to-end tests. You'll learn test-driven development (TDD), mocking, code coverage, and continuous integration with automated testing.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    featured: false
  },
  {
    id: 18,
    title: "Docker for Web Developers",
    category: "web-development",
    author: "Laura Smith",
    date: "2025-12-28",
    views: 2345,
    excerpt: "Containerize your applications with Docker for consistent development and deployment environments.",
    content: "Docker simplifies deployment and environment management. We'll cover Docker basics, creating Dockerfiles, docker-compose for multi-container apps, volumes, networks, and best practices. You'll learn how to containerize your applications, set up development environments, and deploy to production.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
    featured: false
  },
  {
    id: 19,
    title: "AI and Machine Learning in Web Apps",
    category: "news",
    author: "James Wilson",
    date: "2025-12-27",
    views: 3987,
    excerpt: "Integrate AI capabilities into your web applications using modern frameworks and APIs.",
    content: "AI is transforming web development. We'll explore TensorFlow.js for browser-based machine learning, OpenAI API integration, natural language processing, computer vision, and practical AI use cases. You'll learn how to add intelligent features to your applications without being an ML expert.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    featured: false
  },
  {
    id: 20,
    title: "State Management in React Applications",
    category: "javascript",
    author: "Maria Garcia",
    date: "2025-12-26",
    views: 2765,
    excerpt: "Compare different state management solutions: Context API, Redux, Zustand, and Recoil.",
    content: "Choosing the right state management solution is crucial. We'll compare built-in React Context, Redux for complex apps, Zustand for simplicity, and Recoil for atomic state. You'll understand the trade-offs, when to use each solution, and best practices for managing global and local state effectively.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    featured: false
  }
];

// ==================== STATE MANAGEMENT ====================
let allPosts = [...blogPosts];
let filteredPosts = [...blogPosts];
let displayedPosts = [];
let currentCategory = 'all';
let currentSort = 'newest';
let searchQuery = '';
let postsPerPage = 9;
let currentPage = 1;

// ==================== DOM ELEMENTS ====================
const elements = {
  loadingSpinner: document.getElementById('loadingSpinner'),
  hamburger: document.getElementById('hamburger'),
  navMenu: document.querySelector('.nav-menu'),
  themeToggle: document.getElementById('themeToggle'),
  heroSearch: document.getElementById('heroSearch'),
  heroSearchBtn: document.getElementById('heroSearchBtn'),
  searchInput: document.getElementById('searchInput'),
  searchBtn: document.getElementById('searchBtn'),
  sortSelect: document.getElementById('sortSelect'),
  filterBtns: document.querySelectorAll('.filter-btn'),
  featuredPost: document.getElementById('featuredPost'),
  postsGrid: document.getElementById('postsGrid'),
  noResults: document.getElementById('noResults'),
  resultsTitle: document.getElementById('resultsTitle'),
  resultsCount: document.getElementById('resultsCount'),
  loadMoreBtn: document.getElementById('loadMoreBtn'),
  postModal: document.getElementById('postModal'),
  closeModal: document.querySelector('.close-modal'),
  backToTop: document.getElementById('backToTop'),
  contactForm: document.getElementById('contactForm')
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Simulate loading
  setTimeout(() => {
    elements.loadingSpinner.classList.add('hidden');
  }, 500);

  // Setup event listeners
  setupEventListeners();

  // Load theme preference
  loadThemePreference();

  // Render featured post
  renderFeaturedPost();

  // Initial render
  applyFiltersAndSort();

  // Setup lazy loading for images
  setupLazyLoading();
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  // Mobile menu
  elements.hamburger?.addEventListener('click', toggleMobileMenu);

  // Theme toggle
  elements.themeToggle?.addEventListener('click', toggleTheme);

  // Search functionality
  elements.heroSearchBtn?.addEventListener('click', handleHeroSearch);
  elements.heroSearch?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleHeroSearch();
  });

  elements.searchBtn?.addEventListener('click', handleSearch);
  elements.searchInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  // Sort
  elements.sortSelect?.addEventListener('change', handleSort);

  // Category filters
  elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => handleCategoryFilter(btn));
  });

  // Load more
  elements.loadMoreBtn?.addEventListener('click', loadMorePosts);

  // Modal
  elements.closeModal?.addEventListener('click', closeModal);
  elements.postModal?.addEventListener('click', (e) => {
    if (e.target === elements.postModal) closeModal();
  });

  // Back to top
  elements.backToTop?.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', handleScroll);

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (elements.navMenu.classList.contains('active')) {
          toggleMobileMenu();
        }
      }
    });
  });

  // Contact form
  elements.contactForm?.addEventListener('submit', handleContactForm);

  // Footer category links
  document.querySelectorAll('.footer-section a[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      currentCategory = category;
      updateActiveFilter(category);
      applyFiltersAndSort();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
  elements.hamburger?.classList.toggle('active');
  elements.navMenu?.classList.toggle('active');
}

// ==================== THEME TOGGLE ====================
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  elements.themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    elements.themeToggle.querySelector('.theme-icon').textContent = '☀️';
  }
}

// ==================== SEARCH ====================
function handleHeroSearch() {
  searchQuery = elements.heroSearch?.value.trim().toLowerCase() || '';
  elements.searchInput.value = searchQuery;
  applyFiltersAndSort();
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

function handleSearch() {
  searchQuery = elements.searchInput?.value.trim().toLowerCase() || '';
  elements.heroSearch.value = searchQuery;
  applyFiltersAndSort();
}

// ==================== CATEGORY FILTER ====================
function handleCategoryFilter(btn) {
  currentCategory = btn.dataset.category;
  updateActiveFilter(currentCategory);
  applyFiltersAndSort();
}

function updateActiveFilter(category) {
  elements.filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
}

// ==================== SORT ====================
function handleSort() {
  currentSort = elements.sortSelect?.value || 'newest';
  applyFiltersAndSort();
}

// ==================== FILTER AND SORT LOGIC ====================
function applyFiltersAndSort() {
  // Reset to first page
  currentPage = 1;
  displayedPosts = [];

  // Filter
  filteredPosts = allPosts.filter(post => {
    // Category filter
    const categoryMatch = currentCategory === 'all' || post.category === currentCategory;

    // Search filter
    const searchMatch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery) ||
      post.excerpt.toLowerCase().includes(searchQuery) ||
      post.author.toLowerCase().includes(searchQuery) ||
      post.content.toLowerCase().includes(searchQuery);

    return categoryMatch && searchMatch;
  });

  // Sort
  switch (currentSort) {
    case 'oldest':
      filteredPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case 'popular':
      filteredPosts.sort((a, b) => b.views - a.views);
      break;
    case 'title-asc':
      filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'title-desc':
      filteredPosts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'newest':
    default:
      filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // Update UI
  updateResultsInfo();
  loadMorePosts();
}

// ==================== RENDER POSTS ====================
function updateResultsInfo() {
  const categoryName = currentCategory === 'all' ? 'All Articles' :
    currentCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  elements.resultsTitle.textContent = searchQuery ? `Search Results for "${searchQuery}"` : categoryName;
  elements.resultsCount.textContent = `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} found`;
}

function loadMorePosts() {
  const start = displayedPosts.length;
  const end = start + postsPerPage;
  const newPosts = filteredPosts.slice(start, end);

  displayedPosts = [...displayedPosts, ...newPosts];

  if (currentPage === 1) {
    renderPosts(displayedPosts);
  } else {
    appendPosts(newPosts);
  }

  currentPage++;

  // Show/hide load more button
  if (displayedPosts.length >= filteredPosts.length) {
    elements.loadMoreBtn?.classList.add('hidden');
  } else {
    elements.loadMoreBtn?.classList.remove('hidden');
  }
}

function renderPosts(posts) {
  if (posts.length === 0) {
    elements.postsGrid.style.display = 'none';
    elements.noResults.style.display = 'block';
    elements.loadMoreBtn?.classList.add('hidden');
    return;
  }

  elements.postsGrid.style.display = 'grid';
  elements.noResults.style.display = 'none';

  elements.postsGrid.innerHTML = posts.map(post => createPostCard(post)).join('');

  // Add click listeners
  addPostClickListeners();
}

function appendPosts(posts) {
  const newPostsHTML = posts.map(post => createPostCard(post)).join('');
  elements.postsGrid.insertAdjacentHTML('beforeend', newPostsHTML);

  // Add click listeners to new posts
  addPostClickListeners();
}

function createPostCard(post) {
  return `
        <article class="post-card" data-post-id="${post.id}">
            <div class="post-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
                <span class="post-category-badge">${getCategoryName(post.category)}</span>
            </div>
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <div class="post-author">
                        <span>👤</span>
                        <span>${post.author}</span>
                    </div>
                    <div class="post-date">
                        <span>📅</span>
                        <span>${formatDate(post.date)}</span>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// ==================== FEATURED POST ====================
function renderFeaturedPost() {
  const featured = allPosts.find(post => post.featured);
  if (!featured) return;

  elements.featuredPost.innerHTML = `
        <div class="featured-post" data-post-id="${featured.id}">
            <div class="featured-image">
                <img src="${featured.image}" alt="${featured.title}" loading="eager">
                <span class="featured-badge">Featured</span>
            </div>
            <div class="featured-content">
                <span class="featured-category">${getCategoryName(featured.category)}</span>
                <h2>${featured.title}</h2>
                <p class="featured-excerpt">${featured.excerpt}</p>
                <div class="featured-meta">
                    <span>👤 ${featured.author}</span>
                    <span>📅 ${formatDate(featured.date)}</span>
                    <span>👁️ ${formatViews(featured.views)}</span>
                </div>
                <button class="btn-read-featured">Read Article</button>
            </div>
        </div>
    `;

  // Add click listener
  elements.featuredPost.querySelector('.featured-post').addEventListener('click', () => {
    openPostModal(featured.id);
  });
}

// ==================== POST MODAL ====================
function addPostClickListeners() {
  document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = parseInt(card.dataset.postId);
      openPostModal(postId);
    });
  });
}

function openPostModal(postId) {
  const post = allPosts.find(p => p.id === postId);
  if (!post) return;

  const modalContent = document.getElementById('modalPostContent');
  modalContent.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="modal-post-image" loading="eager">
        <div class="modal-post-content">
            <span class="modal-post-category">${getCategoryName(post.category)}</span>
            <h1>${post.title}</h1>
            <div class="modal-post-meta">
                <span>👤 ${post.author}</span>
                <span>📅 ${formatDate(post.date)}</span>
                <span>👁️ ${formatViews(post.views)}</span>
            </div>
            <div class="modal-post-body">
                <p>${post.content}</p>
                <p>${post.content}</p>
                <p>This article provides comprehensive insights into ${post.title.toLowerCase()}. Whether you're a beginner or an experienced developer, these techniques and best practices will help you improve your skills and build better applications.</p>
            </div>
        </div>
    `;

  elements.postModal?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  elements.postModal?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==================== UTILITY FUNCTIONS ====================
function getCategoryName(category) {
  return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatViews(views) {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K views`;
  }
  return `${views} views`;
}

// ==================== SCROLL HANDLERS ====================
function handleScroll() {
  // Back to top button
  if (window.pageYOffset > 300) {
    elements.backToTop?.classList.add('visible');
  } else {
    elements.backToTop?.classList.remove('visible');
  }

  // Active nav link on scroll
  updateActiveNavLink();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.pageYOffset + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ==================== LAZY LOADING ====================
function setupLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading natively
    return;
  }

  // Fallback for browsers that don't support lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// ==================== CONTACT FORM ====================
function handleContactForm(e) {
  e.preventDefault();

  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  // Simulate form submission
  showNotification('Thank you for your message! We\'ll get back to you soon.');

  // Reset form
  elements.contactForm.reset();
}

// ==================== NOTIFICATIONS ====================
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 350px;
    `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
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

// ==================== PERFORMANCE MONITORING ====================
// Log performance metrics (can be removed in production)
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
  }
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
  // ESC to close modal
  if (e.key === 'Escape' && elements.postModal?.classList.contains('active')) {
    closeModal();
  }

  // Ctrl/Cmd + K for search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    elements.searchInput?.focus();
  }
});