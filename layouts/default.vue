<template>
  <div>


    <b-navbar toggleable="lg" type="success" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <b-link to="/">Home</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link to="/images">Images</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link to="/accordian">Accordian</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link to="/grid">Grid</b-link>
          </b-nav-item> 
        </b-navbar-nav>
      </b-collapse>
      <div class="d-flex justify-content-center text-danger">
          <slots-header></slots-header>
      </div>
    </b-navbar> 
<!--    
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/grid">Grid</nuxt-link>
      <nuxt-link to="/images">Images</nuxt-link>
      <nuxt-link to="/accordian">Accordian</nuxt-link>
    </nav>
-->
    <nuxt />
  </div>
</template>

<script>
import SlotsHeader from '@/components/SlotsHeader.vue';
import { upper }  from '@/components';
export default {
  name: "app",
  components: {
    SlotsHeader
  },
  filters: {
    upper
  },
 
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
