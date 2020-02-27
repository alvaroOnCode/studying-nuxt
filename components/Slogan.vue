<template>
  <div>
    <h2 class="title is-2">FoodAdvisor, a real-food website</h2>
    <div class="subcribe">
      <input type="text" class="input email" v-model="email" placeholder="Email..." />
      <button class="button is-info">Subscribe</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: ""
  })
};
</script>

<style scoped>
.subcribe {
  display: flex;
  flex-direction: row;
}
.email {
  width: 80%;
  margin-right: 15px;
}
</style>