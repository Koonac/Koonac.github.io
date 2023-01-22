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

import App from './App.vue';

library.add(faWhatsapp, faTwitter, faLinkedinIn, faGithub);
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
