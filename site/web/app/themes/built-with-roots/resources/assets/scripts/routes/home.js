import Vue from 'vue'
import Sites from '../vue/sites.vue'
import Stickyfill from 'stickyfill'

export default {
  init() {
    // JavaScript to be fired on the home page
    new Vue({
      el: "app",
      components: {
        Sites,
      },
    })

    let stickyElements = document.querySelectorAll('.sticky');

    for (var i = stickyElements.length - 1; i >= 0; i--) {
      Stickyfill.add(stickyElements[i]);
    }
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
