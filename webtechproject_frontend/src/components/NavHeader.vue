<template>
     <nav>
      <div class="nav__logo">ArmanAir</div>
      <ul class="nav__links">
        <li class="link"><router-link to="/">Home</router-link></li>
        <li class="link"><router-link to="/about">About Us</router-link></li>
        <li class="link"><router-link to="/contact-us">Contact Us</router-link></li>
        <li class="link"><router-link to = "/login">Log In</router-link></li>
      </ul>
    </nav>
</template>


    <router-link to="/about">About</router-link>

<style scoped>
nav {
  max-width: var(--max-width);
  margin: auto;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
}


.nav__links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
}



.link a {
  font-weight: 500;
  color: var(--text-light);
  transition: 0.3s;
}

.link a:hover {
  color: var(--primary-color);
}

</style>