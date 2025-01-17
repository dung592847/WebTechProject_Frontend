<template>
    <div class="form-wrapper">
      <div class="container">
        <div class="logo">ArmanAir</div>
        <h1>Let's work together<span>.</span></h1>
        <p class="subtitle">Or reach us via: <a href="mailto:contact@armanair.com">contact@armanair.com</a></p>
        
        <form>
          <div class="form-row">
            <div class="form-group">
              <input type="text" placeholder="First name">
            </div>
            <div class="form-group">
              <input type="text" placeholder="Last name">
            </div>
          </div>
          
          <input type="email" placeholder="Email">
          
          <textarea placeholder="Message"></textarea>
          
          <div class="button-group">
            <button type="button" class="attachment-btn">
              📎 Add attachment
            </button>
            <button type="submit" class="send-btn">Send message</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  .form-wrapper {
    background-color: white;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .container {
    background-color: white;
    padding: 60px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 1150px; /* Erhöht von 800px */
    min-height: 80vh; /* Mindesthöhe hinzugefügt */
    margin: 40px;
  }
  
  .logo {
    font-size: 30px; /* Größer */
    font-weight: bold;
    margin-bottom: 50px; /* Mehr Abstand */
  }
  
  h1 {
    font-size: 3.5rem; /* Größer */
    margin-bottom: 15px;
  }
  
  h1 span {
    color: #435681;
  }
  
  .subtitle {
    font-size: 1.2rem; /* Größer */
    color: #666;
    margin-bottom: 40px;
  }
  
  .subtitle a {
    color: #435681;
    text-decoration: none;
  }
  
  .form-row {
    display: flex;
    gap: 30px; /* Mehr Abstand */
    margin-bottom: 30px;
  }
  
  .form-group {
    flex: 1;
  }
  
  input, textarea {
    width: 100%;
    padding: 15px; /* Größer */
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background-color: #f3f4f6;
    margin-bottom: 30px; /* Mehr Abstand */
    font-size: 1.1rem; /* Größer */
  }
  
  textarea {
    resize: vertical;
    min-height: 200px; /* Größer */
    border: 2px solid #435681;
  }
  
  .button-group {
    display: flex;
    gap: 30px;
    align-items: center;
    margin-top: 20px;
  }
  
  .attachment-btn {
    padding: 15px 25px;
    background-color: #f3f4f6;
    border: none;
    border-radius: 10px;
    color: #666;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
  }
  
  .send-btn {
    padding: 15px 40px;
    background-color: #435681;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    .form-row {
      flex-direction: column;
    }
    
    .container {
      padding: 30px;
      margin: 20px;
      min-height: auto;
    }
    
    h1 {
      font-size: 2.5rem;
    }
  }
  </style>