<template>
    <NavHeader></NavHeader>
    <div class="searchbar-wrapper">
      <Searchbar></Searchbar>
    </div>
    <SearchResultBox></SearchResultBox>
    <SearchResultBox></SearchResultBox>
    <SearchResultBox></SearchResultBox>
    <SearchResultBox></SearchResultBox>
    <FooterComponent></FooterComponent>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavHeader from "../components/NavHeader.vue"
  import FooterComponent from "../components/FooterComponent.vue"
  import Searchbar from "../components/Searchbar.vue"
  import SearchResultBox from "../components/SearchResultBox.vue"
  
  export default {
    name: 'HomeView',
    components: {
      NavHeader,
      FooterComponent,
      Searchbar,
      SearchResultBox
    }
  }
  </script>
  
  <style scoped>
  * {
    display: flex;
    flex-flow: row wrap;
    margin: auto;
  }
  
 
.searchbar-wrapper {
  position: relative;
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;
  height: 100px;
  margin-bottom: 8rem; /* Erhöht von 4rem auf 8rem für mehr Abstand */
}

.searchbar-wrapper :deep(.booking__container) {
  width: 100%;
  max-width: none;
  left: 0;
  transform: none;
}
  </style>