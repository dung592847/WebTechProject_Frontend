<template>
    <div class="price-box">
      <div class="price-container">
        <div class="price-label">Price</div>
        <div class="price-value">$$$</div>
        <button class="continue-btn">continue</button>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'PriceBox'
  }
  </script>

  <style scoped>
  .price-box {
    width: 1400px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .price-container {
    display: flex;
    align-items: center;
    background: white;
    padding: 15px 20px;
    border-radius: 8px;
    border: 1px solid #435681;
  }

  .price-label {
    font-weight: 500;
    color: #333;
    margin-right: auto;
  }

  .price-value {
    font-weight: 500;
    color: #333;
    margin-right: 20px;
  }

  .continue-btn {
    background-color: #2c3855;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }

  .continue-btn:hover {
    background-color: #357abd;
  }
  </style>