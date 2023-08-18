<template>
  <router-view />
  <mitt1 />
  <mitt2 />
  <vmodel1 />
  <Fu />
  <attrs-parent />
  <router-link to="/comwatch">computed与watch</router-link>
</template>

<script setup>
import mitt1 from "./components/mitt1.vue";
import mitt2 from "./components/mitt2.vue";
import vmodel1 from "./components/vmodel1.vue";
import Fu from "./components/providandinject/Fu.vue";
import attrsParent from "../src/components/attrs/attrsParent.vue";
</script>


<style >
</style>
