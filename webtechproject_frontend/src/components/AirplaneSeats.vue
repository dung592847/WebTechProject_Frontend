<template>
    <div class="seat-selection">
        <h1 class="title">Bitte wählen Sie einen Sitzplatz aus</h1>

        <!-- Sitzbereiche -->
        <div class="seat-section">
            <div class="cabin-label business-label">Business Class</div>
            <div class="cabin-label economy-label">Economy Class</div>
            
            <div class="seat-container">
                <div class="row" v-for="(row, rowIndex) in rows" :key="rowIndex">
                    <!-- Linke Sitzgruppe (ABC) -->
                    <div class="seat-group left">
                        <div 
                            v-for="letter in ['A', 'B', 'C']" 
                            :key="letter"
                            class="seat"
                            :class="{ 
                                selected: isSelected(`${rowIndex + 1}${letter}`), 
                                occupied: isOccupied(`${rowIndex + 1}${letter}`),
                                business: rowIndex < 2
                            }"
                            @click="toggleSeat(`${rowIndex + 1}${letter}`)"
                        >
                            {{ rowIndex + 1 }}{{ letter }}
                        </div>
                    </div>

                    <!-- Gang -->
                    <div class="aisle"></div>

                    <!-- Rechte Sitzgruppe (DEF) -->
                    <div class="seat-group right">
                        <div 
                            v-for="letter in ['D', 'E', 'F']" 
                            :key="letter"
                            class="seat"
                            :class="{ 
                                selected: isSelected(`${rowIndex + 1}${letter}`), 
                                occupied: isOccupied(`${rowIndex + 1}${letter}`),
                                business: rowIndex < 2
                            }"
                            @click="toggleSeat(`${rowIndex + 1}${letter}`)"
                        >
                            {{ rowIndex + 1 }}{{ letter }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Erweiterte Legende -->
        <div class="legend">
            <div class="legend-item">
                <div class="seat unselected"></div>
                <span>Unbesetzt</span>
            </div>
            <div class="legend-item">
                <div class="seat occupied"></div>
                <span>Besetzt</span>
            </div>
            <div class="legend-item">
                <div class="seat selected"></div>
                <span>Ausgewählt</span>
            </div>
            <div class="legend-item">
                <div class="seat business"></div>
                <span>Business Class</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rows: Array.from({ length: 10 }, (_, i) => i), // 0-9 für Reihen 1-10
            selectedSeats: [],
            occupiedSeats: ["2B", "5D", "6C", "9E"] // Beispielhaft besetzte Sitzplätze
        };
    },
    methods: {
        toggleSeat(seatId) {
            if (this.isOccupied(seatId)) return; // Keine Aktion bei besetzten Sitzen
            if (this.selectedSeats.includes(seatId)) {
                this.selectedSeats = this.selectedSeats.filter(id => id !== seatId);
                this.$store.commit("removeFromSeatsList", {seatId});
            } else {
                  // Prüfe, ob die maximale Anzahl erreicht ist
                if (this.selectedSeats.length >= this.$store.state.userInputObject.traveller) {
                    alert(`Sie können maximal ${this.$store.state.userInputObject.traveller} Sitzplätze auswählen.`);
                    return;
                }
            // Füge den Sitzplatz hinzu
            this.$store.commit("addToSeatsList",{seatId})
            console.log(this.$store.state.seatsList)
            this.selectedSeats.push(seatId);
            }
        },
        isSelected(seatId) {
            return this.selectedSeats.includes(seatId);
        },
        isOccupied(seatId) {
            return this.occupiedSeats.includes(seatId);
        }
    }
};
</script>

<style scoped>
.seat-selection {
    text-align: center;
    padding: 20px;
    padding-top: 0px;
}

.title {
    font-size: 1.5em;
    margin-bottom: 20px;
    color : #435681;
}

.seat-section {
    margin: 30px auto;
    
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    background-color: white;
    position: relative;
}

/* Neue Cabin Labels */
.cabin-label {
    position: absolute;
    margin-top: 50px;
    left: 0px;
    font-weight: bold;
    text-align: right;
    width: 100px;
   transform: rotate(-45deg);
}

.business-label {
    top: 25px;
    color: #435681;
}

.economy-label {
    top: 120px;
    color: #435681;
}

.seat-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
}

.seat-group {
    display: flex;
    gap: 8px;
}

.aisle {
    width: 30px;
}

.seat {
    width: 45px;
    height: 45px;
    background-color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: all 0.3s;
    font-size: 0.9em;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
}

.seat.business {
    background-color: #f4f4f4;
    border: 2px solid #435681;
}

.seat.occupied {
    background-color: #ff0000;
    color: white;
    cursor: not-allowed;
}

.seat.selected {
    background-color: #66cc33;
    color: white;
}

.seat:hover:not(.occupied) {
    background-color: #d0d0d0;
}

.legend {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 5px;
}

.legend-item .seat {
    width: 20px;
    height: 20px;
    border-radius: 4px;
}

.legend-item span {
    font-size: 0.9em;
}

.unselected {
    background-color: #e9e9e9;
}

.occupied {
    background-color: #ff0000;
}

.selected {
    background-color: #66cc33;
}

/* Style für Business Class Sitze in der Legende */
.legend-item .seat.business {
    background-color: #f4f4f4;
    border: 2px solid #435681;
}
</style>