<template>
  <main>
    <div>
      <span>discover</span>
      <h1>Our Popular Flights</h1>
      <hr />
      <p>
        Explore our top travel destinations and uncover the unique experiences that await you. From iconic cities to hidden gems, your next adventure starts here.
      </p>
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide--one">
          <div>
            <h2>London</h2>
            <p>
              Experience the vibrant culture, historic landmarks like Big Ben, and the charm of London's bustling streets. A city where tradition meets modernity.
            </p>
            <a href="#" target="_blank">explore</a>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--two">
          <div>
            <h2>New York</h2>
            <p>
              The city that never sleeps offers world-class dining, shopping, and iconic attractions such as Times Square and the Statue of Liberty.
            </p>
            <a href="#" target="_blank">explore</a>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--three">
          <div>
            <h2>Paris</h2>
            <p>
              Known as the city of love, Paris captivates visitors with its stunning architecture, art, and culinary delights, from the Eiffel Tower to cozy cafés.
            </p>
            <a href="#" target="_blank">explore</a>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--four">
          <div>
            <h2>Reykjavik</h2>
            <p>
              Discover the magic of Iceland's capital, with its geothermal wonders, vibrant arts scene, and breathtaking landscapes just outside the city.
            </p>
            <a href="#" target="_blank">explore</a>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--five">
          <div>
            <h2>Strasbourg</h2>
            <p>
              A charming blend of French and German influences, Strasbourg enchants with its half-timbered houses, canals, and famous Christmas market.
            </p>
            <a href="#" target="_blank">explore</a>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
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
        slideShadows: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      },
    });
  },
  
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
}

main > div span {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1rem;
  color: #717171;
}

main > div h1 {
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

main > div hr {
  display: block;
  background: #2C3855;
  height: 0.25rem;
  width: 6.25rem;
  border: none;
  margin: 1.125rem 0 1.875rem 0;
}

main > div p {
  line-height: 1.6;
}

main a {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  color: #717171;
  font-weight: 500;
  background: #fff;
  border-radius: 3.125rem;
  transition: 0.3s ease-in-out;
}

main > div > a {
  border: 2px solid #c2c2c2;
  margin-top: 2.188rem;
  padding: 0.625rem 1.875rem;
}

main > div > a:hover {
  border: 0.125rem solid #005baa;
  color: #005baa;
}

.swiper {
  width: 100%;
  padding-top: 3.125rem;
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

.swiper-slide a {
  margin: 1.25rem 1.563rem 3.438rem 1.563rem;
  padding: 0.438em 1.875rem;
  font-size: 0.9rem;
}

.swiper-slide a:hover {
  color: #005baa;
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
    url("https://images.prismic.io/visiticeland/d209d40f-ca3d-44c1-9556-816f73b226ad_Reykjavik_Hallgrimskirkja_Autumn_Iceland.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C115%2C1621%2C851&w=1200&h=630")
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
  }
}

@media screen and (min-width: 93.75rem) {
  .swiper {
    width: 85%;
  }
}

</style>
