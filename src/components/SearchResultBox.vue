<template>
  <div class="searchresult-wrapper">
    <div class="flight-info">
      <div class="info-box">
        <h4 class="bold-text">{{ flightObject.departure?.scheduled?.slice(11, 16) || 'N/A' }}</h4>
        <h4>
          {{ flightObject.departure?.iata || 'N/A' }} · 
          {{ flightObject.departure?.scheduled ? new Date(flightObject.departure.scheduled).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : 'N/A' }}
        </h4>
        <h4 class="ellipsis" :title="flightObject.departure?.airport || 'N/A'">
          {{ flightObject.departure?.airport?.slice(0, 10) || 'N/A' }}
        </h4>
      </div>
      <div class="middleInfo">
        <span>{{this.flightObject.airline.name}}</span>
        <div class="connection-line">
          <span class="blue-circle"></span>
          <div class="line"></div>
          <span class="green-label">Direct</span>
          <div class="line"></div>
          <span class="blue-circle"></span>
        </div>
        <h4>{{ flightDuration }}</h4>
      </div>
      <div class="info-box">
        <h4 class="bold-text">{{ flightObject.arrival?.scheduled?.slice(11, 16) || 'N/A' }}</h4>
        <h4>
          {{ flightObject.arrival?.iata || 'N/A' }} · 
          {{ flightObject.arrival?.scheduled ? new Date(flightObject.arrival.scheduled).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : 'N/A' }}
        </h4>
        <h4 class="ellipsis" :title="flightObject.arrival?.airport || 'N/A'">
          {{ flightObject.arrival?.airport?.slice(0, 10) || 'N/A' }}
        </h4>
      </div>
    </div>
    <div class="price-info">
      <h4>€{{ flightPrice }} p.P.</h4>
      <router-link to="/flight-details" @click="sendDetailedFlight">
        <button class="view-details">View Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>


export default {
  props: ["flightObject"],
  computed: {
    flightDuration() {
      if (!this.flightObject?.departure?.scheduled || !this.flightObject?.arrival?.scheduled) {
        return 'N/A';
      }
      const depTime = new Date(this.flightObject.departure.scheduled);
      const arrTime = new Date(this.flightObject.arrival.scheduled);
      const durationMs = arrTime - depTime;
      const hours = Math.floor(durationMs / (1000 * 60 * 60));
      const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
      return `${hours}h ${minutes}m`;
    },
    flightPrice() {
      if (this.flightDuration === 'N/A') return 0;
      const [hours, minutes] = this.flightDuration.split('h ');
      const totalMinutes = (parseInt(hours) * 60) + parseInt(minutes.replace('m', ''));
      const basePrice = 50;
      const durationInMinutes =totalMinutes
    const hourlyRate = 75;
    const hoursComponent = (durationInMinutes / 60) * hourlyRate;
    const longFlightPremium = durationInMinutes > 180 ? 100 : 0;
    const totalPrice = basePrice + hoursComponent + longFlightPremium;
    this.price =(totalPrice / 10) * 10
 
    return (totalPrice / 10) * 10; 
    }
  },
  data() {
        return {
         price:0
            };
    }
  ,
  methods: {
    sendDetailedFlight() {
      const flightWithPrice = {
        ...this.flightObject,
      };
      this.$store.commit("setCurrentFlightDetailed", flightWithPrice);
      console.log(this.price)
      this.$store.commit("setTicketPrice", this.price );

    },
  },
};
</script>

<style scoped>
.searchresult-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 920px;
  height: 180px;
  border-radius: 5px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 45px;
}

.flight-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  border-right: 1px solid #d0d0d0;
  padding-right: 20px;
}

.info-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 120px;
  text-align: center;
}

.bold-text {
  font-weight: 800;
  font-size: 25px;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.middleInfo .connection-line {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.middleInfo .blue-circle {
  width: 8px;
  height: 8px;
  background-color: #0070ff;
  border-radius: 50%;
}

.middleInfo .green-label {
  background-color: #d4f4dd;
  color: #18361f;
  padding: 2px 10px;
  border-radius: 5px;
  margin: 0 8px;
  font-weight: 600;
}

.middleInfo .line {
  height: 2px;
  width: 50px;
  background-color: #0070ff;
}

.price-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
}

.price-info h4 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.view-details {
  background-color: #0070ff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: medium;
  cursor: pointer;
}

.view-details:hover {
  background-color: #0056cc;
}
</style>