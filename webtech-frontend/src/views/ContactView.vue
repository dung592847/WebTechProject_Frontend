<template>
    <NavHeader></NavHeader>
  
    
  
  <FooterComponent></FooterComponent>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavHeader from "../components/NavHeader.vue"
  import Searchbar from "../components/Searchbar.vue"
  import FooterComponent from "../components/FooterComponent.vue"
  
  export default {
    
    name: 'HomeView',
    components: {
      NavHeader,
      FooterComponent
    }
  }
  </script>