<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/views/header/Header.vue";
import Footer from "@/views/footer/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style></style>
