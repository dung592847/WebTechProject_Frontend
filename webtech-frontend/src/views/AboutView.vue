<template>
  <NavHeader></NavHeader>

  


</template>

<script>
// @ is an alias to /src
import NavHeader from "../components/NavHeader.vue"
import Searchbar from "../components/Searchbar.vue"

export default {
  
  name: 'HomeView',
  components: {
    NavHeader
  }
}
</script>