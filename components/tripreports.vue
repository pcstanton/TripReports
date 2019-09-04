<template>
  <article class="report">
   
    <h2 class="climb__title">{{route.name}}</h2>
    <h3 class="climb__type">Type {{route.type}}</h3> 
    <p class="climb_rating">Rating {{route.rating}}</p>
    <p class="climb_stars">Stars {{route.stars}}</p>
    <img :src="route.imgSqSmall" :alt="route.name" class="img"> 

    
  </article>
</template>

<script>
export default {

    props: {
        route: Object
    }

}
</script>

<style lang="scss">
.report {
  margin: 1rem;
  border: 1px solid green;

}

</style>