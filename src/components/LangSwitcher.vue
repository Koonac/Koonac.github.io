<template>
    <select class="rounded bg-transparent text-light" v-model="$i18n.locale">
        <option class="text-dark" v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
            {{ lang }}
        </option>
    </select>
</template>
  
<script>
export default {
    name: "LangSwitcher",
    data() {
        return { langs: ["pt-br", "en"] };
    }
};
</script>
  