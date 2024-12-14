<template>
    <div class="searchresult-wrapper">


       
            <div class="startInfo">
                <h2>{{ flightObject.departureTime }}</h2>
                <h2>{{ flightObject.departureCode }}</h2>
                <h2>{{ flightObject.departureCity }}</h2>
            </div>
            <div class="additionalInfo">
                <h2>🛫------{{ flightObject.flightDuration }}------🛬</h2>
                <h2>{{ flightObject.price }}€</h2>
             
              <router-link to="/flight-details"> <h2 class="view-details">View Details</h2></router-link>     
            </div>
            <div class="endInfo">
            <h2>{{ flightObject.arrivalTime }}</h2>
            <h2>{{ flightObject.arrivalCode }}</h2>
            <h2>{{ flightObject.arrivalCity }}</h2>
            </div>

        </div>



</template>


<script>

export default{
    data(){
      return{
       
      }
    },
    props: ["flightObject"]
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

    .startInfo{
        
        border-right: solid 1px;
    }

    .additionalInfo{
       
        border-right: solid 1px;
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