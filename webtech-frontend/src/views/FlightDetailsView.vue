<template>
    <NavHeader></NavHeader>
    <SearchResultBox></SearchResultBox>
    <AirplaneSeats></AirplaneSeats>
    <Contactform></Contactform>
  <FooterComponent></FooterComponent>
  </template>
  
  <script>
  // @ is an alias to /src
    import NavHeader from "../components/NavHeader.vue"
    import FooterComponent from "../components/FooterComponent.vue"
    import AirplaneSeats from "@/components/AirplaneSeats.vue";
    import Contactform from "@/components/Contactform.vue";
    import SearchResultBox from "../components/SearchResultBox.vue"

  
  export default {
    
    name: 'HomeView',
    components: {
      NavHeader,
      AirplaneSeats,
      Contactform,
      FooterComponent,
      SearchResultBox
    }
  }
  </script>