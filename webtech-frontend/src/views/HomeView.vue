<template>
  <NavHeader></NavHeader>

  <header class="section__container header__container">
      <div class="header__image__container">
        <div class="header__content">
          <h1>Enjoy Your Dream Vacation</h1>
          <p>Book Flights and stay packages at lowest price.</p>
        </div>
        <Searchbar></Searchbar>
      </div>

     
      <div class="popularDiv">
        <PopularBox></PopularBox>
      </div>

      
        
      
      
    </header>
    <FooterComponent/> 

</template>

<script>
// @ is an alias to /src
import NavHeader from "../components/NavHeader.vue"
import Searchbar from "../components/Searchbar.vue"
import PopularBox from "../components/PopularBox.vue"
import FooterComponent from "../components/FooterComponent.vue"

export default {
  
  name: 'HomeView',
  components: {
    NavHeader,
    Searchbar,
    PopularBox,
    FooterComponent
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
  --max-width: 1400px; /**Width changeable */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

.section__container {
  max-width: var(--max-width);
  margin: auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.header__container {
  padding: 1rem 1rem 5rem 1rem;
}


.header__content {
  max-width: 600px;
  padding: 5rem 2rem;
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


.header__image__container {
  position: relative;
  min-height: 500px;
  background-image: linear-gradient(
      to right,
      rgba(44, 56, 85, 0.9),
      rgba(100, 125, 187, 0.1)
    ),
    url("../assets/vacation_pic.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2rem;
}


.section__header {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
  text-align: center;
}

.popularDiv{
  margin-top: 180px;
  margin-bottom: 180px;
}
</style>