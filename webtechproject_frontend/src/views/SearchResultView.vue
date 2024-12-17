<template>
  <div class="body-wrapper">
  <NavHeader></NavHeader>
  <div class="page-container">
    <div class="search-content">
      <div class="searchbar-wrapper">
        <Searchbar @searchEmit="takeEmit"></Searchbar>
      </div>
      
      <div class="content-container">
        <!-- Left column for filters -->
        <div class="filter-column">
          <div class="filter-box">
            <h3 class="filter-title">Filter</h3>
            <div class="filter-section">
              <h4>Price Range</h4>
              <input type="range" min="0" max="1000" value="200" class="price-slider" />
            </div>
            <div class="filter-section">
              <h4>Airlines</h4>
              <label><input type="checkbox" /> Lufthansa</label>
              <label><input type="checkbox" /> British Airways</label>
            </div>
            <div class="filter-section">
              <h4>Flight Times</h4>
              <label><input type="checkbox" /> Morning</label>
              <label><input type="checkbox" /> Afternoon</label>
              <label><input type="checkbox" /> Evening</label>
            </div>
          </div>
        </div>

        <!-- Right column for search results -->
          
        <div class="results-column">
          <div class="results-column">
            <SearchResultBox 
  v-for="(flight, index) in $store.state.flightAPIcallData" 
  :key="index"   
  :flightObject="flight" 
/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent></FooterComponent>

</div>
</template>

<script>
import NavHeader from "../components/NavHeader.vue"
import FooterComponent from "../components/FooterComponent.vue"
import Searchbar from "../components/Searchbar.vue"
import SearchResultBox from "../components/SearchResultBox.vue"

export default {
  name: 'SearchResultView',
  components: {
    NavHeader,
    FooterComponent,
    Searchbar,
    SearchResultBox
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

<style scoped>
.page-container {
  width: 100%;
}

.search-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

.searchbar-wrapper {
  position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: 6.5rem;
}

.searchbar-wrapper :deep(.booking__container) {
  width: 100%;
  max-width: none;
  left: 0;
  transform: none;
}

.content-container {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.filter-column {
  width: 380px;
  flex-shrink: 0;
}

.filter-box {
  margin-top: 45px;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
}

.filter-title {
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.filter-section {
  margin-bottom: 2rem;
}

.filter-section:last-child {
  margin-bottom: 0;
}

.filter-section h4 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

.filter-section label {
  display: block;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
}

.filter-section label:last-child {
  margin-bottom: 0;
}

.price-slider {
  width: 100%;
  margin: 1rem 0;
}

.results-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  
}

.results-column :deep(.search-result-box) {
  width: 100%;
}
</style>