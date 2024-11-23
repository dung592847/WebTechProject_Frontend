<template>
    <head>
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
      rel="stylesheet"
    />
  </head>
    <div class="booking__container" @click="closeAutocomplete">
          <form>
            <div class="form__group">
              <div class="input__group">
                <input type="text" @keyup="handleDepartureAutocomplete" required  v-model="departure_city" placeholder=" "/>
                <div class="autocomplete-wrapper" v-if="searchresultsDeparture.length>0">
                  <div class="autocomplete-box">
                    <ul>
      <!-- Nur die ersten 5 Ergebnisse anzeigen -->
                      <li v-for="(result, index) in searchresultsDeparture.slice(0, 5)" :key="index" @click="handleDepartureClick(result)">
                        {{ result.municipality }} ({{ result.country }})
                      </li>
                    </ul>
                  </div>
                </div>
                <label>From</label>
              </div>
              <p>From where are you going?</p>
            </div>
            <div class="form__group">
              <div class="input__group">
                <input type="text" required @keyup="handleArrivalAutocomplete" v-model="arrival_city" placeholder=" " />
                <div class="autocomplete-wrapper" v-if="searchresultsArrival.length>0">
                  <div class="autocomplete-box">
                    <ul>
      <!-- Nur die ersten 5 Ergebnisse anzeigen -->
                      <li v-for="(result, index) in searchresultsArrival.slice(0, 5)" :key="index" @click="handleArrivalClick(result)">
                        {{ result.municipality }} ({{ result.country }})
                      </li>
                    </ul>
                  </div>
                </div>
                <label>To</label>
              </div>
              <p>Where are you going?</p>
            </div>
            <div class="form__group">
              <div class="input__group">
                <input type="date" required v-model="departure_date" placeholder=" " />
                <label>Duration</label>
              </div>
              <p>Add date</p>
            </div>
            <div class="form__group">
              <div class="input__group">
                <input type="text" required  v-model="traveller" placeholder=" "/>
                <label>Travellers</label>
              </div>
              <p>Add Traveller</p>
            </div>
          </form>
         
          <router-link to="/search-result"><button class="btn" @click="sendSearchRequest"><i class="ri-search-line"></i></button></router-link>
          <!--Add @click Function later-->
        </div>

</template>


<script>
  
  
  export default{
    data(){
      return{
        departure_city: "",
        arrival_city: "",
        traveller: "",
        departure_date: "",
        searchresultsDeparture: [],
        searchresultsArrival: [],
        arrival_city_result: null,
        departure_city_result: null,
        api_url: "http://localhost:8081/api/AirportRestAPI/municipality/" // https://jsonplaceholder.typicode.com/comments
      }
    },
    methods: {
    // API-Anfrage testen
    async handleDepartureAutocomplete() {
      console.log("Starte API-Anfrage...");
      const query = this.departure_city.trim();
      if (!query) {
        console.log("Eingabe leer, Anfrage abgebrochen.");
        return;
      }

      try {
        const response = await fetch(this.api_url+this.departure_city
          ,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const data = await response.json();
        this.searchresultsDeparture = data
      
        console.log("API-Antwort erfolgreich:", this.searchresultsDeparture );
        
      } catch (error) {
        console.error("Fehler bei der API-Anfrage:", error);
      }
    },
     // API-Anfrage testen
     async handleArrivalAutocomplete() {
      console.log("Starte API-Anfrage...");
      const query = this.arrival_city.trim();
      if (!query) {
        console.log("Eingabe leer, Anfrage abgebrochen.");
        return;
      }

      try {
        const response = await fetch(
          this.api_url+this.arrival_city, 
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        const data = await response.json();
        this.searchresultsArrival = data
      
        console.log("API-Antwort erfolgreich:", this.searchresultsArrival );
        
      } catch (error) {
        console.error("Fehler bei der API-Anfrage:", error);
      }
    },
    sendSearchRequest(){
    
      console.log("Hallo")
    },
    handleArrivalClick(result){
      this.arrival_city = result.municipality + " (" +result.country+")"
      this.arrival_city_result = result
      this.searchresultsArrival.length = 0
    },
    handleDepartureClick(result){
      this.departure_city = result.municipality + " (" +result.country+")"
      this.departure_city_result = result
      this.searchresultsDeparture.length = 0
    },
    closeAutocomplete(){
      this.searchresultsDeparture.length = 0
      this.searchresultsArrival.length = 0
    }
    
  }
}
</script>


<style scoped>


.booking__container {
  position: absolute;
  bottom: -5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 6rem);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 3rem 2rem;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.booking__container form {
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.booking__container .input__group {
  width: 100%;
  position: relative;
  
}

.booking__container label {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--text-dark);
  pointer-events: none;
  transition: 0.3s;

}

.booking__container input {
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--primary-color);
  color: var(--text-dark);
}

.booking__container input:focus ~ label {
  font-size: 0.8rem;
  top: 0;
}

.booking__container .form__group p {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-light);
}

.booking__container .btn {
  padding: 1rem;
  outline: none;
  border: none;
  font-size: 1.5rem;
  color: var(--white);
  background-color: var(--primary-color);
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s;
}

.booking__container .btn:hover {
  background-color: var(--primary-color-dark);
}


.booking__container input:focus ~ label,
.booking__container input:not(:placeholder-shown) ~ label {
  font-size: 0.8rem;
  top: 0;
  color: var(--primary-color); 
}

.autocomplete-wrapper {
  position: absolute; /* Unabhängig vom Fluss positionieren */
  top: 100%; /* Direkt unter dem Input */
  left: 0; /* Gleiche horizontale Ausrichtung wie der Input */
  width: 100%; /* Gleiche Breite wie das Input-Feld */
  background-color: white; /* Hintergrundfarbe für besseren Kontrast */
  border: 1px solid #ccc; /* Optional: Umrandung für bessere Sichtbarkeit */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Schatten für einen schwebenden Effekt */
  z-index: 100; /* Über anderen Elementen anzeigen */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.autocomplete-box ul {
  list-style: none; /* Bullet-Points entfernen */
  margin: 0; /* Abstand entfernen */
  padding: 0; /* Abstand entfernen */
  max-height: 300px; /* Maximalhöhe setzen */
  overflow-y: auto; /* Scrollbar, falls die Ergebnisse die Maximalhöhe überschreiten */
}

.autocomplete-box li {
  padding: 10px; /* Abstand um den Text */
  cursor: pointer; /* Mauszeiger ändern */
}

.autocomplete-box li:hover {
  background-color: #f0f0f0; /* Hover-Effekt */
}
</style>
