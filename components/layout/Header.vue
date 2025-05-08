<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Left: Company Logo -->
        <NuxtLink class="navbar-brand" to="/">
          <img src="~/assets/icons/DT-black.png" alt="Developer Test" style="height: 40px;" />
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Center & Right -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Center: Product Categories -->
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/category/electronics">Electronics</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/category/jewelry">Jewelry</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/category/mens-clothing">Men Clothing</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/category/womens-clothing">Women Clothing</NuxtLink>
            </li>
          </ul>
          <!-- Right: Search Bar & Icons -->
          <div class="d-flex align-items-center">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <NuxtLink to="/profile" class="me-2">
              <img src="~/assets/icons/Login.png" alt="Profile" style="height: 24px;" />
            </NuxtLink>
            <NuxtLink to="/favorites" class="me-2">
              <img src="~/assets/icons/heart_11613265.png" alt="Favorites" style="height: 24px;" />
            </NuxtLink>
            <NuxtLink to="/cart">
              <img src="~/assets/icons/Cart.png" alt="Cart" style="height: 24px;" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  // No additional logic needed yet.
  </script>
  
  <style scoped>
  /* Additional header-specific styling if needed */
  </style>
  