import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import intersectionObserver from "./directives.js";

createApp(App)
  .use(store)
  .use(router)
  .directive('observe', intersectionObserver) // Directive hier hinzufügen
  .mount('#app');
