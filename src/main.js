import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
/* IMPORT BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
/* IMPORT FONTAWESOME */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// ICONES
import {
  faWhatsapp,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
// SCROLL REVEAL
import VueScrollReveal from 'vue-scroll-reveal';

import App from './App.vue';

library.add(faWhatsapp, faTwitter, faLinkedinIn, faGithub);
Vue.use(BootstrapVue);
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  delay: 200,
  scale: 1.5,
  distance: '50px',
});
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
