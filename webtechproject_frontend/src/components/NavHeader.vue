<template>
  <nav>
    <div class="nav__logo">ArmanAir</div>
    <ul class="nav__links">
      <li class="link"><router-link to="/">Home</router-link></li>
      <li class="link"><router-link to="/about">About Us</router-link></li>
      <li class="link"><router-link to="/contact-us">Contact Us</router-link></li>
      <li class="link" v-if="!isLoggedIn"><router-link to="/login">Log In</router-link></li>
      <li class ="link" v-if="isLoggedIn"> <router-link to="/user-information">Account</router-link></li>
      <li class ="link" v-if="isLoggedIn"> <router-link to="/user-information" @click="logoutAccount">Log Out</router-link></li>

    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    async checkAuthStatus() {
  try {
    const token =   localStorage.getItem('auth_token'); 


    // Senden der Anfrage mit nur dem Token
    const response = await fetch(this.$store.state.urlObject.userUrl + '/check-auth', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }) // Das Token korrekt verpackt in ein JSON-Objekt
    });

    // Prüfen, ob die Anfrage erfolgreich war
    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    // Die Antwort parsen
    const isTokenValid = await response.json();

    // Token-Validierung überprüfen
    if (isTokenValid.tokenValid === true) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

  } catch (error) {
    console.error("Fehler bei der Token-Überprüfung:", error);
    this.isLoggedIn = false;
  }
},
logoutAccount({ commit }) {

  localStorage.removeItem('auth_token'); 
  localStorage.removeItem('email'); 
 this.isLoggedIn = false;
  console.log("Logout erfolgreich");
  this.$store.commit("setIsLoggedIn")


  this.$router.push('/');
}

},
data() {
  return {
    isLoggedIn: false
  };
},
mounted() {
  this.checkAuthStatus(); 
  console.log(this.isLoggedIn)
  console.log(this.$store.state.token)
}
  }

</script>


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