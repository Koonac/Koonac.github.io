<template>
  <div id="app">
    <!-- IMPORTANDO LAYOUT DA PÁGINA -->
    <LayoutMain>
      <!-- DIV DA ABA "Início" -->
      <b-container class="container pt-2" fluid>
        <section id="inicio" v-scroll-reveal.reset>
          <b-row class="p-4">
            <b-col md="5" lg="4">
              <img src="./assets/eu-social.jpg" class="img-fluid rounded" alt="" srcset="">
            </b-col>
            <b-col md="7" lg="8" class="mt-3 mt-md-0">
              <h1 class="titulo">
                Olá, me chamo <span>Henrique Rodrigues</span> sou Desenvolvedor Web.
              </h1>
              <div class="d-flex justify-content-between">
                  <b-btn class="btnSocial shadow">
                    Contato
                  </b-btn>
                <div>
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
        <section id="sobre" v-scroll-reveal.reset>
          <b-row class="p-4">
            <b-col class="text-center">
              <h2 class="titulo-secundario">Sobre</h2>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum sit porro. Neque ab dolor, dolores doloremque ipsam eaque laborum excepturi aliquid magni cumque, libero minima, tempore provident qui? Illo.</h3>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum sit porro. Neque ab dolor, dolores doloremque ipsam eaque laborum excepturi aliquid magni cumque, libero minima, tempore provident qui? Illo.</h3>
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Habilidades" -->
        <section id="habilidades" v-scroll-reveal.reset>
          <b-row class="p-4">
            <b-col class="text-center">
              <h2 class="titulo-secundario">Habilidades</h2>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum sit porro. Neque ab dolor, dolores doloremque ipsam eaque laborum excepturi aliquid magni cumque, libero minima, tempore provident qui? Illo.</h3>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum sit porro. Neque ab dolor, dolores doloremque ipsam eaque laborum excepturi aliquid magni cumque, libero minima, tempore provident qui? Illo.</h3>
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Portifólio" -->
        <section id="portifolio" v-scroll-reveal.reset>
          <b-row class="p-4">
            <b-col class="text-center">
              <h2 class="titulo-secundario">Portifólio</h2>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum sit porro. Neque ab dolor, dolores doloremque ipsam eaque laborum excepturi aliquid magni cumque, libero minima, tempore provident qui? Illo.</h3>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum sit porro. Neque ab dolor, dolores doloremque ipsam eaque laborum excepturi aliquid magni cumque, libero minima, tempore provident qui? Illo.</h3>
            </b-col>
          </b-row>
        </section>
        <!-- DIV DA ABA "Contato" -->
        <section id="contato" v-scroll-reveal.reset>
          <b-row class="p-4">
            <b-col class="text-center">
              <h2 class="titulo-secundario">Contato</h2>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum sit porro. Neque ab dolor, dolores doloremque ipsam eaque laborum excepturi aliquid magni cumque, libero minima, tempore provident qui? Illo.</h3>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum sit porro. Neque ab dolor, dolores doloremque ipsam eaque laborum excepturi aliquid magni cumque, libero minima, tempore provident qui? Illo.</h3>
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
