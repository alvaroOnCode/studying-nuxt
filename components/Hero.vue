<template>
  <section class="hero is-primary" :style="bgStyle">
    <div class="hero-body">
      <button class="button is-info" @click="$emit('onChangeBanner')">Change banner</button>
      <slot class="container" name="header"></slot>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    image: require("@/assets/images/banner.jpg")
  }),
  props: {
    banner: false
  },
  computed: {
    bgStyle() {
      return this.banner
        ? `background-image: url("${ this.image }");background-size: cover;background-position: center;`
        : "";
    }
  }
};
</script>

<style scoped>
.button {
  margin-bottom: 15px;
}
</style>