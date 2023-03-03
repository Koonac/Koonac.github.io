<template>
    <b-nav-item-dropdown :text=lang.toUpperCase()>
        <b-dropdown-item @click="changeLang('en')">EN</b-dropdown-item>
        <b-dropdown-item @click="changeLang('pt-br')">PT-BR</b-dropdown-item>
    </b-nav-item-dropdown>
</template>
  
<script>
import i18n from '@/i18n';

export default {
    name: "LangSwitcher",
    data() {
        return { 
            lang: i18n.locale
        };
    },
    methods: {
        changeLang(e){
            i18n.locale = e;
            this.lang = i18n.locale;
        }
    },
};
</script>
  