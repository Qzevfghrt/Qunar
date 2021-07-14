<template>
  <div class="wrapper">
    <flightWrapper></flightWrapper>
    <hotelWrapper></hotelWrapper>
    <vacationWrapper ></vacationWrapper>
    <ticketWrapper></ticketWrapper>
    <recommend></recommend>
    <travelWrapper></travelWrapper>
    <bookWrapper></bookWrapper>
  </div>
</template>

<script>
import flightWrapper from "./flightWrapper"
import ticketWrapper from './ticketWrapper'
import hotelWrapper from './hotelWrapper'
import vacationWrapper from "./vacationWrapper"
import travelWrapper from './travelWrapper'
import bookWrapper from './bookWrapper'
import recommend from './recommend'
export default {
  name: "Wrapper",
  components: {
    flightWrapper,
    ticketWrapper,
    hotelWrapper,
    vacationWrapper,
    travelWrapper,
    bookWrapper,
    recommend,
  },
};
</script>


<style>
 .wrapper{
        height: 3181px;
    }

</style>