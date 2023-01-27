<template>
  <div id="app">
    <!-- IMPORTANDO LAYOUT DA PÁGINA -->
    <LayoutMain>
      <!-- DIV DA ABA "Início" -->
      <b-container class="container pt-2" fluid>
        <section id="inicio">
          <b-row class="p-4">
            <b-col md="5" lg="4" v-scroll-reveal.reset>
              <img src="./assets/eu-social.jpg" class="img-fluid rounded" alt="" srcset="">
            </b-col>
            <b-col md="7" lg="8" class="mt-3 mt-md-0" v-scroll-reveal.reset>
              <h1 class="titulo">
                Olá, me chamo <span>Henrique Rodrigues</span> sou Desenvolvedor Web.
              </h1>
              <div class="d-flex justify-content-between">
                <a href="#contato">
                  <b-btn class="btnSocial shadow" v-scroll-reveal.reset>
                    Contato
                  </b-btn>
                </a>
                <div v-scroll-reveal.reset>
                  <b-link class="px-2 socialIcons" href="https://api.whatsapp.com/send?phone=5514998617696&text=Olá, disponivel para um novo serviço ?" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-whatsapp" size="3x" bounce/>
                  </b-link>
                  <b-link class="px-2 socialIcons" href="https://github.com/Koonac" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" size="3x" bounce/>
                  </b-link>
                  <b-link class="px-2 socialIcons" href="https://www.linkedin.com/in/ednilson-rodrigues/" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" size="3x" bounce/>
                  </b-link>
                </div>
              </div>
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Sobre" -->
        <section id="sobre">
          <b-row class="p-4 text-center">
            <h2 class="titulo-secundario" v-scroll-reveal.reset>Sobre</h2>
            <b-col md="7" lg="8" class="mt-3 mt-md-0 text-center" v-scroll-reveal.reset>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum sit porro. Neque ab dolor, dolores doloremque ipsam eaque laborum excepturi aliquid magni cumque, libero minima, tempore provident qui? Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum sit porro. Neque ab dolor, dolores doloremque ipsam eaque laborum excepturi aliquid magni cumque, libero minima, tempore provident qui? Illo.</h3>
            </b-col>
            <b-col md="5" lg="4" v-scroll-reveal.reset>
              <img src="https://picsum.photos/400/500/?image=45" class="img-fluid rounded" alt="" srcset="">
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Habilidades" -->
        <section id="habilidades">
          <b-row class="p-4 text-center">
            <h2 class="titulo-secundario" v-scroll-reveal.reset>Habilidades</h2>
            <b-col md="5" lg="4" v-scroll-reveal.reset>
              <img src="https://picsum.photos/400/500/?image=20" class="img-fluid rounded" alt="" srcset="">
            </b-col>
            <b-col md="7" lg="8" class="mt-3 mt-md-0" v-scroll-reveal.reset>
              <div class="text-start mt-2" v-scroll-reveal.reset="{ delay: 150 }">
                <h4>PHP</h4>
                <b-progress id="label" :value="78" variant="info" striped show-progress :animated="animate" class="mt-2"></b-progress>
              </div>
              <div class="text-start mt-2" v-scroll-reveal.reset="{ delay: 250 }">
                <h4>Vue.js</h4>
                <b-progress id="label" :value="32" variant="info" striped show-progress :animated="animate" class="mt-2"></b-progress>
              </div>
              <div class="text-start mt-2" v-scroll-reveal.reset="{ delay: 350 }">
                <h4>Laravel</h4>
                <b-progress id="label" :value="62" variant="info" striped show-progress :animated="animate" class="mt-2"></b-progress>
              </div>
              <div class="text-start mt-2" v-scroll-reveal.reset="{ delay: 450 }">
                <h4>JavaScript</h4>
                <b-progress id="label" :value="70" variant="info" striped show-progress :animated="animate" class="mt-2"></b-progress>
              </div>
              <div class="text-start mt-2" v-scroll-reveal.reset="{ delay: 550 }">
                <h4>MySql</h4>
                <b-progress id="label" :value="45" variant="info" striped show-progress :animated="animate" class="mt-2"></b-progress>
              </div>
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Portifólio" -->
        <section id="portifolio">
          <b-row class="p-4">
            <b-col class="text-center">
              <h2 class="titulo-secundario" v-scroll-reveal.reset>Portifólio</h2>
              <b-card-group>
                <b-card title="Title" img-src="https://placekitten.com/g/300/300" img-alt="Image" img-top v-scroll-reveal.reset="{ delay: 250 }">
                  <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                </b-card>
                <b-card title="Title" img-src="https://placekitten.com/g/300/300" img-alt="Image" img-top v-scroll-reveal.reset="{ delay: 350 }">
                  <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                  </b-card-text>
                </b-card>

                <b-card title="Title" img-src="https://placekitten.com/g/300/300" img-alt="Image" img-top v-scroll-reveal.reset="{ delay: 450 }">
                  <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This card has even longer content than the first to show that equal height action.
                  </b-card-text>
                </b-card>
              </b-card-group>
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Contato" -->
        <section id="contato">
          <b-row class="p-4">
            <b-col class="text-center">
              <h2 class="titulo-secundario" v-scroll-reveal.reset>Contato</h2>
              <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="" label="" label-for="input-2" class="my-2" v-scroll-reveal.reset="{ delay: 250 }">
                  <b-form-input
                    id="nome"
                    v-model="form.name"
                    placeholder="Nome"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="" label="" label-for="input-1" class="my-2" v-scroll-reveal.reset="{ delay: 350 }">
                  <b-form-input
                      id="email"
                      v-model="form.email"
                      type="email"
                      placeholder="E-mail"
                      required
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="" label="" label-for="textarea" class="my-2" v-scroll-reveal.reset="{ delay: 450 }">
                  <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                  required
                  ></b-form-textarea>
                </b-form-group>
                <b-button type="submit" class="btnSocial shadow my-2" v-scroll-reveal.reset="{ delay: 450 }">Enviar</b-button>
              </b-form>
            </b-col>
          </b-row>
        </section>
      </b-container>
    </LayoutMain>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import LayoutMain from './components/LayoutMain.vue';

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
    // HelloWorld,
    LayoutMain,
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
      },
      show: true,
      animate: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<!-- STYLE DA PÁGINA -->
<style>
/* IMPORTANDO GOOGLE FONTS */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

/* FONTE DE TIPOGRÁFIA */
:root {
    --body-font: 'Poppins', sans-serif;
    --big-font-size: 1.5rem;
    --h2-font-size: 1rem;
    --normal-font-size: 0.75rem;
    /* --font-weight: 600; */
    --first-color: #421361;
    --second-color: #140d14;
    --container-width: 80vw;
}

/*===== Margens =====*/
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

#app{
    margin: var(--header-height) 0 0 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    font-weight: var(--font-weight);
    color: var(--second-color);
}

.titulo{
    font-size: var(--big-font-size);
    /* font-weight: var(--font-weight); */
    color: var(--second-color);
  }

  .titulo-secundario {
    position: relative;
    font-size: var(--h2-font-size);
    /* font-weight: var(--font-weight); */
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

.btnSocial{
  background-color: var(--first-color);
}

.btnSocial:hover{
  background-color: var(--second-color);
}

.titulo > span{
  color: var(--first-color);
}

.socialIcons{
  color: var(--first-color);
}

.socialIcons:hover{
  color: var(--second-color);
}

.container{
  width: var(--container-width);
}
</style>
