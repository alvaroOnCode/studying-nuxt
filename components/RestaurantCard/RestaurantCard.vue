<template src="./RestaurantCard.html"></template>

<script>
export default {
    name: 'restaurant-card',
    props: {
      image: {
          type: String,
          default: ""
      },
      name: {
        type: String,
        default: ""
      },
      likes: {
        type: Number,
        default: 0
      },
      category: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      text: {
        type: String,
        default: ""
      },
      mentions: {
        type: Array,
        default: []
      },
      hashtags: {
        type: Array,
        default: []
      },
      slug: {
        type: String,
        default: ""
      }
    },
    methods: {
        onLike() {
          console.log("onLike");
          this.$emit('plusLike');
        }
    }
}
</script>

<style scoped>

</style>