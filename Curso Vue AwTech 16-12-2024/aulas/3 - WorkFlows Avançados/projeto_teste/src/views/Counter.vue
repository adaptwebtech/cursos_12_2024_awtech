<template>
  <div>
    <h2>Contador: {{ count }}</h2>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
    <button @click="incrementAsync">Incrementar de forma assíncrona</button>
  </div>
</template>

<script>
export default {
  name:'CounterView',
  computed: {
    // Acessando o estado do Vuex
    count() {
      return this.$store.getters.getCount; // Utilizando o getter
    },
  },
  methods: {
    // Chamando mutações diretamente
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync');
    },
  },
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>