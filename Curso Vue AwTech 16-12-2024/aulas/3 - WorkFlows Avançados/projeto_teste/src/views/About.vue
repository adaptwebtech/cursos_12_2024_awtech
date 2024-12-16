<template>
  <div>
    <h1>Sobre</h1>
    <p>Esta é a página sobre.</p>
    <!-- Usando o componente Counter -->
    <Counter />
  </div>
</template>


<script>
    import Counter from '../views/Counter.vue';
    export default {
        name: 'AboutPage', // Alterado para um nome de componente de múltiplas palavras
        components: {
            Counter, // Registrando o componente Counter
        },
    };
</script>