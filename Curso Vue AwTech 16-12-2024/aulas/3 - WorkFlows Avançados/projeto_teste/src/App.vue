<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view></router-view> <!-- Aqui as rotas serão renderizadas -->
  </div>
</template>