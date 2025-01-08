<template>
    <section class="about-section">
      <!-- Textbereich -->
      <div class="about-content">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Praesent ac nibh vestibulum, laoreet ipsum quis, vestibulum nisi.
        </p>
       
        <button class="learn-more-btn">Learn More</button>
      </div>
  
      <!-- Kartencontainer -->
      <div class="cards-container">
        <div v-for="(card, index) in cards" :key="index" class="card">
          <div class="icon-wrapper">
            <img :src="card.icon" :alt="card.title" />
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <a href="#" class="card-link">More</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          {
            title: "Leave a Legacy",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            icon: "https://placehold.co/600x400", // Beispiel: Pfad zum Icon
          },
          {
            title: "Make Donation",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            icon: "https://placehold.co/600x400",
          },
          {
            title: "Become a Fundraiser",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            icon: "https://placehold.co/600x400",
          },
          {
            title: "Become A Volunteer",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            icon: "https://placehold.co/600x400"
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Allgemeine Einstellungen */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    width: 100%;
  }
  
  /* Sektion Styling */
  .about-section {
  display: flex;
  justify-content: center;
  align-items: stretch; /* Macht beide Bereiche gleich hoch */
  padding: 2rem 4rem;
  background-color: #f9f9f9;
  color: #333;
  gap: 2rem;
}
  
  /* Textbereich */
 
.about-content {
  max-width: 350px;
  flex-shrink: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Damit der Button unten bleibt */
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
  .about-content h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .about-content p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .image-credit a {
    color: #2C3855;
    text-decoration: none;
  }
  
  .learn-more-btn {
    padding: 0.8rem 2rem;
    border: 2px solid #333;
    background: transparent;
    color: #333;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .learn-more-btn:hover {
    background-color: #2C3855;
    color: #fff;
  }
  
  /* Kartencontainer */
  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 700px;
  }
  
  /* Einzelne Karte */
  .card {
    background: #fff;
    color: #333;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
    transition: transform 0.3s;
    
  }
  
  .card:hover {
    transform: translateY(-10px);
  }
  
  .icon-wrapper {
    width: 50px;
    height: 50px;
    background-color: #2C3855;
    margin: 0 auto 0.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .icon-wrapper img {
    width: 50%;
  }
  
  .card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  .card p {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
  
  .card-link {
    text-decoration: none;
    color: #2C3855;
    font-weight: bold;
  }
  
  .card-link:hover {
    text-decoration: underline;
  }
  </style>
  