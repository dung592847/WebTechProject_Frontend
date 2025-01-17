<template>
  <section class="about-section">
    <!-- Text area -->
    <div class="about-content">
      <h1>About Us</h1>
      <p>
        We are dedicated to making your travel experience smooth and memorable. Whether you're booking a short flight or planning a long-haul adventure, we offer flexible options and unbeatable prices. Trust us to make your journey comfortable and hassle-free.
      </p>
      
      <button class="learn-more-btn">Learn More</button>
    </div>

    <!-- Cards container -->
    <div class="cards-container">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <div class="icon-wrapper">
          <img :src="card.icon" :alt="card.title" />
        </div>
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
        <a href="#" class="card-link">Learn More</a>
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
          title: "Flexible Booking",
          description: "Free rescheduling up to 24 hours before departure for all flights.",
          icon: "https://static.vecteezy.com/system/resources/previews/000/632/053/original/calendar-icon-symbol-sign-vector.jpg", // Example: Image path for icon
        },
        {
          title: "Affordable Pricing",
          description: "Find the best prices for your next flight with our price guarantee.",
          icon: "https://static.vecteezy.com/system/resources/previews/021/267/205/original/affordable-pricing-icon-style-free-vector.jpg",
        },
        {
          title: "Premium Comfort",
          description: "Upgrade your seat for more comfort and convenience during long-haul flights.",
          icon: "https://static.vecteezy.com/system/resources/previews/018/752/313/large_2x/comfort-icon-from-elderly-care-collection-simple-line-element-comfort-symbol-for-templates-web-design-and-infographics-vector.jpg",
        },
        {
          title: "24/7 Customer Support",
          description: "Our customer support team is available 24/7 to assist with your bookings.",
          icon: "https://th.bing.com/th/id/OIP.lPXIBW2gai3fKazHSwjC-AHaHa?w=200&h=200&c=7&r=0&o=5&dpr=2&pid=1.7"
        },
      ],
    };
  },
};
</script>

<style scoped>
/* General settings */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
  width: 100%;
}

/* Section styling */
.about-section {
  display: flex;
  justify-content: center;
  align-items: stretch; /* Makes both areas equally high */
  padding: 2rem 4rem;
  background-color: #f9f9f9;
  color: #333;
  gap: 2rem;
}

/* Text area */
.about-content {
  max-width: 350px;
  flex-shrink: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures the button stays at the bottom */
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

/* Cards container */
.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 700px;
}

/* Single card */
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
