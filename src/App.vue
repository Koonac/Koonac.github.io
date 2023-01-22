<template>
  <div id="app">
    <!-- IMPORTANDO LAYOUT DA PÁGINA -->
    <LayoutMain>
      <!-- DIV DA ABA "Início" -->
      <b-container class="container pt-2" fluid>
        <div class="inicio">
          <b-row class="p-4">
            <b-col cols="4" class="bg-danger">
              IMAGE
            </b-col>
            <b-col>
              <h1 class="titulo">
                Olá, <br/>me chamo <span>Henrique Rodrigues</span> sou Desenvolvedor Web.
              </h1>
              <div class="text-end">
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
            </b-col>
          </b-row>
        </div>
      </b-container>
    </LayoutMain>
  </div>

  <!-- DIV DA ABA "Sobre" -->
  <!-- <div class="Sobre">
    a
  </div> -->

  <!-- DIV DA ABA "Habilidades" -->
  <!-- <div class="Habilidades">
    a
  </div> -->

  <!-- DIV DA ABA "Portifólio" -->
  <!-- <div class="Portifolio">
    a
  </div> -->

  <!-- DIV DA ABA "Contato" -->
  <!-- <div class="Contato">
    a
  </div> -->
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
    --big-font-size: 2rem;
    --h2-font-size: 1.25rem;
    --normal-font-size: 0.938rem;
    --font-weight: 600;
    --first-color: #0f0f0f;
    --second-color: #421361;
    --container-width: 80vw;
}

@media screen and (min-width: 768px) {
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
    font-weight: bold;
    color: var(--first-color);
    /* margin-bottom: var(--mb-5); */
}

.titulo > span{
  color: var(--second-color);
}

.socialIcons{
  color: var(--second-color);
}

.socialIcons:hover{
  color: var(--first-color);
}

.container{
  width: var(--container-width);
}
</style>
