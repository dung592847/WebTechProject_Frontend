<template>
  <div v-if="!isLoggedIn" class="divBody2">
    <div class="title">Contact</div>
    <form @submit.prevent="createUser">
      <div class="user-details">
        <div class="input-box">
          <span class="details">First Name</span>
          <input type="text" placeholder="first name" v-model="registrationObject.firstName" required />
        </div>
        <div class="input-box">
          <span class="details">Last Name</span>
          <input type="text" placeholder="last name" v-model="registrationObject.lastName" required />
        </div>
        <div class="input-box">
          <span class="details">E-Mail</span>
          <input type="text" placeholder="E-Mail" v-model="registrationObject.email" required />
        </div>
        <div class="input-box">
          <span class="details">Confirm E-Mail</span>
          <input type="text" placeholder="confirm E-Mail" v-model="registrationObject.confirmEmail" required />
        </div>
        <div class="input-box">
          <span class="details">Password</span>
          <input type="password" placeholder="password" v-model="registrationObject.password" required />
        </div>
        <div class="input-box">
          <span class="details">Phone Number</span>
          <input type="text" placeholder="phone number" v-model="registrationObject.phoneNumber" required />
        </div>
        <div class="input-box">
          <span class="details">Address</span>
          <input type="text" placeholder="address" v-model="registrationObject.address" required />
        </div>
        <div class="input-box">
          <span class="details">Postal Code</span>
          <input type="text" placeholder="postal code" v-model="registrationObject.postalCode" required />
        </div>
        <div class="input-box">
          <span class="details">City</span>
          <input type="text" placeholder="city" v-model="registrationObject.city" required />
        </div>
        <div class="input-box">
          <span class="details">Country</span>
          <input type="text" placeholder="country" v-model="registrationObject.country" required />
        </div>
      </div>
      <div class="data-details">
        <input type="radio" name="gender" id="dot-1" v-model="registrationObject.gender" value="male" />
        <input type="radio" name="gender" id="dot-2" v-model="registrationObject.gender" value="female" />
        <span class="save-Data">Gender</span>
        <div class="category">
          <label for="dot-1">
            <span class="dot one"></span>
            <span class="data">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="data">Female</span>
          </label>
        </div>
      </div>
      <div class="button">
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>
  
  <script>
  export default {
    name: 'Contactform',
    data() {
    return {
      registrationObject:{
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      city:"",
      country:"",
      phoneNumber:"",
      adress:"",
      postalCode:"",
      gender :"",
      role: "USER"

    },
    isLoggedIn: false
    }
  },
  methods:{
    
    async createUser(){
    this.$store.commit("setRegistrationObjectToObject",this.registrationObject)
    await this.$store.dispatch("createAccount");

    await this.$store.dispatch("loginAccount",{emailUser: this.registrationObject.email,passwordUser: this.registrationObject.password});

    
  },
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
}

  
},

   

    mounted() {
  this.checkAuthStatus(); // Status bei Initialisierung überprüfen

}
  }
  </script>
  
  <style scoped>
  .divBody {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: white;
  }
  
  .divBody2 {
    max-width: 1000px;
    width: 100%;
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
  
  .divBody2 .title {
    font-size: 25px;
    font-weight: 500;
    position: relative;
  }
  
  .divBody2 .title::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    border-radius: 5px;
    
  }
  
  .divBody2 form .user-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
  }
  
  .user-details .input-box .details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  form .user-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
  }
  
  .user-details .input-box input {
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
  }
  
  .user-details .input-box input:focus,
  .user-details .input-box input:valid {
    border-color: #9b59b6;
  }
  
  form .data-details .save-Data {
    font-size: 20px;
    font-weight: 500;
  }
  
  form .data-details .category {
    display: flex;
    width: 80%;
    margin: 14px 0;
    justify-content: space-between;
  }
  
  .data-details .category label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .data-details .category .dot {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    margin-right: 10px;
    background: #d9d9d9;
    border: 5px solid transparent;
    transition: all 0.3s ease;
  }
  
  #dot-1:checked ~ .category label .one,
  #dot-2:checked ~ .category label .two {
    background: #2c3855;
    border-color: #d9d9d9;
  }
  
  form input[type="radio"] {
    display: none;
  }
  form .button {
    height: 45px;
    margin: 35px 0;
  }
  form .button input {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #2c3855;
  }
  form .button input:hover {
    background: #435681;
  }
  </style>