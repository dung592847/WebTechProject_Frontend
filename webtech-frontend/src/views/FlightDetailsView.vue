<template>
  <NavHeader></NavHeader>
  <SearchResultBox></SearchResultBox>
  <SeatAndContactForm></SeatAndContactForm>
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