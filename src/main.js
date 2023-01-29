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
  delay: 0,
  distance: '0px',
  duration: 600,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 0,
  opacity: 0,
  origin: 'bottom',
  scale: 1,
});
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
