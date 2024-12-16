import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

createApp(App)
.use(store) // Aqui você registra o Vuex
.use(router) // Aqui você registra o Vue Router
.mount('#app')
