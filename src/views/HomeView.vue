<template>
  <div class="home columns " style="
  margin: auto;
">
    <div class="column is-two-thirds media " alt="hero"></div>
    <SignUp class="column  auto" />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUp from "@/components/SignUp.vue";
export default {
  name: "HomeView",
  components: {
    SignUp,
  },
};
</script>
<style>
.home {
  display: flex;
  box-sizing: content-box;
}
.media {
  filter: brightness(50%);

  background: url("../assets/hero-2.jpg") center / cover;
}
@media (max-width: 1024px) {
  .media {

    background: url("../assets/hero-1.jpg") center / cover;
  }
}
@media (max-width: 412px) {
  .media {
    display: none !important;

  }
}

</style>