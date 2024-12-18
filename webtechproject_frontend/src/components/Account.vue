<template>
    <div class="account-container">
      <h1>Mein Konto bearbeiten</h1>
      <form @submit.prevent="updateUser">
        <div class="form-group">
          <label for="firstName">Vorname:</label>
          <input v-model="user.firstName" id="firstName" type="text" />
        </div>
  
        <div class="form-group">
          <label for="lastName">Nachname:</label>
          <input v-model="user.lastName" id="lastName" type="text" />
        </div>
  
        <div class="form-group">
          <label for="email">E-Mail:</label>
          <input v-model="user.email" id="email" type="email" />
        </div>
  
        <div class="form-group">
          <label for="password">Passwort:</label>
          <input v-model="user.password" id="password" type="password" />
        </div>
  
        <div class="form-group">
          <label for="country">Land:</label>
          <input v-model="user.country" id="country" type="text" />
        </div>
  
        <div class="form-group">
          <label for="city">Stadt:</label>
          <input v-model="user.city" id="city" type="text" />
        </div>
  
        <div class="form-group">
          <label for="phoneNumber">Telefonnummer:</label>
          <input v-model="user.phoneNumber" id="phoneNumber" type="tel" />
        </div>
  
        <div class="form-group">
          <label for="address">Adresse:</label>
          <input v-model="user.address" id="address" type="text" />
        </div>
  
        <div class="form-group">
          <label for="postalCode">Postleitzahl:</label>
          <input v-model="user.postalCode" id="postalCode" type="text" />
        </div>
  
        <div class="form-group">
          <label for="gender">Geschlecht:</label>
          <select v-model="user.gender" id="gender">
            <option value="male">Männlich</option>
            <option value="female">Weiblich</option>
            <option value="other">Andere</option>
          </select>
        </div>
  
        <RouterLink to="/"><button type="submit">Speichern</button></RouterLink>
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
          email: '',
          password: '',
          country: '',
          city: '',
          phoneNumber: '',
          address: '',
          postalCode: '',
          gender: 'male' // Standardwert auf "male"
        }
      };
    },
    methods: {
      async updateUser() {
        try {
          const response = await this.$store.dispatch('updateUser', this.user);
          console.log('Benutzer aktualisiert:', response);
          // Zeige Erfolgsmeldung oder führe weitere Aktionen durch
        } catch (error) {
          console.error('Fehler beim Aktualisieren:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .account-container {
    max-width: 600px;
    margin: auto;
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
  