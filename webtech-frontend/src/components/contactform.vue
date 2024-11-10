<template>

   <div class= "divBody">
    <div class = "divBody2">
        <div class = "title"> Contact</div>
         <form action = "#" >
            <div class = "user-details">
                <div class = "input-box" >
                    <span class = "details">First Name</span>
                    <input type = "text" placeholder="Enter your name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Last Name</span>
                    <input type = "text" placeholder="Enter your name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">E-Mail</span>
                    <input type = "text" placeholder="Enter your name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Confirm E-Mail</span>
                    <input type = "text" placeholder="Enter your name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Country Code</span>
                    <input type = "text" placeholder="Enter your name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Phone Number</span>
                    <input type = "text" placeholder="Enter your name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Adress</span>
                    <input type = "text" placeholder="Enter your name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Postal Code</span>
                    <input type = "text" placeholder="Enter your name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">City</span>
                    <input type = "text" placeholder="Enter your name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Country</span>
                    <input type = "text" placeholder="Enter your name" required>
                </div>
            </div>
            <div class="data-details">
                    <span>class = "save-data">DATA</span>
                    <div class="category">
                        <label for="">
                            <span class="dot one"></span>
                            <span class="data">save</span>
                        </label>
                        <label for="">
                            <span class="dot one"></span>
                            <span class="data">do not save</span>
                        </label>
                    </div>
            </div>
            <div class="button">
                <input type ="submit" value = "complete">
            </div>
        </form>
    </div>
</div>


</template>

<style> 

.divBody {
    height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.divBody2{
    max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.divBody2 .title {
    font-size: 25px;
  font-weight: 500;
  position: relative;
}

.divBody2 .title ::before {
    content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.divBody2 form .user-details {
    display: flex;
  flex-wrap: wrap;
}

form .user-details .input-box {
    width: calc(100% / 2 - 20px);
}




</style>







