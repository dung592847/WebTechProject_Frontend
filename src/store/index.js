import { createStore } from 'vuex'
import axios from 'axios'; // Axios importieren

export default createStore({
  state: { 
    
    
    
    isLoggedIn:false,

    user: {
    },

    /**
     * In diesem Objekt, werden die User Eingaben gespeichert,
     * alles wird vom User eingegeben, außer die IATA Codes, diese
     * werden mittels API Call übergeben
     */
    userInputObject:{
      departureAirport:"",
      departureIata:"",
      arrivalAirport:"",
      arrivalIata:"",
      departureDate:"",
      traveller: 0
    },

    /**
     * Die Flugdaten von Aviationstack werden hier gelagert
     */
    flightAPIcallData :[],

    /**
     * Die Autcomplete API Calls werden hier in arrival[] und departure[] gespeichert
     */
    autocompleteObject:{
      arrivalAirport:[],
      departureAirport:[]
    },

    /**
     * Objekt mit allen URLs
     */
    urlObject:{
      autocompleteUrl: "https://webtech-autocomplete.onrender.com/api/AirportRestAPI/municipality/",
      userUrl: "https://usermanagementservice-v1-production.onrender.com/api/v1/auth",
      ticketsUrl: "https://usermanagementservice-v1-production.onrender.com/api/v1/tickets"

    },

    currentFlightDetailed:{},

    ticketDbObject:{
        name: "",
        departure:"",
        destination:"",
        gate:"",
        date:null,
        seat: "",
        boardingTime:null
    },

    registrationObject:{
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      city:"",
      country:"",
      phoneNumber:"",
      adress:"",
      postalCode:"",
      gender :""
    },

    ticketsList:[],
    seatsList:[],
    token:"",
    ticketPrice:0

  },
  getters: {

  },
  mutations: {
    setTicketPrice(state, price) { 
      state.ticketPrice = price
      },
    setRegistrationObjectToObject(state, object) { 
      state.registrationObject = object
      },
    setUser(state,userObject){
    state.user = userObject
    }
    ,
    setIsLoggedInTrue(state){
      state.isLoggedIn = true
    },
    setIsLoggedInFalse(state){
      state.isLoggedIn = false
    },


    /**
     * Setzt einen beliebigen Wert im `userInputObject`, sofern der Schlüssel existiert.
     * @param {Object} state - Der aktuelle Vuex-Store-State.
     * @param {Object} payload - Das Payload-Objekt mit `key` und `value`.
     * @param {string} payload.key - Der Schlüssel im `userInputObject`, der gesetzt werden soll.
     * @param {*} payload.value - Der neue Wert, der gesetzt werden soll.
     * @throws {Error} Gibt eine Warnung in der Konsole aus, wenn der Schlüssel nicht im `userInputObject` existiert.
     */
    setUserInput(state, { key, value }) { 
      if (state.userInputObject.hasOwnProperty(key)) {
        state.userInputObject[key] = value;
      } else {
        console.warn(`Key "${key}" exists nicht im userInputObject.`);
      }
    },  removeFromSeatsList(state, { seatId }) {
      state.seatsList = state.seatsList.filter(seat => seat.seatId !== seatId);
      console.log("Die seatslists in store : " +state.seatsList)
    }, 
    addToSeatsList(state, seatId) {
      if (!state.seatsList.includes(seatId)) {
          state.seatsList.push(seatId);
      }
  },
    setTicketDbObject(state, { key, value }) { 
      if (state.ticketDbObject.hasOwnProperty(key)) {
        state.ticketDbObject[key] = value;
      } else {
        console.warn(`Key "${key}" exists nicht im ticketDbObject.`);
      }

    },setRegistrationObject(state, { key, value }) { 
      if (state.registrationObject.hasOwnProperty(key)) {
        state.registrationObject[key] = value;
      } else {
        console.warn(`Key "${key}" exists nicht im registrationObject.`);
      }
    },

    addTicketToList(state, ticket) {
      if (ticket && typeof ticket === "object") {
        state.ticketsList.push(ticket);
      } else {
        console.warn("Das hinzugefügte Ticket muss ein gültiges Objekt sein.");
      }
    },

    incrementTraveller(state) {
      if(state.userInputObject.traveller<=6){
        state.userInputObject.traveller += 1;
      }
      
    },
    decrementTraveller(state) {
      if (state.userInputObject.traveller > 1) {
        state.userInputObject.traveller -= 1;
      }
    },

   

    /**
     * Aktualisiert den `aviationStackAPI`-State mit den von der API abgerufenen Daten.
     * @param {Object} state - Der aktuelle Vuex-Store-State.
     * @param {Array<Object>} data - Die von der API abgerufenen Flugdaten
     **/
    setAviationData(state, data) {
      state.flightAPIcallData = data; 
    },

    /**
     * Setzt die Ankunftsflughäfen im `autocompleteObject`.
     * @param {Array} airports - Ein Array von Flughäfen, das gesetzt werden soll.
     */
    setArrivalAirportsAutocomplete(state,airports) {

        state.autocompleteObject.arrivalAirport = airports;
      
    },

    /**
     * Setzt die Abflughäfen im `autocompleteObject`.
     * @param {Array} airports - Ein Array von Flughäfen, das gesetzt werden soll.
     */
    setDepartureAirportsAutocomplete(state,airports) {
        state.autocompleteObject.departureAirport = airports;
      
    },
    setCurrentFlightDetailed(state, flightDetails) {
      state.currentFlightDetailed = flightDetails;
  },
  assignSeatsToTickets(state, seatList) {
    if (!Array.isArray(state.ticketsList) || !Array.isArray(seatList)) {
      console.warn("Sowohl `ticketsList` als auch `seatList` müssen Arrays sein.");
      return;
    }

    for (let i = 0; i < state.ticketsList.length; i++) {
      if (i < seatList.length) {
        state.ticketsList[i].seat = seatList[i];
      } else {
        console.warn(`Nicht genügend Sitzplätze in der Liste für Ticket ${i + 1}.`);
        break; // Keine weiteren Sitzplätze verfügbar
      }
    }
  },
  setToken(state, token) {
    state.token = token;}


  },
  actions: {

    async fetchArrivalAirportsAutocomplete ({commit,state}){
      console.log("Starte API-Anfrage...");
      const query = state.userInputObject.arrivalAirport.trim();
      if (!query) {
        console.log("Eingabe leer, Anfrage abgebrochen.");
        return;
      }
      try {
        let url = state.urlObject.autocompleteUrl + state.userInputObject.arrivalAirport
        const response = await fetch(url
          ,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
        const data = await response.json();
        commit('setArrivalAirportsAutocomplete', data);
        console.log(state.userInputObject)

      } catch (error) {
        console.error("Fehler bei der API-Anfrage:", error);
      }
    },

    /**a
     * Asynchrone Action, die Flugdaten von einer API abruft und im Vuex-Store speichert.
     * @throws {Error} Gibt Fehler in der Konsole aus, falls die Anfrage oder Antwort fehlschlägt.
     * @description
     * Diese Methode ruft Flugdaten von der API (https://jsonplaceholder.typicode.com/posts) ab, 
     * überprüft das Format der Antwort und speichert die Daten im Vuex-Store. 
     * Bei Fehlern wird eine Fehlermeldung in der Konsole angezeigt.
     */
    async fetchAviationData({ commit,state }) {
      try {
        /** 
        const response = await fetch(state.urlObject.aviationStackUrl);
      */
        console.log(state.userInputObject)
        console.log("hallo")

        const response = await axios.get(
          "https://api.aviationstack.com/v1/flights",
          {
            params: {
              access_key: "b4a0acc6168e874cc4b1e80e105d4f82",
              dep_iata: state.userInputObject.departureIata, 
              arr_iata: state.userInputObject.arrivalIata
            },
          }
        );
      
        console.log("anfrage geschikct")
        console.log(response)

        const data = response.data.data
        console.log(data)

        // Überprüfen, ob die API-Daten erfolgreich abgerufen wurden
        if (data) {
          console.log("Api Call erfolgreich", data);
          commit('setAviationData', data);
          console.log(state.userInputObject)
          console.log("Flight API DATA .data :"+response.data)

          console.log("Flight API DATA :"+state.flightAPIcallData)
          

        } else {
          console.error('Fehlerhafte API-Antwort:', data);
        }
      } catch (error) {
        console.error('Fehler bei der API-Anfrage:', error);
      }
    },
    async fetchDepartureAirportsAutocomplete ({commit,state}){
      console.log("Starte API-Anfrage...");
      const query = state.userInputObject.departureAirport.trim();
      if (!query) {
        console.log("Eingabe leer, Anfrage abgebrochen.");
        return;
      }
      try {
        let url = state.urlObject.autocompleteUrl + state.userInputObject.departureAirport
        const response = await fetch(url
          ,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
        const data = await response.json();
        commit('setDepartureAirportsAutocomplete', data);
            
      } catch (error) {
        console.error("Fehler bei der API-Anfrage:", error);
      }
    },

    async loginAccount({ commit, state }, { emailUser, passwordUser }) {
      try {
        const url = `${state.urlObject.userUrl}/signin`;
    
        const requestData = {
          email: emailUser,
          password: passwordUser,
        };
    
        const response = await fetch(url, {
          method: "POST",  
          headers: {
            "Content-Type": "application/json",  
          },
          body: JSON.stringify(requestData), 
        });
    
        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
    
        const data = await response.json();
        const token = data.token;  
    
        commit('setToken', token); 
        localStorage.setItem('auth_token', token); 
        localStorage.setItem('email', emailUser); 
        commit("setIsLoggedInTrue");
        console.log(token)
      } catch (error) {
        console.error("Fehler bei der API-Anfrage:", error);
      }
    },

    async updateAccount({ commit, state }) {
      try {
        const request = {
          user:state.user,
          token: localStorage.getItem("auth_token"),
        }
        console.log(request)
        const url = `${state.urlObject.userUrl}/users`;
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${request.token}`
          },
          body: JSON.stringify(request),  // Die Benutzerdaten als JSON im Request-Body übermitteln
        });
    
        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
    
        const data = await response.json();
        commit('setUser', data);  // Die Antwort von der API wird in den Store gespeichert
      } catch (error) {
        console.error("Fehler bei der API-Anfrage:", error);
      }
    },

    async createAccount({ commit, state }){
      try {
        const url = `${state.urlObject.userUrl}/signup`;
        const user = state.registrationObject
        console.log(url)
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({user}),  // Die Benutzerdaten als JSON im Request-Body übermitteln
        });
    

        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
    
        const data = await response.json();
        commit('setUser', data.user);  // Die Antwort von der API wird in den Store gespeichert
      } catch (error) {
        console.error("Fehler bei der API-Anfrage:", error);
      }
    }
  }


    
    

  ,
  modules: {
  }
})
