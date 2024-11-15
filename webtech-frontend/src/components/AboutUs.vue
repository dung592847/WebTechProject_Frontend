<template>
    <div class="about-container">
        <div class="labelText">
            <h1>Meet our Team</h1>
            <p>Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Eveniet, vero illum eaque 
              aliquid quisquam 
            </p>
        </div>
    <div class="dev-boxes">
        <div class="dev-one">
            <h1>Dev 1</h1>
            <div class="dev-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aperiam quo veritatis sapiente maxime alias aliquam molestiae voluptatum amet optio corporis 
                ratione pariatur iusto quas nisi dolores ullam, praesentium id.</p>
            </div>
            <div class="dev-picture">
                <img src="https://placehold.co/600x400" alt="Picture of Dev 1">
            </div>
        </div>
        <div class="dev-two">
            <h1>Dev 2</h1>
            <div class="dev-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aperiam quo veritatis sapiente maxime alias aliquam molestiae voluptatum amet optio corporis 
                ratione pariatur iusto quas nisi dolores ullam, praesentium id.</p>
            </div>
            <div class="dev-picture">
                <img src="https://placehold.co/600x400" alt="Picture of Dev 2">
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>
.dev-one {
  
    width: 49%;
    float: left;
    padding: 10px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    height: 450px;
    text-align: center;
    padding: 60px;
}

h1{
   margin-bottom: 43px;
}


.dev-two {
 
    width: 49%;
    float: right;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    height: 450px;
    text-align: center;
    padding: 60px;
}

.about-container {
    margin: auto;
    width: 1400px;
}

.labelText {
    display: flex;
    flex-direction: column; /* Elemente vertikal ausrichten */
    justify-content: center;
    align-items: center;
    text-align: center; /* Optional */
}

.dev-boxes{
    margin-top: 30px;
    margin-bottom: 200px;
}



.labelText h1{
    font-size: 3em;
  margin: 25px 0;
 
  font-weight: 500;
}

.dev-picture {
    
    width: 50%;
    float: right;
    
}

.dev-picture  ~ img{
    width: 100%;
    height: 100%;
}

.dev-text {
   
    width: 50%;
    float: left;
    padding: 30px;
}


</style>
