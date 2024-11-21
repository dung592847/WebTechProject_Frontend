<template>
  <NavHeader></NavHeader>
<div class="searchresult-wrapper">
  <SearchResultBox></SearchResultBox>

</div>

  <div class="component-wrapper">

   
    <SeatAndContactForm></SeatAndContactForm>

  </div>

<FooterComponent></FooterComponent>
</template>

<script>
// @ is an alias to /src
  import NavHeader from "../components/NavHeader.vue"
  import FooterComponent from "../components/FooterComponent.vue"
  import SeatAndContactForm from "@/components/SeatAndContactForm.vue";
  import SearchResultBox from "../components/SearchResultBox.vue"


export default {

  name: 'HomeView',
  components: {
    NavHeader,
    SeatAndContactForm,
    FooterComponent,
    SearchResultBox
  }
}
</script>

<style>
.component-wrapper{
  display: flex;
  justify-content: center;
 
}

.searchresult-wrapper{
  display: flex;
  justify-content: center;
  width:1400px;
  margin: auto;
}

</style>