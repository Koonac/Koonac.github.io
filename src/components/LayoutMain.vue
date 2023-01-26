<!-- HTML DA PÁGINA -->
<template>
    <div>
        <!-- NAVBAR -->
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" class="ps-4 pe-4 p-2">
            <b-navbar-brand href="#">{{titulo ?? 'Henrique Rodrigues'}}</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#inicio" class="px-2" active>Ínicio</b-nav-item>
                    <b-nav-item href="#sobre" class="px-2">Sobre</b-nav-item>
                    <b-nav-item href="#habilidades" class="px-2">Habilidades</b-nav-item>
                    <b-nav-item href="#portifolio" class="px-2">Portifólio</b-nav-item>
                    <b-nav-item href="#contato" class="px-2">Contato</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <!-- CONTEÚDO SLOT -->
        <slot/>

        <!-- FOOTER -->
    </div>
</template>

<!-- SCRIPT DA PÁGINA -->
<script>
export default {
  name: 'LayoutMain',
  props: {
    titulo: String,
  },
};
</script>

<!-- STYLE DA PÁGINA -->
<!-- ADD "SCOPED" ATTRIBUTE TO LIMIT CSS TO THIS COMPONENT ONLY -->
<style scoped>

</style>
