<template>
  <div>
    <h1>Página Inicial</h1>
    <p>Bem-vindo à página inicial!</p>
    <!-- Usando o componente Counter -->
    <Counter />
  </div>
</template>


<script>
    import Counter from '../views/Counter.vue';
    export default {
        name: 'HomePage', // Alterado para um nome de componente de múltiplas palavras
        components: {
            Counter, // Registrando o componente Counter
        },
    };
</script>