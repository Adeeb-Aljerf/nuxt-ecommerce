<template>
  <header class="site-header">
    <div class="header-container">
      <div class="header-grid">
        <!-- Logo only on all screens -->
        <div class="logo-area">
          <NuxtLink to="/">
            <div class="logo-container">
              <img src="~/assets/icons/DT-black.png" alt="Developer Test" class="logo-img">
            </div>
          </NuxtLink>
        </div>

        <!-- Hamburger toggle only on small screens -->
        <button
          class="btn btn-outline-secondary d-lg-none mobile-menu-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNavbar"
          aria-controls="mobileNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <!-- Desktop Nav hidden on small screens -->
        <div class="top-nav-area d-none d-lg-block ">
          <ul class="nav top-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/media">Media Center</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/contact">Contact Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/ar">AR</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="categories-area d-none d-lg-block">
          <ul class="nav category-nav">
            <!-- Loading state -->
            <li v-if="loading" class="nav-item">
              <span class="nav-link">Loading categories...</span>
            </li>
            <!-- Error state -->
            <li v-else-if="error" class="nav-item">
              <span class="nav-link text-danger">Failed to load categories</span>
            </li>
            <!-- Categories list -->
            <template v-else>
              <li v-for="category in categories" :key="category.id" class="nav-item">
                <NuxtLink class="nav-link category-link" :to="category.url">
                  {{ category.name.toUpperCase() }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </div>

        <div class="search-icons-area d-none d-lg-block">
          <div class="d-flex align-items-center">
            <div class="search-wrapper me-3">
              <div class="search-container">
                <input
                  v-model="searchInput"
                  class="search-input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  @keyup.enter="handleSearch"
                >
                <button class="search-button" type="button" @click="handleSearch">
                  <img src="~/assets/icons/Search Mouve.png" alt="Search" class="search-icon">
                </button>
              </div>
            </div>
            <NuxtLink to="/profile" class="icon-link me-3">
              <img src="~/assets/icons/Login.png" alt="Profile" class="header-icon">
            </NuxtLink>
            <NuxtLink to="/favorites" class="icon-link me-3">
              <img src="~/assets/icons/heart_11613265.png" alt="Favorites" class="header-icon">
            </NuxtLink>
            <NuxtLink to="/cart" class="icon-link">
              <img src="~/assets/icons/Cart.png" alt="Cart" class="header-icon">
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Collapsible Mobile Menu -->
      <div id="mobileNavbar" class="collapse d-lg-none">
        <ul class="nav flex-column text-center py-3">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">About Us</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/media">Media Center</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact">Contact Us</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/ar">AR</NuxtLink>
          </li>
        </ul>
        <ul class="nav flex-column text-center">
          <!-- Loading state -->
          <li v-if="loading" class="nav-item">
            <span class="nav-link">Loading categories...</span>
          </li>
          <!-- Error state -->
          <li v-else-if="error" class="nav-item">
            <span class="nav-link text-danger">Failed to load categories</span>
          </li>
          <!-- Categories list -->
          <template v-else>
            <li v-for="category in categories" :key="category.id" class="nav-item">
              <NuxtLink class="nav-link category-link" :to="category.url">
                {{ category.name.toUpperCase() }}
              </NuxtLink>
            </li>
          </template>
        </ul>
        <div class="d-flex flex-column align-items-center py-3">
          <div class="search-wrapper mb-3">
            <div class="search-container">
              <input
                v-model="searchInput"
                class="search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
                @keyup.enter="handleSearch"
              >
              <button class="search-button" type="button" @click="handleSearch">
                <img src="~/assets/icons/Search Mouve.png" alt="Search" class="search-icon">
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-center gap-3">
            <NuxtLink to="/profile" class="icon-link">
              <img src="~/assets/icons/Login.png" alt="Profile" class="header-icon">
            </NuxtLink>
            <NuxtLink to="/favorites" class="icon-link">
              <img src="~/assets/icons/heart_11613265.png" alt="Favorites" class="header-icon">
            </NuxtLink>
            <NuxtLink to="/cart" class="icon-link">
              <img src="~/assets/icons/Cart.png" alt="Cart" class="header-icon">
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="header-border" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFetchCategories } from '~/composables/useFetchCategories'

// Fetch categories for the navigation
const { categories, loading, error } = useFetchCategories()

// Search functionality
const router = useRouter()
const searchInput = ref('')

const handleSearch = () => {
  const query = searchInput.value.trim()
  if (query) {
    // Navigate to search page with query parameter
    router.push({ path: '/search', query: { q: query } })
    // Clear the search input after navigation
    searchInput.value = ''
  }
}
</script>

<style scoped>
.site-header {
  background-color: white;
  position: relative;
  padding-bottom: 0.5rem;
}

.header-container{
  padding: 0 2rem;
}

.header-grid {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "logo empty top-nav"
    "logo categories search-icons";
  align-items: center;
}

.logo-area {
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  width: 120px;
}

/* Responsive styles */
@media (max-width: 992px) {
  .header-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "logo"
      "top-nav"
      "categories"
      "search-icons";
  }

  .logo-area {
    width: 100%;
    justify-content: center;
  }

  .top-nav-area,
  .categories-area,
  .search-icons-area {

    justify-self: center;
    width: 100%;
    padding: 0.5rem 0;
  }

  .top-nav,
  .category-nav {
    justify-content: center ;
  }
}

@media (max-width: 576px) {
  .category-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .category-link {
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }

  .search-icons-area .d-flex {
    flex-wrap: wrap;
    justify-content: center;
  }

  .search-wrapper {
    margin-bottom: 0.5rem;
    width: 100%;
    justify-content: center;
  }
}

.top-nav-area {
  grid-area: top-nav;
  justify-self: end;
  padding: 0.5rem 0;
}

.categories-area {
  grid-area: categories;
  padding: 0.5rem 0;
  margin-left: auto;
  margin-right: 5rem;
  justify-self: end;
}

.search-icons-area {
  grid-area: search-icons;
  justify-self: end;
  padding: 0.5rem 0;
}

.header-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #e5e5e5;
}

.top-nav {
  font-size: 0.8rem;
}

.top-nav .nav-link {
  color: #333;
  padding: 0.25rem 0.75rem;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  height: 100px;
  width: auto;
}

.category-nav {
  display: flex;
}

.category-link {
  font-weight: 500;
  color: #333;
  padding: 0.25rem 0.75rem;
  margin-right: 0.5rem;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
}

.search-wrapper {
  display: flex;
  align-items: center;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f8f8f8;

  padding: 0 10px;
  height: 32px;
}

.search-input {
  background: transparent;
  border: none;
  outline: none;
  width: 15rem;
  height: 100%;
  font-size: 0.8rem;
}

.search-input::placeholder {
  color: #777;
}

.search-button {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
}

.search-icon {
  height: 14px;
  width: auto;
}

.header-icon {
  height: 18px;
  width: auto;
}

.icon-link {
  display: flex;
  align-items: center;
}
.mobile-menu-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1050;
}
</style>
