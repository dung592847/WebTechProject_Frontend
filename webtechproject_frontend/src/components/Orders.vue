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
            <td>{{ order.ticket_id }}</td>
            <td>{{ order.departure }}</td>
            <td>{{ order.destination }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.seat }}</td>
            <td id="button-wrapper">
              <button id="button" @click="cancelTicket(order.ticket_id)">Cancel Ticket</button>
             
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
        orders: {}
      };
    },
    methods: {
      async getTicketsForUser() {
  try {
    const token =  localStorage.getItem("auth_token") // Hol dir das Token aus dem Vuex-Store oder lokalem Storage
    const email = localStorage.getItem("email"); 

    console.log(token)

    // Die URL für die Anfrage
    const url = this.$store.state.urlObject.ticketsUrl+"/user/"+email;
    console.log(url)
    // Die Anfrage mit dem Bearer Token
    const response = await fetch(url, {
      method: "GET",  // GET-Anfrage
      headers: {
        "Content-Type": "application/json",  // Kopfzeile für JSON-Daten
        "Authorization": `Bearer ${token}`,  // Bearer-Token als Authorization-Header
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();  // Antworte die Antwort als JSON
    this.orders = data
    console.log("Tickets:", data); // Zeige die erhaltenen Daten an

    // Optional: Setze den Zustand des Stores oder der Komponente basierend auf den Tickets
    // this.$store.commit('setTickets', data);

  } catch (error) {
    console.error("Fehler bei der API-Anfrage:", error);
  }
},
async cancelTicket(ticketId) {
      try {
        const token = localStorage.getItem("auth_token");

        // API-URL für das Löschen des Tickets, unter Verwendung der ticket_id
        const url = `${this.$store.state.urlObject.ticketsUrl}/${ticketId}`;
        console.log(url)
        // Anfrage zum Löschen des Tickets
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        // Wenn das Ticket erfolgreich gelöscht wurde, entferne es aus der Liste
        this.orders = this.orders.filter(order => order.ticket_id !== ticketId);
        console.log("Ticket gelöscht:", ticketId);
      } catch (error) {
        console.error("Fehler beim Löschen des Tickets:", error);
      }
    },

      
    },
    mounted(){
      this.getTicketsForUser()
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
  