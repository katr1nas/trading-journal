<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import router from './router';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />

  <router-view></router-view>

  <Footer />
</template>

<style scoped>
.main-content {
  margin-top: 80px;
  padding: 20px;
}
.main-content h2 {
  margin-bottom: 15px;
}
.main-content p {
  margin-bottom: 25px;
}
.main-content a {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>
