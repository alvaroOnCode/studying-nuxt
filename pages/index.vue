<template>
  <div>
    <Hero @onChangeBanner="onChangeBanner" :banner="banner">
      <Banner slot="header" style="width: 70%" v-if="banner" />
      <Slogan slot="header" style="width: 70%" v-else />
    </Hero>

    <div class="container">
      <section class="section">
        <div class="columns">
          <restaurant-card
            :image="restaurant.image"
            :name="restaurant.name"
            :likes="restaurants[index].likes"
            :category="restaurant.category"
            :description="restaurant.description"
            :text="restaurant.text"
            :mentions="mentions"
            :hashtags="hashtags"
            :slug="restaurant.slug"
            @plusLike="onPlusLike"
            v-for="(restaurant, index) in restaurants"
            :key="restaurant.name + index"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

import Banner from "@/components/Banner.vue";
import Hero from "@/components/Hero.vue";
import RestaurantCard from "@/components/RestaurantCard/RestaurantCard.vue";
import Slogan from "@/components/Slogan.vue";

export default {
  name: "index",
  components: {
    Banner,
    Hero,
    RestaurantCard,
    Slogan
  },
  data: () => ({
    banner: false,
    likes: 0,
    restaurants: [],
    mentions: ["@alvarooncode", "@nodejs", "@vuejs"],
    hashtags: ["#webdev", "#javascript", "#lovingvue", "#lovingnode"]
  }),
  methods: {
    onChangeBanner() {
      this.banner = !this.banner;
    },
    onPlusLike() {
      console.log("onPlusLike:", this.likes + 1);
      this.likes++;
    }
  },
  async created() {
    const r = await api.getAllRestaurants("restaurants");

    console.log("created:", r);

    if (r.result) {
      this.restaurants = r.data;
    }

    console.log("restaurants:", this.restaurants);
  }
};
</script>

<style>
</style>
