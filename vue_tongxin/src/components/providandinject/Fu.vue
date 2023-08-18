<template>
  <div style="background-color: #bd30d2">
    我是顶层父组件
    <h3>provide的数据:{{ name }},{{ age }}</h3>
    <Zi />
  </div>
</template>

<script setup>
import { ref, provide, readonly } from "vue";
import Zi from "./Zi.vue";
const name = ref("Parent");
const age = ref(50);

provide("name", readonly(name));
provide("age", age);
provide("changeName", (newvalue) => {
  name.value = newvalue;
});

// 假如爷爷和父亲同时提供一个provide，孙子用谁的？
provide("test", "爷爷给的test");
</script>

<style>
</style>