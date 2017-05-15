import Vue from 'vue'
import Sites from '../vue/sites.vue'

export default {
  init() {
    // JavaScript to be fired on the home page
    new Vue({
      el: "app",
      components: {
        Sites,
      },
    })
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
