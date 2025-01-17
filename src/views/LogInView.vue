<template>
<NavHeader></NavHeader>
<LoginRegister></LoginRegister>
<FooterComponent></FooterComponent>
</template>


<script>
import NavHeader from "../components/NavHeader.vue"
import FooterComponent from "../components/FooterComponent.vue"
import LoginRegister from "../components/LoginRegister.vue"
export default {
  name: 'LogInView',
  components: {
    NavHeader,
    FooterComponent,
    LoginRegister

  },
  methods:{
   
    close(){
      this.$refs.Searchbar.closeAutocomplete
    }
},
data(){
      return{
        departure_city: "",
        arrival_city: "",
        traveller: "",
        departure_date: "",
      }
}
}
</script>