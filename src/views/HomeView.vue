<template>
  <div class="body-wrapper">
    <!-- Navigation wird absolut positioniert -->
    <NavHeader></NavHeader>
    
    <!-- Hero Section -->
    <header class="header__container">
      <div class="header__image__container">
        <div class="header__content">
          <h1>Plan Your Perfect Getaway</h1>
          <p>Find the best flight and accommodation deals at unbeatable prices.</p>
        </div>
        
        <!-- Searchbar mit überlappendem Effekt -->
        <div class="searchbar-wrapper">
          <Searchbar></Searchbar>
        </div>
      </div>
    </header>

   
    
    <!-- Popular Section -->
    <div class="popularDiv">
      <PopularBox></PopularBox>
    </div>

    <AboutUsHome></AboutUsHome>

    <div class="chatbot">
      <iframe
    src="https://www.chatbase.co/chatbot-iframe/KNt65FpNYYx33J9DBzTuM"
    
    frameborder="0"
></iframe>
    </div>

    <FooterComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from "../components/NavHeader.vue"
import Searchbar from "../components/Searchbar.vue"
import PopularBox from "../components/PopularBox.vue"
import FooterComponent from "../components/FooterComponent.vue"
import AboutUsHome from "../components/AboutUsHome.vue"

export default {
  
  name: 'HomeView',
  components: {
    NavHeader,
    Searchbar,
    PopularBox,
    FooterComponent,
    AboutUsHome
  },
  methods:{
  
  }
}
</script>


<style>



:root {
  --primary-color: #2c3855;
  --primary-color-dark: #435681;
  --text-dark: #333333;
  --text-light: #767268;
  --extra-light: #f3f4f6;
  --white: #ffffff;
  --max-width: 1400px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.chatbot{

  margin: auto;
  width: 75%;
  height: 500px;
  margin-top: 10rem;
  margin-bottom: 3rem;
}

.chatbot iframe{


width: 100%;
height: 100%;
border-radius: 0.5rem ;
box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}


a {
  text-decoration: none;
}

img {
  width: 100%;
  display: flex;
}

body {
  font-family: "Poppins", sans-serif;
}

.body-wrapper {
  position: relative;
  min-height: 100vh;
}

/* Hero Container */
.hero-wrapper {
  position: relative;
  height: 80vh;
  width: 100%;
  background: var(--primary-color);
}

/* Header Container */
.header__container {
  position: relative;
  padding: 0;
  margin-bottom: 15rem;  
  max-width: 100%;
}

.header__image__container {
  position: relative;
  height: 75vh;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(44, 56, 85, 0.9),
    rgba(100, 125, 187, 0.1)
  ),
  url("../assets/vacation_pic.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0;
  display: flex;
  align-items: center;
}

/* Header Content */
.header__content {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.header__content h1 {
  margin-bottom: 1rem;
  font-size: 3.5rem;
  line-height: 4rem;
  font-weight: 600;
  color: var(--white);
}

.header__content p {
  color: var(--extra-light);
}

/* Navigation */
.nav-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(44, 56, 85, 0.1);
  backdrop-filter: blur(10px);
}

/* Searchbar Component */
.searchbar-wrapper {
  position: absolute;
  left: 50%;
  bottom: -60px;
  transform: translateX(-50%);
  width: 95%;
  max-width: var(--max-width);
  z-index: 20;
}

/* Popular Section */


.section__container {
  max-width: var(--max-width);
  margin: auto;
  padding: 2rem;
}

.section__header {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
  text-align: center;
}

.popularDiv {
    width: 95%;
    margin: 12rem auto;
  }

/* Responsive Design */
@media (max-width: 768px) {
  .header__content h1 {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  .searchbar-wrapper {
    width: 95%;
    bottom: -80px;
  }

  .popularDiv {
    margin-top: 150px;
  }
}

@media (max-width: 480px) {
  .header__content h1 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .searchbar-wrapper {
    bottom: -100px;
  }

  .popularDiv {
    margin-top: 180px;
  }
}

</style>