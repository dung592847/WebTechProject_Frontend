<template>
  <div class="page-wrapper">
    <NavHeader></NavHeader>
    <div class="body-wrapper">
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
                  <span class="selected-price">€{{ selectedPrice }}</span>
                  <input 
                    type="range" 
                    :min="minPrice" 
                    :max="maxPrice" 
                    v-model="selectedPrice" 
                    class="price-slider" 
                  />
                </div>
                <div class="filter-section">
                  <h4>Airlines</h4>
                  <select 
                    v-model="selectedAirlines" 
                    multiple 
                    class="airline-select"
                  >
                    <option 
                      v-for="airline in availableAirlines" 
                      :key="airline" 
                      :value="airline"
                    >
                      {{ airline }}
                    </option>
                  </select>
                  <div class="selected-airlines" v-if="selectedAirlines.length">
                    <div v-for="airline in selectedAirlines" :key="airline" class="airline-tag">
                      {{ airline }}
                      <span @click="removeAirline(airline)" class="remove-airline">&times;</span>
                    </div>
                  </div>
                </div>
                <div class="filter-section">
                  <h4>Flight Times</h4>
                  <label>
                    <input 
                      type="checkbox" 
                      value="morning"
                      v-model="selectedTimes"
                    /> 
                    Morning (6:00 - 11:59)
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      value="afternoon"
                      v-model="selectedTimes"
                    /> 
                    Afternoon (12:00 - 17:59)
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      value="evening"
                      v-model="selectedTimes"
                    /> 
                    Evening (18:00 - 5:59)
                  </label>
                </div>
              </div>
            </div>

            <!-- Right column for search results -->
            <div class="results-column">
              <SearchResultBox
                class="hidden"
                v-observe
                v-for="(flight, index) in paginatedResults"
                :key="index"
                :flightObject="flight"
                :class="{ 'bg-color': index % 2 === 1 }"
              />

              <!-- Pagination Controls -->
              <div class="pagination">
                <button
                  v-for="page in totalPages"
                  :key="page"
                  :class="{ active: currentPage === page }"
                  @click="currentPage = page"
                >
                  {{ page }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader.vue";
import FooterComponent from "../components/FooterComponent.vue";
import Searchbar from "../components/Searchbar.vue";
import SearchResultBox from "../components/SearchResultBox.vue";

export default {
  name: "SearchResultView",
  components: {
    NavHeader,
    FooterComponent,
    Searchbar,
    SearchResultBox,
  },
  data() {
    return {
      departure_city: "",
      arrival_city: "",
      traveller: "",
      departure_date: "",
      currentPage: 1,
      resultsPerPage: 7,
      selectedPrice: 0,
      selectedAirlines: [],
      selectedTimes: [],
    };
  },
  computed: {
    allFlights() {
      return this.$store.state.flightAPIcallData;
    },
    minPrice() {
      if (!this.allFlights.length) return 0;
      return Math.floor(Math.min(...this.allFlights.map(flight => this.calculateFlightPrice(flight))));
    },
    maxPrice() {
      if (!this.allFlights.length) return 1000;
      return Math.ceil(Math.max(...this.allFlights.map(flight => this.calculateFlightPrice(flight))));
    },
    availableAirlines() {
      return [...new Set(this.allFlights.map(flight => flight.airline.name))];
    },
    filteredResults() {
      return this.allFlights.filter(flight => {
        const flightPrice = this.calculateFlightPrice(flight);
        const departureTime = flight.departure?.scheduled ? new Date(flight.departure.scheduled) : null;
        const hour = departureTime ? departureTime.getHours() : 0;
        
        const meetsTimeFilter = this.selectedTimes.length === 0 || this.selectedTimes.some(time => {
          switch(time) {
            case 'morning': return hour >= 6 && hour < 12;
            case 'afternoon': return hour >= 12 && hour < 18;
            case 'evening': return hour >= 18 || hour < 6;
            default: return false;
          }
        });

        // Modified airline filter logic to handle empty selectedAirlines array correctly
        const meetsAirlineFilter = this.selectedAirlines.length === 0 || 
          (flight.airline?.name && this.selectedAirlines.includes(flight.airline.name));

        const meetsPriceFilter = flightPrice <= this.selectedPrice;

        return meetsTimeFilter && meetsAirlineFilter && meetsPriceFilter;
      });
    },
    totalPages() {
      return Math.ceil(this.filteredResults.length / this.resultsPerPage);
    },
    paginatedResults() {
      const start = (this.currentPage - 1) * this.resultsPerPage;
      const end = start + this.resultsPerPage;
      return this.filteredResults.slice(start, end);
    },
  },
  methods: {
    takeEmit(data) {
      // Your existing takeEmit logic
    },
    calculateFlightPrice(flight) {
      if (!flight.departure?.scheduled || !flight.arrival?.scheduled) return 0;
      
      const depTime = new Date(flight.departure.scheduled);
      const arrTime = new Date(flight.arrival.scheduled);
      const durationMs = arrTime - depTime;
      const durationInMinutes = Math.floor(durationMs / (1000 * 60));
      
      const basePrice = 50;
      const hourlyRate = 75;
      const hoursComponent = (durationInMinutes / 60) * hourlyRate;
      const longFlightPremium = durationInMinutes > 180 ? 100 : 0;
      const totalPrice = basePrice + hoursComponent + longFlightPremium;
      
      return Math.round(totalPrice / 10) * 10;
    },
    removeAirline(airline) {
      this.selectedAirlines = this.selectedAirlines.filter(a => a !== airline);
    }
  },
  watch: {
    filteredResults() {
      // Reset to first page when filters change
      this.currentPage = 1;
    }
  },
  created() {
    // Initialize the price slider to max value
    this.selectedPrice = this.maxPrice;
  },
};
</script>
<style scoped>
/* Previous styles remain unchanged */

.airline-select {
  width: 100%;
  padding: 8px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  background-color: white;
  margin-bottom: 10px;
  cursor: pointer;
}

.airline-select option {
  padding: 8px;
}

.selected-airlines {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.airline-tag {
  background-color: #e3f2fd;
  color: #0070ff;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9rem;
}

.remove-airline {
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1;
  padding: 2px;
}

.remove-airline:hover {
  color: #0056cc;
}

/* Rest of the previous styles... */
.hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(100%);
  transition: all 2.5s;
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

.hidden:nth-child(2){
  transition-delay: 200ms;
}
.hidden:nth-child(3){
  transition-delay: 400ms;
}
.hidden:nth-child(4){
  transition-delay: 600ms;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.pagination button {
  padding: 0.5rem 1rem;
  border: 1px solid #d0d0d0;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button.active {
  background-color: #0070ff;
  color: white;
  border-color: #0056cc;
}

.pagination button:hover {
  background-color: #0056cc;
  color: white;
}

.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.body-wrapper {
  flex: 1;
  padding-top: 80px;
}

.page-container {
  width: 100%;
}

.search-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.searchbar-wrapper {
  position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: 2rem;
}

.searchbar-wrapper :deep(.booking__container) {
  width: 100%;
  max-width: none;
  left: 0;
  transform: none;
  margin-top: 1rem;
}

.content-container {
  display: flex;
  gap: 2rem;
  margin-top: 10rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.filter-column {
  width: 380px;
  flex-shrink: 0;
}

.filter-box {
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
  text-align: left;
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

.bg-color{
  background-color: #f4f6f8c7;
}

.selected-price{
  text-align: center;
  font-weight: 600;
}
</style>