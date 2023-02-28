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
import VueScrollReveal from 'vue-sreveal';
import App from './App.vue';
import i18n from './i18n';

library.add(faWhatsapp, faTwitter, faLinkedinIn, faGithub);
Vue.use(BootstrapVue);
Vue.use(VueScrollReveal, {
  delay: 200,
  duration: 800,
  scale: 1.5,
  // distance: '10px',
  reset: true,
});
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app');
