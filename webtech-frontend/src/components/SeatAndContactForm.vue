<template>
    <div class="seat-and-contact-form">
      <div class="row">
        <div class="col-md-6">
          <AirplaneSeats />
        </div>
        <div class="col-md-6">
          <Contactform />
        </div>
      </div>
    </div>
  </template>

  <script>
  import AirplaneSeats from '@/components/AirplaneSeats.vue';
  import Contactform from '@/components/Contactform.vue';

  export default {
    name: 'SeatAndContactForm',
    components: {
      AirplaneSeats,
      Contactform,
    },
  };
  </script>

  <style scoped>
  .row {
    display: flex;
    justify-content: space-between;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 10px; /* optional, falls Abstände nötig sind */
  }
  </style>