<template>

  <div class="root">
    <div class="img" :style="`background-image:url(${getImageUrl(props.name)})`" >

    </div>
    <div class="main">
      <div class="random-wrapper">
        <RandomButton  />
      </div>
      <slot class="layout"></slot>
    </div>
  </div>

</template>

<script setup>

import RandomButton from "@/components/UI/RandomButton.vue";

const props = defineProps({

  cocktails:{},
  name:{
    type: String
  }
})
const getImageUrl = (name) => {
  return new URL(`${name}`, import.meta.url).href
}
console.log(props.name)
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.root {
  display: flex;
  background: $background;
  min-height: 100vh;
}

.img {
  background-size: cover;
  min-height: 100%;
  width: 35%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  object-fit: fill;
}

.main {
  width: 65%;
  padding: 32px 40px
}

.random-wrapper {
  text-align: end;
}

</style>