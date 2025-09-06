<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<template>
  <Header></Header>
  <main class="main-content">
    <h2>Welcome to Trading Journal</h2>
    <p>Here will be your dashboard content.</p>
  </main>
</template>

<style>
.main-content {
  margin-top: 80px;
}
</style>
