<template>
  <div id="images">
    <!--
    <b-img v-for="item in images" fluid :key="item.id" :src="item.image" :alt="item.alt">
        
    </b-img>
    -->
    <section v-if="posts">
      <post v-for="post in posts" v-bind:post="post" v-bind:key="post.id"></post>
    </section>
  </div>
</template>

<script>
import Post from "@/components/image.vue";
export default {
  name: "images",
  components: {
    Post
  },

  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Lake Anette",
          img: require("@/assets/img/PANO_20190729_184301.vr.jpg"),
          alt: "Pano Lake Anette"
        },
        {
          id: 2,
          title: "GS Racing",
          img: require("@/assets/img/a20180317_165049320_iOS.jpg"),
          alt: "GS Racing"
        },
        {
          id: 3,
          title: "Kendall",
          img: require("@/assets/img/a20180527_193251524_iOS.jpg"),
          alt: "Kendall Couloir"
        },
        {
          id: 4,
          title: "Trout",
          img: require("@/assets/img/a20180623_183319598_iOS.jpg"),
          alt: "Trout"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>