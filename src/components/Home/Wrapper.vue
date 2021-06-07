<template>
  <div class="wrapper">
    <flightWrapper></flightWrapper>
    <hotelWrapper></hotelWrapper>
    <vacationWrapper></vacationWrapper>
    <ticketWrapper></ticketWrapper>
    <travelWrapper></travelWrapper>
  </div>
</template>

<script>
import flightWrapper from "./flightWrapper"
import ticketWrapper from './ticketWrapper'
import hotelWrapper from './hotelWrapper'
import vacationWrapper from "./vacationWrapper"
import travelWrapper from './travelWrapper.vue'
export default {
  name: "Wrapper",
  components: {
    flightWrapper,
    ticketWrapper,
    hotelWrapper,
    vacationWrapper,
    travelWrapper,
  },
};
</script>


<style>
 .wrapper{
        border: 1px solid red;
        height: 3181px;
    }
</style>