<template>
    <div class="searchresult-wrapper">
      <div class="startInfo">
        <h4>{{ flightObject.departure.scheduled.slice(11, flightObject.departure.scheduled.length - 9)  }}</h4>
        <h4>{{ flightObject.departure.iata }}</h4>
        <h4>{{ flightObject.departure.airport }}</h4>
      </div>
      <div class="additionalInfo">
        <h4>🛫------ Flugdauer ------🛬</h4>
        <h4>Preis nicht in API</h4>
        <router-link to="/flight-details" @click="sendDetailedFlight"> 
          <h4 class="view-details">View Details</h4>
        </router-link>     
      </div>
      <div class="endInfo">
        <h4>{{ flightObject.arrival.scheduled.slice(11, flightObject.arrival.scheduled.length - 9)}}</h4>
        <h4>{{ flightObject.arrival.iata }}</h4>
        <h4>{{ flightObject.arrival.airport }}</h4>
      </div>
    </div>
  </template>


<script>

export default{
  props: ["flightObject"],
  methods: {
    sendDetailedFlight(){
      this.$store.commit('setCurrentFlightDetailed',this.flightObject)
      console.log(this.$store.state.currentFlightDetailed)
    }
  }
    
   
}
</script>

<style scoped>


    .searchresult-wrapper{
        display: flex;
        justify-content: space-evenly; /**horizontale zentrierung */
        align-items: center;  /**vertikale zentrierung */
        max-width: 1000px;
        height: 200px;
        border-radius: 5px;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
        padding: 30px;
        margin-bottom: 45px;
        margin-top: 45px;
    }

  

 
    .startInfo,
    .additionalInfo,
    .endInfo{
        width: 33.33%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        
    }

    .view-details{
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        font-size: smaller;
    }

    .view-details:hover{
        background-color: #d0d0d0;
    }


</style>