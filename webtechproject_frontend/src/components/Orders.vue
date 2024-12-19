<template>
    <div class="orders-container">
      <h1>Meine Bestellungen</h1>
      <table v-if="orders.length > 0">
        <thead>
          <tr>

            <th>FlightNumber</th>
            <th>Departure</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Seat</th>  
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.flightNumber }}</td>
            <td>{{ order.departure }}</td>
            <td>{{ order.destination }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.seat }}</td>
            <td id="button-wrapper">
              <button id="button"> Cancel Ticket</button>
             
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>Keine Bestellungen gefunden.</p>
  
      <router-link to="/" class="back-button">Zurück zur Startseite</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orders: [
          { id: 1, flightNumber: 'LH123', departure: 'Berlin', destination: 'New York', date: '2024-12-25', seat: '12A' },
          { id: 2, flightNumber: 'UA456', departure: 'Paris', destination: 'Tokyo', date: '2024-12-26', seat: '14B' },
          { id: 3, flightNumber: 'EK789', departure: 'London', destination: 'Dubai', date: '2024-12-27', seat: '16C' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>

  #button{
    background-color: red;
    color: white;
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0%
  }

  #button-wrapper{
    padding: 0%;
  }

  .orders-container {
    max-width: 800px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 0.8rem;
    text-align: left;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  td {
    background-color: #fff;
  }
  
  p {
    text-align: center;
    margin-top: 2rem;
  }
  
  .back-button {
    display: block;
    margin-top: 1rem;
    padding: 0.8rem 1.2rem;
    text-align: center;
    background-color: #007BFF;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
  }
  
  .back-button:hover {
    background-color: #0056b3;
  }
  </style>
  