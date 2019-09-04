<template>
  <div class="home">
    <p v-if="display">New Trip Reports Have Been Submitted in the Past 24 hours</p>
    <p v-else>No Trip Reports Have Been Submitted Recently</p>

    <main class="main">
      <!--grid with two main areas for an eventual map and a listing of recent trip reports-->
      <div class="row">
        <div class="col-4 col-md-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55875.04579672198!2d-121.414581722018!3d47.395743821714255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1567563800763!5m2!1sen!2sus" width="600" height="400" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <!--tooltip for asking user to input trip report-->
        <div class="col-8 col-md-6">
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
      .get('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=47.424&lon=-121.415&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=200528804-4262d8820c8f7a6f9b2a2efe546a51e7')
      .then(response => (this.routes = response.data.routes))
      .catch(error => {
        console.error(error)
        this.errored = true 
      })
      .finally(() => this.loading = false)

  }
};
</script>
