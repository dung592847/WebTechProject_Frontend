<template>
    <div class="searchresult-wrapper">


       
            <div class="startInfo">
                <h2>15:12</h2>
                <h2>BER</h2>
                <h2>Berlin</h2>
            </div>
            <div class="additionalInfo">
                <h2>🛫------1:30h------🛬</h2>
                <h2>200€</h2>
             
              <router-link to="/flight-details"> <h2 class="view-details">View Details</h2></router-link>     
            </div>
            <div class="endInfo">
                <h2>16:30</h2>
                <h2>Heathrow </h2>
                <h2>London</h2>
            </div>

        </div>



</template>




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