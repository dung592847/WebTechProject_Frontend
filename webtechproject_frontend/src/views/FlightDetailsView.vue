<template>
 <div class="nav-box">
  <NavHeader></NavHeader>
</div>
  
<div class="searchresult-wrapper">





</div>

  <div class="component-wrapper">
   
    <div class="left-informational">

      <div class="flight-information">
        <SearchResultBox :flightObject="this.$store.state.currentFlightDetailed"/>
      </div>

      <div class="arrival-departure-information">
        <div class="departure-arrival-wrapper">

          <div class="departure">
            <h2>Departure:</h2>
          <p>Airport: {{ $store.state.currentFlightDetailed.departure.airport }}</p>
          <p>Iata: {{ $store.state.currentFlightDetailed.departure.iata }}</p>
          <p>Terminal: {{ $store.state.currentFlightDetailed.departure.terminal }}</p>
          <p>Gate: {{ $store.state.currentFlightDetailed.departure.gate }}</p>
          <p>Timezone: {{ $store.state.currentFlightDetailed.departure.timezone }}</p>
        </div>

        <div class="airline-flight-information">
         
        <p>Airline: {{ $store.state.currentFlightDetailed.airline.name }}</p>
        <p>Iata: {{ $store.state.currentFlightDetailed.airline.iata }}</p>
        <p>Flightnumber: {{ $store.state.currentFlightDetailed.flight.number }}</p>
        <p>FlightIata: {{ $store.state.currentFlightDetailed.flight.iata }}</p>

       </div>

        <div class="arrival">
          <h2>Arrival:</h2>
          <p>Airport: {{ $store.state.currentFlightDetailed.arrival.airport }}</p>
          <p>Iata: {{ $store.state.currentFlightDetailed.arrival.iata }}</p>
          <p>Terminal: {{ $store.state.currentFlightDetailed.arrival.terminal }}</p>
          <p>Gate: {{ $store.state.currentFlightDetailed.arrival.gate }}</p>
          <p>Timezone: {{ $store.state.currentFlightDetailed.arrival.timezone }}</p>
        </div>

        </div>
      
      </div>
      
      <div class="airplane-seats-wrapper">
      <AirplaneSeats></AirplaneSeats>
    </div>
      <Contactform></Contactform>
    </div>
    <div class="right-price">
      <h4>Your Destination</h4>
      <h3>{{this.$store.state.currentFlightDetailed.arrival.iata}}</h3>

      <div class="additional-info">
        <p>Travellers</p>
        <span>{{ $store.state.userInputObject.traveller }} Adult</span>
        <button @click="$store.commit('decrementTraveller')">-</button>
        <button @click="$store.commit('incrementTraveller')">+</button>
      </div>

      <div class="additional-info">
        <p>Baggage</p>
        <span>Hand luggage included</span>
        <div class="selection-box">
  <label for="options">Additional Baggage:</label>
  <select id="options" v-model="selectedOption" class="custom-dropdown">
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
 
</div>

      </div>

      <div class="additional-info">
        <p>Extra Services</p>
        <span>No extra Services</span>
      </div>

      <div class="price-info">
        <div class="Price-left">Price</div>
        <div class="Price-right">€</div>
      </div>

    </div>
   
    
  </div>
  <ContinueButton></ContinueButton>

<FooterComponent></FooterComponent>
</template>

<script>
// @ is an alias to /src
  import NavHeader from "../components/NavHeader.vue"
  import FooterComponent from "../components/FooterComponent.vue"
  import SearchResultBox from "../components/SearchResultBox.vue"
import ContinueButton from "@/components/ContinueButton.vue";
  import AirplaneSeats from "@/components/AirplaneSeats.vue";
  import Contactform from "@/components/Contactform.vue";
export default {

  name: 'HomeView',
  components: {
    NavHeader,
    ContinueButton,
    FooterComponent,
    SearchResultBox,
    AirplaneSeats,
    Contactform
  },
  data() {
        return {
          options: ["Hand luggage only","20kg", "40kg", "60kg"],
          selectedOption: "",
            };
    },

    methods:{
      
    }
}
</script>

<style scoped>
.departure-arrival-wrapper {
  display: flex;
  flex-direction: row; /* Elemente in einer Zeile anordnen */
  justify-content: center; /* Zentriere horizontal */
  align-items: center; /* Zentriere vertikal */
  gap: 20px; /* Abstand zwischen den Elementen */
  text-align: left;
}

.arrival-departure-information {
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  height: 20vh; 
  padding: 20px; 
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  text-align: center; 
  gap: 15px; 
  margin: 5vh 0;
}

.component-wrapper{
  display: flex;
  justify-content: space-evenly;
  width: 75%;
  margin: auto;
}


.left-informational{
  width: 65%;
}

.searchresult-wrapper {
  width: 100%;
  border-right:none;
}

.searchresult-wrapper{
  display: flex;
  justify-content: center;
  width:1400px;
  margin: auto;
}

.right-price{
  height: 75vh;
  width: 25%;
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  padding: 20px 15px 0px 15px;
  
}

.airplane-seats-wrapper{
  border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    margin-bottom:50px;
}

.nav-box{
 width: 100%;
 height: 100px; 
}

.additional-info{
  height: 15vh;
  width: 95%;
  margin: 3vh auto;
  border-bottom: 1px solid rgba(173, 171, 171, 0.199);
}

.additional-info>p{
  
  text-align: left;
  margin: 20px 0px;
  font-weight: 600;
}

.additional-info > button {
  display: inline-block;
  margin: 5px 5px 10px 5px;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}



.additional-info > button:hover {
  background-color: #e0e0e0;
}



</style>