# Nuxt E-commerce Project

A modern e-commerce application built with Nuxt 3, Bootstrap, and the Fake Store API.

## 🚀 Features

- **Modern Framework**: Built with Nuxt 3 for optimal performance and developer experience
- **Responsive Design**: Fully responsive layout that works on all screen sizes
- **Product Catalog**: Browse products by category with dynamic routing
- **Product Details**: View detailed product information with related products
- **Shopping Cart**: Add products to cart, modify quantities, and remove items
- **Search Functionality**: Search for products across the entire catalog
- **Bootstrap Integration**: Utilizes Bootstrap 5 for consistent UI components
- **Fake Store API**: Connects to the Fake Store API for product data

## 📋 Project Structure

```
nuxt-ecommerce/
├── assets/                 # Static assets
│   ├── fonts/              # Custom fonts (Dubai)
│   ├── icons/              # Icon images
│   ├── images/             # Image assets
│   └── styles/             # Global CSS files
├── components/             # Vue components organized by feature
│   ├── cart/               # Cart-related components
│   │   ├── CartItem.vue    # Individual cart item component
│   │   └── CartSummary.vue # Cart summary with totals
│   ├── common/             # Shared/reusable components
│   │   ├── AddToCartButton.vue # Add to cart button component
│   │   └── Carousel.vue    # Reusable carousel component
│   ├── home/               # Home page components
│   │   ├── Banner.vue      # Main banner carousel
│   │   ├── MembershipPromo.vue # Membership promotion section
│   │   ├── NewArrivals.vue # New arrivals carousel
│   │   ├── PromoImage.vue  # Promotional image section
│   │   ├── SeeMore.vue     # "See more" section with button
│   │   └── SpecialOffers.vue # Special offers carousel
│   ├── layout/             # Layout components
│   │   ├── Footer.vue      # Site footer with navigation and social links
│   │   └── Header.vue      # Site header with navigation and search
│   └── product/            # Product-related components
│       ├── ProductCard.vue # Product card for listings
│       └── ProductDetails.vue # Detailed product view
├── composables/            # Composable functions for data and logic
│   ├── apiTypes.ts         # API type definitions
│   ├── useFetchCategories.ts # Fetch product categories
│   ├── useFetchCategoryProducts.ts # Fetch products by category
│   ├── useFetchProduct.ts  # Fetch single product details
│   └── useSearchProducts.ts # Search functionality
├── layouts/                # Layout templates
│   └── default.vue         # Default layout with header and footer
├── pages/                  # Application pages and routes
│   ├── category/           # Category pages
│   │   └── [id].vue        # Dynamic category page
│   ├── product/            # Product pages
│   │   └── [id].vue        # Dynamic product detail page
│   ├── cart.vue            # Shopping cart page
│   ├── index.vue           # Home page
│   └── search.vue          # Search results page
├── plugins/                # Nuxt plugins
│   └── bootstrap.client.ts # Bootstrap integration
├── public/                 # Public static files
├── server/                 # Server-side code
├── stores/                 # Pinia stores
│   └── cart.ts             # Cart state management
├── app.vue                 # Main application component
├── nuxt.config.ts          # Nuxt configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## 🔧 Technologies Used

- **[Nuxt 3](https://nuxt.com/)**: Vue.js framework for building modern web applications
- **[Vue 3](https://vuejs.org/)**: Progressive JavaScript framework
- **[TypeScript](https://www.typescriptlang.org/)**: Typed JavaScript
- **[Bootstrap 5](https://getbootstrap.com/)**: CSS framework for responsive design
- **[Pinia](https://pinia.vuejs.org/)**: State management for Vue applications
- **[Fake Store API](https://fakestoreapi.com/)**: REST API for e-commerce product data

## 🛠️ Setup and Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd nuxt-ecommerce

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`.

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (below 768px)

Key responsive features include:

- Collapsible mobile navigation
- Adaptive product grids
- Responsive carousels with varying items per slide
- Flexible layout that adjusts to screen size

## 🔄 API Integration

The application connects to the [Fake Store API](https://fakestoreapi.com/) to fetch:

- Product listings
- Product categories
- Product details
- Search functionality

API calls are organized in composables for better code organization and reusability.

## 🛒 Shopping Cart

The shopping cart functionality is implemented using Pinia for state management:

- Add products to cart
- Update product quantities
- Remove products from cart
- Calculate totals
- Persistent cart state

## 🚀 Build and Deployment

```bash
# Build the application for production
npm run build

# Preview the production build
npm run preview

# Generate static site
npm run generate
```

## 🧩 Component Structure

The application follows a component-based architecture:

- **Layout Components**: Define the overall structure (Header, Footer)
- **Page Components**: Correspond to routes and compose other components
- **Feature Components**: Implement specific features (ProductCard, CartItem)
- **Common Components**: Reusable across the application (Carousel, AddToCartButton)

## 🔍 Future Improvements

Potential areas for enhancement:

- User authentication and profiles
- Checkout process
- Order history
- Wishlist functionality
- Product reviews and ratings
- Advanced filtering and sorting

## 📄 License

[MIT License](LICENSE)
