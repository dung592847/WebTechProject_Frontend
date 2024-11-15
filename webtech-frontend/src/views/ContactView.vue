<template>
    <NavHeader></NavHeader>
    
    
  
  <FooterComponent></FooterComponent>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavHeader from "../components/NavHeader.vue"
  import FooterComponent from "../components/FooterComponent.vue"
import AirplaneSeats from "@/components/AirplaneSeats.vue";
  
  export default {
    
    name: 'HomeView',
    components: {
      NavHeader,
      FooterComponent,
      
    }
  }
  </script>