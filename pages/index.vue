<template>
  <div class="home">
    <p v-if="display">New Trip Reports Have Been Submitted in the Past 24 hours</p>
    <p v-else>No Trip Reports Have Been Submitted Recently</p>

    <main class="main">
      <!--grid with two main areas for an eventual map and a listing of recent trip reports-->
      <div class="row">
        <div class="col-12 col-md-8">{{ map }}</div>
        <!--tooltip for asking user to input trip report-->
        <div class="col-6 col-md-4">
          <a href="#" data-toggle="tooltip" title="Click to Enter A New Report">{{ last }}</a>
          <section class="container" v-if="routes">
            <tripreports
              v-for="route of routes"
              :key="route.id"
              :route="route"
            />
          </section>  

        </div>
      </div>
    </main>
  </div>
</template>

<script>

import axios from "axios";
import tripreports from '@/components/tripreports.vue'

export default {
  name: "home",
  components: {
    tripreports
  },
  data() {
    return {
      map: "Insert Map of Trip Reports",
      last: "Latest Trip Reports",
      routes: null,
      display: true,
      loading: true,
      errored: false
    };
  },
   mounted () {
    axios
      .get('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=47.61&lon=-122.18&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200528804-4262d8820c8f7a6f9b2a2efe546a51e7')
      .then(response => (this.routes = response.data))
      .catch(error => {
        console.error(error)
        this.errored = true 
      })
      .finally(() => this.loading = false)

  }
};
</script>
