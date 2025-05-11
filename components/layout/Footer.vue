<template>
  <footer class="bg-black text-light py-5">
    <div class="footer-container">
      <!-- Main footer content -->
      <div class="row mb-4">
        <!-- Logo and brand column -->
        <div class="col-md-4 mb-4 mb-md-0">
          <div class="d-flex flex-column align-items-start">
            <NuxtLink to="/" class="mb-2">
              <div class="logo-container">
                <img src="~/assets/icons/DT-black.png" alt="Developer Test" class="logo-img">
              </div>
            </NuxtLink>

          </div>

          <!-- Social media icons -->
          <div class="social-icons d-flex ">
            <a href="#" class="social-icon-link">
              <img src="~/assets/icons/facebook_Gold.png" alt="Facebook" class="social-icon">
            </a>
            <a href="#" class="social-icon-link">
              <img src="~/assets/icons/Youtube - Gold.png" alt="YouTube" class="social-icon">
            </a>
            <a href="#" class="social-icon-link">
              <img src="~/assets/icons/instagram_Gold.png" alt="Instagram" class="social-icon">
            </a>
            <a href="#" class="social-icon-link">
              <img src="~/assets/icons/Twitter - Gold.png" alt="Twitter" class="social-icon">
            </a>
          </div>
        </div>

        <!-- Center navigation columns -->
        <div class="col-md-4 d-flex">
          <!-- Navigation links column 1 -->
          <div class="me-5 links">
            <ul class="list-unstyled footer-links">
              <li><NuxtLink class="text-light text-decoration-none" to="/">Home</NuxtLink></li>
              <li><NuxtLink class="text-light text-decoration-none" to="/about">About us</NuxtLink></li>
              <li><NuxtLink class="text-light text-decoration-none" to="/media">Media center</NuxtLink></li>
              <li><NuxtLink class="text-light text-decoration-none" to="/contact">Contact Us</NuxtLink></li>
            </ul>
          </div>

          <!-- Navigation links column 2 -->
          <div class="links">
            <ul class="list-unstyled footer-links ">
              <li><NuxtLink class="text-light text-decoration-none" to="/category/electronics">Electronics</NuxtLink></li>
              <li><NuxtLink class="text-light text-decoration-none" to="/category/jewelery">Jwelery</NuxtLink></li>
              <li><NuxtLink class="text-light text-decoration-none" to="/category/men's clothing">Men Clothing</NuxtLink></li>
              <li><NuxtLink class="text-light text-decoration-none" to="/category/women's clothing">Women Clothing</NuxtLink></li>
            </ul>
          </div>
        </div>

        <!-- Contact information column -->




        <div class="col-md-4 text-md-end links">
          <div class="contact-info ">
             <h5 class="contact-heading">Contact us</h5>
               <p>+971 00 000 0000</p>
               <p>+971 0 000 0000</p>
               <p>info@sample.com</p>
              </div>
            </div>

      </div>

      <!-- Copyright section -->
      <div class="row border-top border-secondary pt-3">
        <div class="col-12 text-center">
          <p class="mb-0">© Developer Test 2024. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.links {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-container {
  padding: 0 3rem;
}

.logo-img {
  height: 20rem;
  width: 20rem;
  margin-bottom: -3rem;
  filter: brightness(0) invert(1);
}

.social-icons {
  margin-left: 3rem;
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 1rem;
  height: 1rem;
  filter: brightness(0) invert(1);
}

.social-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: transparent;
  border: 0.0625rem solid white;
  transition: all 0.3s ease;
}

.social-icon-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-links li {
  margin-bottom: 0;
}

.footer-links a {
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #f8f9fa !important;
}

.developer-text {
  font-size: 1.75rem;
  font-weight: 300;
  letter-spacing: 0.05rem;
}

.contact-heading {
  font-size: 1.5rem;
  font-weight: 500;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-info p {
  margin-bottom: 0;
}

/* Responsive styles */
@media (max-width: 991.98px) {
  .logo-img {
    height: 15rem;
    width: 15rem;
    margin-bottom: -2rem;
  }

  .social-icons {
    margin-left: 2rem;
  }

  .links {
    margin-top: 1rem;
  }
}

@media (max-width: 767.98px) {
  .footer-container {
    padding: 0 1.5rem;
  }

  .logo-img {
    height: 12rem;
    width: 12rem;
    margin-bottom: -1.5rem;
  }

  .social-icons {
    margin-left: 1rem;
    gap: 0.75rem;
  }

  .social-icon-link {
    width: 2rem;
    height: 2rem;
  }

  .links {
    justify-content: flex-start;
    margin-top: 2rem;
  }

  .col-md-4.text-md-end.links {
    text-align: left !important;
  }

  .footer-links {
    gap: 1rem;
  }

  .contact-info {
    gap: 1rem;
  }
}

@media (max-width: 575.98px) {
  .logo-img {
    height: 10rem;
    width: 10rem;
    margin-bottom: -1rem;
  }

  .social-icons {
    margin-left: 0.5rem;
  }

  .col-md-4.d-flex {
    flex-direction: column;
  }

  .col-md-4.d-flex .me-5 {
    margin-right: 0 !important;
    margin-bottom: 2rem;
  }
}
</style>