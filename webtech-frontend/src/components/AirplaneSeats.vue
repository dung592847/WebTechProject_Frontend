<template>
    <div class="seat-container">
        <div class="row" v-for="(row, rowIndex) in rows" :key="rowIndex">
            <!-- Linke Sitzreihe -->
            <div 
                class="seat" 
                v-for="(seat, seatIndex) in row.slice(0, 3)" 
                :key="seatIndex"
                :class="{ selected: isSelected(rowIndex, seatIndex) }"
                @click="toggleSeat(rowIndex, seatIndex)"
            >
                {{ seat }}
            </div>
            <!-- Gang zwischen den Sitzen -->
            <div class="aisle"></div>
            <!-- Rechte Sitzreihe -->
            <div 
                class="seat" 
                v-for="(seat, seatIndex) in row.slice(3, 6)" 
                :key="seatIndex + 3"
                :class="{ selected: isSelected(rowIndex, seatIndex + 3) }"
                @click="toggleSeat(rowIndex, seatIndex + 3)"
            >
                {{ seat }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rows: [
                ["1A", "1B", "1C", "1D", "1E", "1F"],
                ["2A", "2B", "2C", "2D", "2E", "2F"],
                ["3A", "3B", "3C", "3D", "3E", "3F"],
                ["4A", "4B", "4C", "4D", "4E", "4F"],
                ["5A", "5B", "5C", "5D", "5E", "5F"],
                ["6A", "6B", "6C", "6D", "6E", "6F"],
                ["7A", "7B", "7C", "7D", "7E", "7F"],
                ["8A", "8B", "8C", "8D", "8E", "8F"],
                ["9A", "9B", "9C", "9D", "9E", "9F"],
                ["10A", "10B", "10C", "10D", "10E", "10F"],
                ["11A", "11B", "11C", "11D", "11E", "11F"],
                ["12A", "12B", "12C", "12D", "12E", "12F"],
                ["13A", "13B", "13C", "13D", "13E", "13F"],
                ["14A", "14B", "14C", "14D", "14E", "14F"],
                ["15A", "15B", "15C", "15D", "15E", "15F"],
                ["16A", "16B", "16C", "16D", "16E", "16F"],
                ["17A", "17B", "17C", "17D", "17E", "17F"]
            ],
            selectedSeats: []
        };
    },
    methods: {
        toggleSeat(row, seat) {
            const seatId = `${row}-${seat}`;
            if (this.selectedSeats.includes(seatId)) {
                this.selectedSeats = this.selectedSeats.filter(id => id !== seatId);
            } else {
                this.selectedSeats.push(seatId);
            }
        },
        isSelected(row, seat) {
            return this.selectedSeats.includes(`${row}-${seat}`);
        }
    }
};
</script>

<style scoped>
/* Container für die Sitzplatz-Auswahl */
.seat-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* 3 Sitze links, 1 Gang, 3 Sitze rechts */
    gap: 10px;
    width: 350px;
    margin: auto;
}

/* Jede Reihe */
.row {
    display: contents;
    margin-bottom: 15px;
}

/* Sitzplatz */
.seat {
    width: 50px;
    height: 50px;
    background-color: #ddd;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    transition: background-color 0.3s;
}

/* Stil für ausgewählten Sitzplatz */
.seat.selected {
    background-color: #6c3;
    color: white;
}

/* Gang zwischen den Sitzreihen */
.aisle {
    width: 10px;
}

/* Optional: Hover-Effekt */
.seat:hover {
    background-color: #ccc;
}
</style>