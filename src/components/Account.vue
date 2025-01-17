<template>
    <div class="account-container">
      <h1>Account</h1>
      <form @submit.prevent="updateAccount">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input v-model="user.firstName" id="firstName" type="text" />
        </div>
  
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input v-model="user.lastName" id="lastName" type="text" >
        </div>
  
        <div class="form-group">
          <label for="country">Country:</label>
          <input v-model="user.country" id="country" type="text" />
        </div>
  
        <div class="form-group">
          <label for="city">City:</label>
          <input v-model="user.city" id="city" type="text" />
        </div>
  
        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input v-model="user.phoneNumber" id="phoneNumber" type="tel" />
        </div>
  
        <div class="form-group">
          <label for="address">Address:</label>
          <input v-model="user.address" id="address" type="text" />
        </div>
  
        <div class="form-group">
          <label for="postalCode">Zip code:</label>
          <input v-model="user.postalCode" id="postalCode" type="text" />
        </div>
  
        <div class="form-group">
          <label for="gender">Gender:</label>
          <select v-model="user.gender" id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </div>
  
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          country: '',
          city: '',
          phoneNumber: '',
          address: '',
          postalCode: '',
          gender: '' // Standardwert auf "male"
        }
      };
    },
    methods: {
      async updateAccount() {
      try {
        this.$store.commit("setUser",this.user)
        this.$store.dispatch("updateAccount")
        this.user = { ...this.$store.state.user }
      } catch (error) {
        console.error('Fehler beim Senden der Anfrage:', error);
      }
    },
    async getUserData() {
  try {
    // Token aus dem Local Storage abrufen
    const token = localStorage.getItem('auth_token'); 

    // Sicherstellen, dass das Token existiert
    if (!token) {
      throw new Error('Kein Token gefunden');
    }

    // Senden der Anfrage mit dem Token im Authorization-Header
    const response = await fetch(this.$store.state.urlObject.userUrl + '/users', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`, // Token im Header hinzufügen
        "Content-Type": "application/json", // Optional, falls notwendig
      },
    });

    // Prüfen, ob die Anfrage erfolgreich war
    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    // Die Antwort parsen
    const responseObject = await response.json();
    console.log(responseObject);

    // Benutzer aus der Antwort extrahieren und speichern
    const responseUser = responseObject.user;

    const filteredUser = {
     firstName: responseUser.firstName,
        lastName: responseUser.lastName,
        city: responseUser.city,
        country: responseUser.country,
        phoneNumber: responseUser.phoneNumber,
        address: responseUser.address,
        postalCode: responseUser.postalCode,
        gender: responseUser.gender
    };

    this.$store.commit("setUser", filteredUser);
    this.user = { ...this.$store.state.user };

  } catch (error) {
    console.error("Fehler bei der Token-Überprüfung:", error);
    this.isLoggedIn = false;
  }
}
  
     
    },
    mounted() {
    this.getUserData()
    this.user = { ...this.$store.state.user }; // Kopiere die Benutzerdaten aus dem Store in das `user`-Objekt
    console.log(this.user)
    
  }
  };
  </script>
  
  <style scoped>
  .account-container {
    max-width: 800px;
    margin: 50px auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input,
  select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.8rem 1.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  