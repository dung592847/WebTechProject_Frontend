<template>
<div class="nav-box">
  <NavHeader></NavHeader>
</div>

<Account></Account>
<Orders></Orders>


<FooterComponent></FooterComponent>
</template>


<script>
import NavHeader from "../components/NavHeader.vue"
import FooterComponent from "../components/FooterComponent.vue"
import Orders from "../components/Orders.vue"
import Account from "../components/Account.vue"

export default {
  name: 'SearchResultView',
  components: {
    NavHeader,
    FooterComponent,
    Orders,
    Account
    
  },
  methods:{
   
 
},
data(){
      return{
       
      }
}
}
</script>

<style>
.nav-box{
 width: 100%;
 height: 100px; 
}

</style>