<template>

   <div class= "divBody">
    <div class = "divBody2">
        <div class = "title"> Contact</div>
         <form action = "#" >
            <div class = "user-details">
                <div class = "input-box" >
                    <span class = "details">First Name</span>
                    <input type = "text" placeholder="first name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Last Name</span>
                    <input type = "text" placeholder="last name" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">E-Mail</span>
                    <input type = "text" placeholder="E-Mail" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Confirm E-Mail</span>
                    <input type = "text" placeholder="confirm E-Mail" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Country Code</span>
                    <input type = "text" placeholder="country code" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Phone Number</span>
                    <input type = "text" placeholder="phone number" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Adress</span>
                    <input type = "text" placeholder="adress" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Postal Code</span>
                    <input type = "text" placeholder="postal code" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">City</span>
                    <input type = "text" placeholder="city" required>
                </div>
                <div class = "input-box" >
                    <span class = "details">Country</span>
                    <input type = "text" placeholder="country" required>
                </div>
            </div>
            <div class="data-details">
                <input type="radio" name = "data" id= "dot-1">
                <input type="radio" name = "data" id= "dot-2">
                    <span class = "save-Data"> DATA</span>
                    <div class="category">
                        <label for="dot-1">
                            <span class="dot one"></span>
                            <span class="data">save</span>
                        </label>
                        <label for="dot-2">
                            <span class="dot two"></span>
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

<style scoped> 

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
  justify-content: space-between;
  margin: 20px 0 12px 0;
}

.user-details .input-box .details {
display: block;
font-weight: 500;
margin-bottom: 5px;
}

form .user-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
}

.user-details .input-box input {
    height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid{
    border-color: #9b59b6;
}

form .data-details .save-Data {
    font-size: 20px;
    font-weight: 500;
}

form .data-details .category {
    display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}

.data-details .category label  {
    display: flex;
  align-items: center;
  cursor: pointer;

}

.data-details .category .dot {
    height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-1:checked~.category label .one,
#dot-2:checked~.category label .two {
    background: #9b59b6;
    border-color: #d9d9d9;

}

form input[type="radio"] {
  display: none;
}
form .button {
  height: 45px;
  margin: 35px 0
}
form .button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
form .button input:hover {
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}





</style>







