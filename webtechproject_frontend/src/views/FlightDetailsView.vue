<template>
  <NavHeader></NavHeader>
<div class="searchresult-wrapper">


<p>{{ $store.state.currentFlightDetailed }}</p>


</div>

  <div class="component-wrapper">

   
    <SeatAndContactForm></SeatAndContactForm>
    
  </div>
  <ContinueButton></ContinueButton>

<FooterComponent></FooterComponent>
</template>

<script>
// @ is an alias to /src
  import NavHeader from "../components/NavHeader.vue"
  import FooterComponent from "../components/FooterComponent.vue"
  import SeatAndContactForm from "@/components/SeatAndContactForm.vue";
  import SearchResultBox from "../components/SearchResultBox.vue"
import ContinueButton from "@/components/ContinueButton.vue";


export default {

  name: 'HomeView',
  components: {
    NavHeader,
    SeatAndContactForm,
    ContinueButton,
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