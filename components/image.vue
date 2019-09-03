<template>
  <article class="post">
    <h3 class="post__title">{{ post.title }}</h3>
    <img class="post__img" :src="post.img" v-show="isShowing" />
    <p class="post__alt">{{ post.alt }}</p>
    <b-button @click="outlineShow" href="#" variant="primary">Toggle me!</b-button>
  </article>
</template>

<script>
import { outline } from "./outline";
export default {
  name: "post",
  props: ["post"],
  mixins: [outline],
  data() {
    return {
      isShowing: true
    };
  }
};
</script>