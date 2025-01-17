<template>

  <div class="nav-box">
    <NavHeader></NavHeader>
  </div>
  <AboutUs></AboutUs>
  
    <div class="wrapper">
      <h1>Our Services</h1>
      <p>We offer a wide range of services to ensure that your travel experience is as seamless and enjoyable as possible. Whether you're booking a flight, finding exclusive discounts, or need support, we've got you covered!</p>
      <div class="content-box">
        <div class="card">
          <h2>Flight Booking</h2>
          <p>Book flights quickly and easily with our platform. We offer a wide variety of destinations, airlines, and flexible schedules to fit your needs.</p>
        </div>
  
        <div class="card">
          <h2>Exclusive Discounts</h2>
          <p>Take advantage of exclusive discounts and offers on flights, hotels, and more. Our platform provides unbeatable deals for your travel plans.</p>
        </div>
  
        <div class="card">
          <h2>24/7 Support</h2>
          <p>Our dedicated support team is available 24/7 to assist you with any inquiries or issues. We're here to make sure your travel experience is smooth from start to finish.</p>
        </div>
  
        <div class="card">
          <h2>Popular Flights</h2>
          <p>Explore popular flight routes to your favorite destinations. We provide easy access to the most sought-after destinations worldwide.</p>
        </div>
  
        <div class="card">
          <h2>Consultation</h2>
          <p>Need help choosing the right flight? Our travel experts are available to provide personalized recommendations and advice tailored to your preferences.</p>
        </div>
  
        <div class="card">
          <h2>Flight Roulette</h2>
          <p>Take a chance with our Flight Roulette feature! Let us surprise you with exciting and affordable flight options to unique destinations.</p>
        </div>
  
        <div class="card">
          <h2>Email Notifications</h2>
          <p>Stay updated with the latest offers and flight deals by signing up for our email notifications. We’ll keep you informed of the best travel opportunities.</p>
        </div>
  
        <div class="card">
          <h2>Filter Options</h2>
          <p>Our advanced filter options allow you to search for flights based on various preferences such as price, departure time, and more. Find the best options for your trip.</p>
        </div>
      </div>
    
    </div>
  
    <div class="separator"></div>
  
  <FooterComponent></FooterComponent>
  </template>
  

<script >
// @ is an alias to /src
import NavHeader from "../components/NavHeader.vue"
import FooterComponent from "../components/FooterComponent.vue"
import AboutUs from "../components/AboutUs.vue"


export default {
  
  name: 'HomeView',
  components: {
    NavHeader,
    FooterComponent,
    AboutUs
  }
}
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nav-box{
 width: 100%;
 height: 100px; 
}
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1400px;
  margin: auto;
}

.wrapper h1{
  font-size: 3em;
  
  margin-top: 80px;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 500;
}

.content-box{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 550px;
  margin-top: 30px;
  
}

.card{
  min-width: 220px;
  width: 320px;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  margin: 10px 4px;
  
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
}

.card i {
  margin: 20px;
  color: #ff5724;
}

.card h2{
  margin-bottom: 12px;
  font-weight: 400;
  text-align: center;
}

.card p{
  color:#6c757d;
}



.card:hover i,
.card:hover p{
  color: #fff;
}

.card:hover h2{
  font-weight: 600;
  color: #f2f2f2;
}

.card:nth-child(1):hover{
  background: linear-gradient(
    45deg,
    rgba(148, 145, 144, 0.7) 0%,
    rgba(53, 53, 53, 0.7) 100%),
    url("../assets/flightbooking.jpg");
    background-size: cover;
    
}

.card:nth-child(2):hover{
  background: linear-gradient(
    45deg,
    rgba(148, 145, 144, 0.7) 0%,
    rgba(53, 53, 53, 0.7) 100%),
    url("../assets/discounts.jpg");
    background-size: cover;
    
}

.card:nth-child(3):hover{
  background: linear-gradient(
    45deg,
    rgba(148, 145, 144, 0.7) 0%,
    rgba(53, 53, 53, 0.7) 100%),
    url("../assets/support.jpg");
    background-size: cover;
    
}

.card:nth-child(4):hover{
  background: linear-gradient(
    45deg,
    rgba(148, 145, 144, 0.7) 0%,
    rgba(53, 53, 53, 0.7) 100%),
    url("../assets/popular_flights.jpg");
    background-size: cover;
    
}

.card:nth-child(5):hover{
  background: linear-gradient(
    45deg,
    rgba(148, 145, 144, 0.7) 0%,
    rgba(53, 53, 53, 0.7) 100%),
    url("../assets/consultation.jpg");
    background-size: cover;
    
}


.card:nth-child(6):hover{
  background: linear-gradient(
    45deg,
    rgba(148, 145, 144, 0.7) 0%,
    rgba(53, 53, 53, 0.7) 100%),
    url("../assets/roulette.jpg");
    background-size: cover;
    
}

.card:nth-child(7):hover{
  background: linear-gradient(
    45deg,
    rgba(148, 145, 144, 0.7) 0%,
    rgba(53, 53, 53, 0.7) 100%),
    url("../assets/email.jpg");
    background-size: cover;
    
}

.card:nth-child(8):hover{
  background: linear-gradient(
    45deg,
    rgba(148, 145, 144, 0.7) 0%,
    rgba(53, 53, 53, 0.7) 100%),
    url("../assets/filter.jpg");
    background-size: cover;
    
}

.separator{
  margin-top: 80px;
}

</style>