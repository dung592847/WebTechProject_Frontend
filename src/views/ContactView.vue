<template>
    <div class="nav-box">
  <NavHeader></NavHeader>
</div>
    <ContactUs></ContactUs> 
  <FooterComponent></FooterComponent>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavHeader from "../components/NavHeader.vue"
  import FooterComponent from "../components/FooterComponent.vue"
import AirplaneSeats from "@/components/AirplaneSeats.vue";
import Contactform from "@/components/Contactform.vue";
import ContactUs from "@/components/ContactUs.vue";
 
  
  export default {
    
    name: 'HomeView',
    components: {
      NavHeader,
      ContactUs,
      FooterComponent
    }
  }
  </script>