<template>
  <!-- Previous template code remains unchanged until traveller-information -->
  <div class="nav-box">
    <NavHeader></NavHeader>
  </div>

  <div class="searchresult-wrapper"></div>

  <div class="component-wrapper">
    <div class="left-informational">
      <div class="flight-information">
        <SearchResultBox :flightObject="this.$store.state.currentFlightDetailed" />
      </div>

      <div class="arrival-departure-information bg-color">
        <!-- Previous arrival/departure code -->
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

      <div class="traveller-information">
        <div v-for="(traveller, index) in travellers" :key="index" class="info-container">
          <h2>Traveller {{ index + 1 }}</h2>

          <div class="gender-selection">
            <div class="radio-option">
              <input 
                type="radio" 
                :id="'male' + index" 
                value="Male" 
                v-model="traveller.gender" 
              />
              <label :for="'male' + index">Male</label>
            </div>
            <div class="radio-option">
              <input 
                type="radio" 
                :id="'female' + index" 
                value="Female" 
                v-model="traveller.gender" 
              />
              <label :for="'female' + index">Female</label>
            </div>
          </div>

          <div class="name-inputs">
            <input 
              type="text" 
              placeholder="First Name" 
              v-model="traveller.firstName" 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              v-model="traveller.lastName" 
            />
          </div>

          <div class="date-selection">
            <select v-model="traveller.day">
              <option value="">Day</option>
              <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
            </select>
            <select v-model="traveller.month">
              <option value="">Month</option>
              <option v-for="(m, idx) in months" :key="idx" :value="idx + 1">{{ m }}</option>
            </select>
            <select v-model="traveller.year">
              <option value="">Year</option>
              <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="airplane-seats-wrapper">
        <AirplaneSeats class="bg-color"></AirplaneSeats>
      </div>
      <Contactform></Contactform>
    </div>

    <div class="right-price">
      <div class="destination-box">
        <h4>Your Destination</h4>
        <h3>{{ this.$store.state.currentFlightDetailed.arrival.iata }}-{{ this.$store.state.currentFlightDetailed.departure.airport }}</h3>
      </div>

      <div class="additional-info">
        <p>Travellers</p>
        <span>Adult</span>
        <button @click="decrementTraveller">-</button>
        <span>{{ numberOfTravellers }}</span>
        <button @click="incrementTraveller">+</button>
      </div>

      <!-- Rest of the right-price content -->
      <div class="additional-info">
        <p>Baggage</p>
        <span>Hand luggage included</span>
        <br /><br />
        <div class="selection-box">
          <label for="options">Additional Baggage:</label>
          <select id="options" v-model="selectedOption" @change="updateBaggageCost" class="custom-dropdown">
            <option v-for="(option, index) in options" :key="index" :value="option.cost">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="additional-info">
        <p>Extra Services</p>
        <label>
          <input type="checkbox" value="priorityBoarding" v-model="selectedServices" @change="updateServiceCost" />
          Priority Boarding
        </label>
        <br /><br />
        <label>
          <input type="checkbox" value="loungeAccess" v-model="selectedServices" @change="updateServiceCost" />
          Lounge Access
        </label>
        <br /><br />
        <label>
          <input type="checkbox" value="fastTrackSecurity" v-model="selectedServices" @change="updateServiceCost" />
          Fast-Track Security
        </label>
      </div>

      <div class="price-info">
        <div class="price-top">Price</div>
        <div class="price-bottum">{{ totalCost }}€</div>
      </div>
    </div>
  </div>
  <ContinueButton></ContinueButton>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavHeader from "../components/NavHeader.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SearchResultBox from "../components/SearchResultBox.vue";
import ContinueButton from "@/components/ContinueButton.vue";
import AirplaneSeats from "@/components/AirplaneSeats.vue";
import Contactform from "@/components/Contactform.vue";

export default {
  name: "HomeView",
  components: {
    NavHeader,
    ContinueButton,
    FooterComponent,
    SearchResultBox,
    AirplaneSeats,
    Contactform,
  },
  data() {
    return {
      options: [
        { label: "Hand luggage only", cost: 0 },
        { label: "20kg", cost: 20 },
        { label: "40kg", cost: 40 },
        { label: "60kg", cost: 60 },
      ],
      selectedOption: 0,
      selectedServices: [],
      serviceCosts: {
        priorityBoarding: 10,
        loungeAccess: 20,
        fastTrackSecurity: 15,
      },
      travellers: [],
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      years: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i),
      numberOfTravellers: 1
    };
  },
  watch: {
    numberOfTravellers(newCount) {
      // Update traveller array when count changes
      while (this.travellers.length < newCount) {
        this.travellers.push({
          gender: "Male",
          firstName: "",
          lastName: "",
          day: "",
          month: "",
          year: ""
        });
      }
      while (this.travellers.length > newCount) {
        this.travellers.pop();
      }
    }
  },
  computed: {
    totalCost() {
      const basePrice = parseFloat(this.$store.state.ticketPrice) || 0;
      const baggageCost = parseFloat(this.selectedOption) || 0;
      const servicesCost = this.selectedServices.reduce(
        (total, service) => total + this.serviceCosts[service],
        0
      );
      return basePrice + baggageCost + servicesCost;
    }
  },
  methods: {
    updateBaggageCost() {
      this.$forceUpdate();
    },
    updateServiceCost() {
      this.$forceUpdate();
    },
    incrementTraveller() {
      if (this.numberOfTravellers < 10) { // Maximum 10 travelers
        this.numberOfTravellers = parseInt(this.numberOfTravellers) + 1;
      }
    },
    decrementTraveller() {
      if (this.numberOfTravellers > 1) { // Minimum 1 traveler
        this.numberOfTravellers = parseInt(this.numberOfTravellers) - 1;
      }
    },
    getTravellerTickets() {
      return this.travellers.map(traveller => ({
        gender: traveller.gender,
        firstName: traveller.firstName,
        lastName: traveller.lastName,
        birthDate: `${traveller.year}-${traveller.month}-${traveller.day}`,
        ticketPrice: this.totalCost,
        services: {
          baggage: this.selectedOption,
          additionalServices: this.selectedServices
        }
      }));
    }
  },
  created() {
    // Initialize first traveller
    this.travellers = [{
      gender: "Male",
      firstName: "",
      lastName: "",
      day: "",
      month: "",
      year: ""
    }];
  }
};
</script>

<style scoped>


.price-top{
  font-weight: 600;
}

.price-bottum{
  font-size: 1.5em;
  font-weight: 700;

}

.destination-box{
  width: 100%;
  height: 100px;
  background-color: #f4f6f8c7;
  display: grid;
  justify-content: center;
  align-items: center;
}

.bg-color{
  background-color: #f4f6f8c7;
}

.info-container {
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 5vh 0;
}

h2 {
  margin-bottom: 20px;
  text-align: left;
}

.gender-selection {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 8px;
}

.name-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
}

.name-inputs input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

.date-selection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.date-selection select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}


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
  justify-content: space-between;
  align-items: center; 
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
  text-align: left;
  padding-left: 20px;
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