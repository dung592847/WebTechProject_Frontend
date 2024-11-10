<template>
    
    <div class="searchbar-container">

            <div class="entryarea">
                <input type="text" class="form-Components">
                 <div class="labelline">From</div>
            </div>

            
    </div>
    
</template>


<style>


.searchbar-container{
    background-color:#1c2841;
    height: 300px;
    width: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

}

.form-Components{
    height: 40px;
    width: 100px;
    border-radius: 5px;
    cursor: pointer;
}

.entryarea{
    position: relative;
    height: 80px;
    line-height: 80px;

}

input{
    position: absolute;
    width: 100%;
    outline: none;
    font-size: 2.2em;
    padding: 0 30px;
    line-height: 80px;
    border-radius: 10px;
    border: 2px solid #f0ffff;
    background: transparent;
    transition: 0.1s ease;
    z-index: 1111;
}

.labelline{
    position: absolute;
   font-size: 1.6em;
   color: #f0ffff;
   padding: 0 25px;
   margin: 0 20px;
    background-color: #1c2841;
    transition: 0.2s ease;
}

input:focus  ,input:valid 
{
    color: #f0ffff;
    border: 4px solid #f0ffff;
}
input:focus + .labelline  ,input:valid +.labelline 
{
    color: #f0ffff;
    height: 30px;
    line-height: 30px;
    padding: 0 12px ;
    transform: translate(-15px, -16px) scale(0.88);
    z-index: 1111;
}
</style>