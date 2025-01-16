<template>
  <main>
    <div class="header-content">
      <span>discover</span>
      <h1>Our Popular Flights</h1>
      <hr />
      <p>
        Explore our top travel destinations and uncover the unique experiences that await you. 
        From iconic cities to hidden gems, your next adventure starts here.
      </p>
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div v-for="destination in destinations" 
             :key="destination.city"
             :class="['swiper-slide', `swiper-slide--${destination.slideClass}`]">
          <div>
            <h2>{{ destination.city }}</h2>
            <p>{{ destination.description }}</p>
            <button @click="exploreDestination(destination.city, destination.iataCode)">
              explore
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </main>
</template>

<script>
import Swiper, { Navigation, Pagination, Keyboard, Mousewheel, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

Swiper.use([Navigation, Pagination, Keyboard, Mousewheel, EffectCoverflow]);

export default {
  name: 'PopularFlights',
  data() {
    return {
      destinations: [
        {
          city: 'London',
          iataCode: 'LON',
          description: 'Experience the vibrant culture, historic landmarks like Big Ben, and the charm of London\'s bustling streets. A city where tradition meets modernity.',
          slideClass: 'one',
          imageUrl: 'https://images.ctfassets.net/bth3mlrehms2/ofsSvNeQGdT3Opr9WwWo7/8f800c5aa74502c55ac077c95f781ca3/England__London.jpg?w=2121&h=1193&fl=progressive&q=50&fm=jpg'
        },
        {
          city: 'New York',
          iataCode: 'NYC',
          description: 'The city that never sleeps offers world-class dining, shopping, and iconic attractions such as Times Square and the Statue of Liberty.',
          slideClass: 'two',
          imageUrl: 'https://www.visittheusa.de/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-12/NYC-Underrated-Parks-HERO.jpg?h=7abc3870&itok=Q4bHIuv4'
        },
        {
          city: 'Paris',
          iataCode: 'PAR',
          description: 'Known as the city of love, Paris captivates visitors with its stunning architecture, art, and culinary delights, from the Eiffel Tower to cozy cafés.',
          slideClass: 'three',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/800px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
        },
        {
          city: 'Reykjavik',
          iataCode: 'REY',
          description: 'Discover the magic of Iceland\'s capital, with its geothermal wonders, vibrant arts scene, and breathtaking landscapes just outside the city.',
          slideClass: 'four',
          imageUrl: 'https://images.prismic.io/visiticeland/d209d40f-ca3d-44c1-9556-816f73b226ad_Reykjavik_Hallgrimskirkja_Autumn_Iceland.jpg'
        },
        {
          city: 'Strasbourg',
          iataCode: 'STR',
          description: 'A charming blend of French and German influences, Strasbourg enchants with its half-timbered houses, canals, and famous Christmas market.',
          slideClass: 'five',
          imageUrl: 'https://asset-prod.france.fr/petite_france_strasbourg_cedric_schell_f7882cb219.jpg'
        }
      ]
    }
  },
  mounted() {
    new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
      },
      keyboard: {
        enabled: true
      },
      mousewheel: {
        thresholdDelta: 70
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 2
        },
        1560: {
          slidesPerView: 3
        }
      }
    });
  },
  methods: {
    exploreDestination(city, iataCode) {
      this.$store.commit('setUserInput', {
        key: "departureAirport",
        value: "Your City (XYZ)" // Default departure city
      });
      
      this.$store.commit('setUserInput', {
        key: "arrivalAirport",
        value: `${city} (${iataCode})`
      });
      
      // Fetch aviation data
      this.$store.dispatch('fetchAviationData');
      
      // Navigate to search results
      this.$router.push('/search-result');
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Roboto:wght@300;400;500;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

main {
  position: relative;
  width: calc(85% - 8rem);
  margin: 0 auto;
  min-height: 50vh;
  height: 40vh;
  column-gap: 3rem;
  padding-block: min(20vh, 3rem);
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-content {
  flex: 1;
}

.header-content span {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1rem;
  color: #717171;
}

.header-content h1 {
  text-transform: capitalize;
  letter-spacing: 0.8px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: clamp(3.4375rem, 3.25rem + 0.75vw, 4rem);
  background-color: #2C3855;
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

.header-content hr {
  display: block;
  background: #2C3855;
  height: 0.25rem;
  width: 6.25rem;
  border: none;
  margin: 1.125rem 0 1.875rem 0;
}

.header-content p {
  line-height: 1.6;
  color: #717171;
}

.swiper {
  width: 100%;
  padding-top: 3.125rem;
  display: flex;
  justify-content: center;
}

.swiper-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
  background: #fff;
}

.swiper-pagination {
  bottom: 1.25rem !important;
}

.swiper-slide {
  width: 18.75rem;
  height: 28.125rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: self-start;
}

.swiper-slide h2 {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4;
  margin-bottom: 0.625rem;
  padding: 0 0 0 1.563rem;
  text-transform: uppercase;
}

.swiper-slide p {
  color: #dadada;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  padding: 0 1.563rem;
  line-height: 1.6;
  font-size: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.swiper-slide button {
  margin: 1.25rem 1.563rem 3.438rem 1.563rem;
  padding: 0.75rem 2.5rem;
  font-size: 1.1rem;
  background: #fff;
  border: none;
  border-radius: 3.125rem;
  text-transform: uppercase;
  color: #717171;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.swiper-slide button:hover {
  color: #005baa;
  transform: scale(1.05);
}

.swiper-slide div {
  display: none;
  opacity: 0;
  padding-bottom: 0.625rem;
}

.swiper-slide-active div {
  display: block;
  opacity: 1;
}

.swiper-slide--one {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://images.ctfassets.net/bth3mlrehms2/ofsSvNeQGdT3Opr9WwWo7/8f800c5aa74502c55ac077c95f781ca3/England__London.jpg?w=2121&h=1193&fl=progressive&q=50&fm=jpg")
      no-repeat 50% 50% / cover;
}

.swiper-slide--two {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://www.visittheusa.de/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-12/NYC-Underrated-Parks-HERO.jpg?h=7abc3870&itok=Q4bHIuv4")
      no-repeat 50% 50% / cover;
}

.swiper-slide--three {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/800px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg")
      no-repeat 50% 50% / cover;
}

.swiper-slide--four {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://images.prismic.io/visiticeland/d209d40f-ca3d-44c1-9556-816f73b226ad_Reykjavik_Hallgrimskirkja_Autumn_Iceland.jpg")
      no-repeat 50% 50% / cover;
}

.swiper-slide--five {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://asset-prod.france.fr/petite_france_strasbourg_cedric_schell_f7882cb219.jpg")
      no-repeat 50% 50% / cover;
}

.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right {
  background-image: none;
}

@media screen and (min-width: 48rem) {
  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (min-width: 93.75rem) {
  .swiper {
    width: 85%;
    margin: 0 auto;
  }
}
</style>