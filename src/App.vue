<template>
  <div id="app">
    <!-- IMPORTANDO LAYOUT DA PÁGINA -->
    <LayoutMain>
      <b-container class="container py-4" fluid>
        <!-- DIV DA ABA "Início" -->
        <section id="inicio">
          <b-row class="p-4">
            <b-col md="5" lg="4" v-scroll-reveal>
              <img src="./assets/eu-social.jpg" class="img-fluid rounded" alt="" srcset="">
            </b-col>
            <b-col md="7" lg="8" class="mt-3 mt-md-0 p-0">
              <h1 class="titulo" v-html='$t("section.home.title", { name: "Henrique" })' v-scroll-reveal />
              <div class="d-flex justify-content-between" v-scroll-reveal>
                <b-btn href="#contato" class="btnSocial shadow">Contact</b-btn>
                <div>
                  <b-link class="px-2 socialIcons"
                    href="https://api.whatsapp.com/send?phone=5514998617696&text=Olá, disponivel para um novo serviço ?"
                    target="_blank">
                    <font-awesome-icon icon="fa-brands fa-whatsapp" size="3x" bounce />
                  </b-link>
                  <b-link class="px-2 socialIcons" href="https://github.com/Koonac" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" size="3x" bounce />
                  </b-link>
                  <b-link class="px-2 socialIcons" href="https://www.linkedin.com/in/ednilson-rodrigues/" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" size="3x" bounce />
                  </b-link>
                </div>
              </div>
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Sobre" -->
        <section id="sobre">
          <b-row class="p-4 text-center">
            <h2 class="titulo-secundario" v-scroll-reveal>{{ $t("section.aboutMe.title") }}</h2>
            <b-col md="7" lg="8" class="mt-3 mt-md-0 text-center" v-scroll-reveal>
              <h3>{{ $t("section.aboutMe.message") }}</h3>
            </b-col>
            <b-col md="5" lg="4" v-scroll-reveal>
              <img src="./assets/about.jpg" class="img-fluid rounded" alt="" srcset="">
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Habilidades" -->
        <section id="habilidades">
          <b-row class="p-4 text-center">
            <h2 class="titulo-secundario" v-scroll-reveal>{{ $t("section.skills.title") }}</h2>
            <b-col md="5" lg="4" v-scroll-reveal>
              <img src="./assets/skills.jpg" class="img-fluid rounded" alt="" srcset="">
            </b-col>
            <b-col md="7" lg="8" class="mt-3 mt-md-0">
              <div class="text-start mt-2">
                <h4 v-scroll-reveal>{{ $t("section.skills.skill1") }}</h4>
                <b-progress :value="88" variant="info" striped show-progress :animated="animate" class="mt-2"
                  v-scroll-reveal></b-progress>
              </div>
              <div class="text-start mt-2">
                <h4 v-scroll-reveal>{{ $t("section.skills.skill2") }}</h4>
                <b-progress :value="62" variant="info" striped show-progress :animated="animate" class="mt-2"
                  v-scroll-reveal></b-progress>
              </div>
              <div class="text-start mt-2">
                <h4 v-scroll-reveal>{{ $t("section.skills.skill3") }}</h4>
                <b-progress :value="75" variant="info" striped show-progress :animated="animate" class="mt-2"
                  v-scroll-reveal></b-progress>
              </div>
              <div class="text-start mt-2">
                <h4 v-scroll-reveal>{{ $t("section.skills.skill4") }}</h4>
                <b-progress :value="38" variant="info" striped show-progress :animated="animate" class="mt-2"
                  v-scroll-reveal></b-progress>
              </div>
              <div class="text-start mt-2">
                <h4 v-scroll-reveal>{{ $t("section.skills.skill5") }}</h4>
                <b-progress :value="24" variant="info" striped show-progress :animated="animate" class="mt-2"
                  v-scroll-reveal></b-progress>
              </div>
              <div class="text-start mt-2">
                <h4 v-scroll-reveal>{{ $t("section.skills.skill6") }}</h4>
                <b-progress :value="22" variant="info" striped show-progress :animated="animate" class="mt-2"
                  v-scroll-reveal></b-progress>
              </div>
              <div class="text-start mt-2">
                <h4 v-scroll-reveal>{{ $t("section.skills.skill7") }}</h4>
                <b-progress :value="65" variant="info" striped show-progress :animated="animate" class="mt-2"
                  v-scroll-reveal></b-progress>
              </div>
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Portifólio" -->
        <section id="portifolio">
          <b-row class="p-4">
            <b-col class="text-center">
              <h2 class="titulo-secundario" v-scroll-reveal>{{ $t("section.portfolio.title") }}</h2>
              <b-card-group>
                <b-card title="InstaFake" img-src="http://www.inforpress.cv/wp-content/uploads/2020/05/empty.jpg"
                  img-alt="Image" img-top v-scroll-reveal>
                  <b-card-text>
                    {{ $t("section.portfolio.card1") }}
                  </b-card-text>
                  <b-card-footer footer-class="text-end">
                    <b-btn href="https://github.com/Koonac/FakeInsta" class="btnSocial shadow" target="_blank">{{
                      $t("section.portfolio.btnView") }}</b-btn>
                  </b-card-footer>
                </b-card>
                <b-card title="SolicardSys"
                  img-src="https://user-images.githubusercontent.com/98482410/198423490-ac3f9582-a877-4259-a038-b1c9eed1c7fd.png"
                  img-alt="Image" img-top v-scroll-reveal>
                  <b-card-text>
                    {{ $t("section.portfolio.card2") }}
                  </b-card-text>
                  <b-card-footer footer-class="text-end">
                    <b-btn href="https://github.com/Koonac/galaxPay-integration" class="btnSocial shadow"
                      target="_blank">{{ $t("section.portfolio.btnView") }}</b-btn>
                  </b-card-footer>
                </b-card>
                <b-card title="Loja E-Commerce" img-src="http://www.inforpress.cv/wp-content/uploads/2020/05/empty.jpg"
                  img-alt="Image" img-top v-scroll-reveal>
                  <b-card-text v-html='$t("section.portfolio.card3")' />
                  <b-card-footer footer-class="text-end">
                    <b-btn href="https://github.com/Koonac/ecommerce" class="btnSocial shadow" target="_blank">{{
                      $t("section.portfolio.btnView") }}</b-btn>
                  </b-card-footer>
                </b-card>
              </b-card-group>
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Contato" -->
        <section id="contato">
          <b-row class="p-4" align-h="center">
            <b-col md="6" class="text-center">
              <h2 class="titulo-secundario" v-if="showForm" v-scroll-reveal>{{ $t("section.contact.title") }}</h2>
              <b-form @submit.prevent="sendEmail" v-if="showForm">
                <b-form-group label-for="name" class="my-2" v-scroll-reveal>
                  <b-form-input id="name" name="name" v-model="name" type="text" :placeholder="$t('section.contact.form.name')" required></b-form-input>
                </b-form-group>
                <b-form-group label-for="email" class="my-2" v-scroll-reveal>
                  <b-form-input id="email" name="email" v-model="email" type="email" :placeholder="$t('section.contact.form.email')" required></b-form-input>
                </b-form-group>
                <b-form-group label-for="message" class="my-2" v-scroll-reveal>
                  <b-form-textarea id="message" name="message" v-model="message" type="text" :placeholder="$t('section.contact.form.message')" rows="3" max-rows="6" required></b-form-textarea>
                </b-form-group>
                <b-button type="submit" class="btnSocial shadow my-2" v-scroll-reveal><b-spinner v-if="showSpinner" small
                    label="Spinning"></b-spinner> {{ textBtnSend ?? $t('section.contact.form.btnSend')}}</b-button>
              </b-form>
              <b-alert :show="!showForm" :variant="colorAlert" v-scroll-reveal>{{ msgAlert }}</b-alert>
            </b-col>
          </b-row>
        </section>
      </b-container>
    </LayoutMain>
  </div>
