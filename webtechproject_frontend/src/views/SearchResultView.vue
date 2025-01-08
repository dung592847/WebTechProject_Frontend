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
                <div class="filter-button">
                  <button>Filter</button>
                </div>
              </div>
            </div>

            <!-- Right column for search results -->
            <div class="results-column">
              <SearchResultBox class="hidden" v-observe
                v-for="(flight, index) in paginatedResults"
                :key="index"
                :flightObject="flight"
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
      currentPage: 1, // Aktuelle Seite
      resultsPerPage: 7, // Anzahl der Ergebnisse pro Seite
    };
  },
  computed: {
    // Gesamte Anzahl der Seiten basierend auf den Suchergebnissen
    totalPages() {
      return Math.ceil(this.$store.state.flightAPIcallData.length / this.resultsPerPage);
    },
    // Ergebnisse für die aktuelle Seite
    paginatedResults() {
      const start = (this.currentPage - 1) * this.resultsPerPage;
      const end = start + this.resultsPerPage;
      return this.$store.state.flightAPIcallData.slice(start, end);
    },
  },
};
</script>

<style scoped>
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
  padding-top: 80px; /* Space for fixed navigation */
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