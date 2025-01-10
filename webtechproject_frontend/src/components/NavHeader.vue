<template>
  <nav :class="{ 'home-nav': isHomePage }">
    <ul class="nav__left">
      <li class="link"><router-link to="/">Home</router-link></li>
      <li class="link"><router-link to="/about">About Us</router-link></li>
      <li class="link no-style"><router-link to="/contact-us">Contact Us</router-link></li>
    </ul>

    <div class="nav__logo">ArmanAir</div>

    <ul class="nav__right">
      <li class="link login" v-if="!this.$store.state.isLoggedIn"><router-link to="/login">Log In</router-link></li>
      <li class="link blurr" v-if="this.$store.state.isLoggedIn"><router-link to="/user-information">Account</router-link></li>
      <li class="link login" v-if="this.$store.state.isLoggedIn">
        <router-link to="/" @click="logoutAccount">Log Out</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    async checkAuthStatus() {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await fetch(this.$store.state.urlObject.userUrl + '/check-auth', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const isTokenValid = await response.json();
        if(isTokenValid.tokenValid == true){
          this.$store.commit("setIsLoggedInTrue");
        }
        
      } catch (error) {
        console.error("Fehler bei der Token-Überprüfung:", error);
        this.$store.commit("setIsLoggedInFalse");
      }
    },
    logoutAccount() {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('email');
      this.isLoggedIn = false;
      this.$store.commit("setIsLoggedInFalse");
      console.log("Logout erfolgreich");
      this.$router.push('/');
    },
  },
  data() {
    return {
      isLoggedIn: false,
      isHomePage: false,
    };
  },
  watch: {
    '$route'(to) {
      this.isHomePage = to.name === 'HomeView' || to.path === '/';
    }
  },
  mounted() {
    this.checkAuthStatus();
    this.isHomePage = this.$route.name === 'HomeView' || this.$route.path === '/';
  },
};
</script>

<style scoped>
nav {
  position: absolute;
  width: 100%;
  padding: 1.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  z-index: 1000;
}

.home-nav {
  background: transparent;
  backdrop-filter: blur(1px);
}

.nav__logo {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  letter-spacing: 1px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.home-nav .nav__logo {
  color: var(--white);
}

.nav__left, .nav__right {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

.link a {
  font-weight: 500;
  color: var(--primary-color);
  transition: 0.3s;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
}

.home-nav .link a {
  color: var(--white);
}

.link a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.home-nav .link a::after {
  background-color: var(--white);
}

.link a:hover::after {
  width: 100%;
}

.login {
  background-color: var(--primary-color);
  padding: 0.8rem 2rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.login a {
  color: var(--white) !important;
}

.link:last-child a:hover {
  background-color: #0097e6;
}

@media (max-width: 768px) {
  nav {
    padding: 1rem 2rem;
  }

  .nav__left,
  .nav__right {
    gap: 1.5rem;
  }

  .link a {
    font-size: 0.9rem;
  }

  .nav__logo {
    left: 50%;
    transform: translateX(-50%);
  }
}

.blurr {
  backdrop-filter: blur(1px);
}
</style>