</template>

<script>
// IMPORTANDO EMAIL JS
import emailjs from 'emailjs-com';

// IMPORTANDO COMPONENTE LAYOUT
import LayoutMain from './components/LayoutMain.vue';
import i18n from './i18n';

export default {
  name: 'App',
  head: {
    script: [
      {
        type: 'text/javascript',
        src: 'https://kit.fontawesome.com/dd928c7064.js',
        async: true,
        body: true,
      },
    ],
  },
  components: {
    LayoutMain
  },
  data() {
    return {
      email: '',
      name: '',
      message: '',
      animate: true,
      showForm: true,
      colorAlert: 'success',
      msgAlert: '',
      textBtnSend: null,
      showSpinner: false,
    };
  },
  methods: {
    sendEmail(e) {
      this.showSpinner = true;
      this.textBtnSend = i18n.t('section.contact.form.btnSending');
      emailjs.sendForm('service_eurd5to', 'template_kwg513d', e.target, 'yzpczPyFCkstjj0bv')
        .then(() => {
          this.showForm = false;
          this.msgAlert = i18n.t('section.contact.msgAlert.successSendEmail');
        }, (e) => {
          this.showForm = false;
          this.colorAlert = 'danger';
          this.msgAlert = i18n.t('section.contact.msgAlert.errorSendEmail');
          e.console.error()
        });
      // Reset form field
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};

</script>

<!-- STYLE DA PÁGINA -->
<style>
/* IMPORTANDO GOOGLE FONTS */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

/* CONTAINER */
:root {
  --header-height: 50px;
  --container-width: 80vw;
}

/* FONTE DE TIPOGRÁFIA */
:root {
  --body-font: 'Poppins', sans-serif;
  --big-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: 0.75rem;
  --font-weight: 600;
  --first-color: #421361;
  --second-color: #140d14;
}

/*===== MARGENS =====*/
:root {
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
}

@media screen and (min-width: 768px) {
  :root {
    --big-font-size: 2.5rem;
    --h2-font-size: 1.5rem;
    --normal-font-size: 0.9rem;
  }
}

@media screen and (min-width: 992px) {
  :root {
    --big-font-size: 3.5rem;
    --h2-font-size: 2rem;
    --normal-font-size: 1rem;
  }
}

#app {
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  font-weight: var(--font-weight);
  color: var(--second-color);
}

.titulo {
  font-size: var(--big-font-size);
  font-weight: var(--font-weight);
  color: var(--second-color);
}

.titulo-secundario {
  position: relative;
  font-size: var(--h2-font-size);
  font-weight: var(--font-weight);
  color: var(--first-color);
  margin-top: var(--mb-2);
  margin-bottom: var(--mb-4);
}

.titulo-secundario::after {
  position: absolute;
  content: "";
  width: 64px;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 2rem;
  background-color: var(--first-color);
}

.btnSocial {
  height: min-content;
  background-color: var(--first-color);
}

.btnSocial:hover {
  background-color: var(--second-color);
}

.titulo>span {
  color: var(--first-color);
}

.socialIcons {
  color: var(--first-color);
}

.socialIcons:hover {
  color: var(--second-color);
}

.firstColor {
  background-color: var(--first-color);
}

.secondaryColor {
  color: var(--second-color);
}

.container {
  width: var(--container-width);
}
</style>
