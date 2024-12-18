<template>
    <div class="container">
      <div class="card">
        <div class="tabs">
          <button
            class="tab-button"
            :class="{ 'active': activeTab === 'login' }"
            @click="activeTab = 'login'"
          >
            Sign In
          </button>
          <button
            class="tab-button"
            :class="{ 'active': activeTab === 'register' }"
            @click="activeTab = 'register'"
          >
            Register
          </button>
        </div>
  
        <div v-if="activeTab === 'login'" class="tab-content">
          <h2 class="title">Welcome to the Future</h2>
          <p class="subtitle">Sign in to continue</p>
  
          <form @submit.prevent="handleLogin">
            <div class="input-group" :class="{ 'input-error': !loginEmail && showValidation }">
              <label class="input-label" for="login-email">Email</label>
              <input
                id="login-email"
                type="email"
                v-model="loginEmail"
                class="input"
                placeholder="you@example.com"
                required
              />
              <span v-if="!loginEmail && showValidation" class="error-message">Email is required.</span>
            </div>
            <div class="input-group" :class="{ 'input-error': !loginPassword && showValidation }">
              <label class="input-label" for="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                v-model="loginPassword"
                class="input"
                placeholder="Enter your password"
                required
              />
              <span v-if="!loginPassword && showValidation" class="error-message">Password is required.</span>
            </div>
            <button
              type="submit"
              class="button"
              :disabled="!loginEmail || !loginPassword"
              @click="showValidation = true"
            >
              Next
            </button>
          </form>
        </div>
  
        <div v-if="activeTab === 'register'" class="tab-content">
          <h2 class="title">Create a New Account</h2>
          <p class="subtitle">Join the future with us</p>
  
          <form @submit.prevent="handleRegister">
            <div class="input-group" :class="{ 'input-error': !registerName && showValidation }">
              <label class="input-label" for="register-name">Name</label>
              <input
                id="register-name"
                type="text"
                v-model="registerName"
                class="input"
                placeholder="Enter your name"
                required
              />
              <span v-if="!registerName && showValidation" class="error-message">Name is required.</span>
            </div>
            <div class="input-group" :class="{ 'input-error': !registerEmail && showValidation }">
              <label class="input-label" for="register-email">Email</label>
              <input
                id="register-email"
                type="email"
                v-model="registerEmail"
                class="input"
                placeholder="you@example.com"
                required
              />
              <span v-if="!registerEmail && showValidation" class="error-message">Email is required.</span>
            </div>
            <div class="input-group" :class="{ 'input-error': !registerPassword && showValidation }">
              <label class="input-label" for="register-password">Password</label>
              <input
                id="register-password"
                type="password"
                v-model="registerPassword"
                class="input"
                placeholder="Enter a password"
                required
              />
              <span v-if="!registerPassword && showValidation" class="error-message">Password is required.</span>
            </div>
            <button
              type="submit"
              class="button"
              :disabled="!registerName || !registerEmail || !registerPassword"
              @click="showValidation = true"
            >
              Register
            </button>
          </form>
        </div>
  
        <div class="footer">
          <RouterLink to="/" class="footer-link">Go to Homepage</RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: { RouterLink },
    data() {
      return {
        activeTab: 'login',
        loginEmail: '',
        loginPassword: '',
        registerName: '',
        registerEmail: '',
        registerPassword: '',
        showValidation: false,
      };
    },
    methods: {
      handleLogin() {
        // Simulate API call for login
        alert('Logged in successfully!');
        this.$router.push('/');
      },
      handleRegister() {
        // Simulate API call for registration
        alert('Registered successfully!');
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .card {
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    width: 100%;
    max-width: 36rem;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .tab-button {
    background-color: transparent;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    transition: color 0.3s ease, border-bottom 0.3s ease;
  }
  
  .tab-button.active {
    color: #2c3855;
    border-bottom: 3px solid #2c3855;
  }
  
  .tab-content {
    margin-top: 1.5rem;
  }
  
  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
    color: #2c3855;
  }
  
  .subtitle {
    color: #6b7280;
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .input-group {
    margin-bottom: 1.5rem;
  }
  
  .input-label {
    color: #6b7280;
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .input {
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: border-color 0.3s ease;
  }
  
  .input:focus {
    border-color: #2c3855;
    outline: none;
  }
  
  .input-error .input {
    border-color: red;
  }
  
  .error-message {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
  
  .button {
    background-color: #2c3855;
    border-radius: 0.5rem;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    width: 100%;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #1e2640;
  }
  
  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .footer {
    color: #6b7280;
    font-size: 0.875rem;
    margin-top: 2rem;
    text-align: center;
  }
  
  .footer-link {
    color: #2c3855;
    font-weight: 600;
    text-decoration: none;
  }
  
  .footer-link:hover {
    text-decoration: underline;
  }
  </style>
  