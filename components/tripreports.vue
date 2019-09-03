<template>
  <article class="report">
    <img :src="route.imgSmall" :alt="route.name" class="img">
    <h2 class="climb__title">{{route.name}}</h2>
    <p class="climb_rating">{{route.rating}}</p>
    <p class="location">{{route.location}}</p>

    
  </article>
</template>

<script>
export default {

    props: {
        route: Object
    }

}
</script>