<template>
    
    <div class="divBody">
    <div class="divContainer">

        <div class="inputBox">
            <input type="text" required="required">
            <span>From</span>
        </div>

        
        <div class="inputBox">
            <input type="text" required="required">
            <span>TO</span>
        </div>

        <div class="inputBox">
            <input type="text" required="required">
            <span>Date</span>
        </div>
    </div>

</div>  

</template>


<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
}


.divBody{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 500px;
    flex-direction: column;
    gap: 30px;
    background-color: #1d2b3a;
    padding: 25px;
    border-radius: 10px;

}

.divContainer{
    display: flex;
}

.inputBox{
    position: relative;
    width: 200x;
    margin-right: 8.3px;
}

.inputBox input{
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255,255,255,0.25);
    background: #1d2b3a;
    border-radius: 5px;
    outline: none;
    color: #fff;
    font-size: 1em;

}

.inputBox span{
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: rgba(255,255,255,0.25);
    text-transform: uppercase;
    transition: 0.5s;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span
{
    color: #00dfc4;
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65em;
    padding: 0 10px;
    background: #1d2b3a;
}

</style>