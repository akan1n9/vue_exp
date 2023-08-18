<template>
  <div style="background-color: #95549f">
    我是父下一级子组件
    <Sun />
  </div>
</template>
  
<script setup>
import { provide } from "vue";
import Sun from "./Sun.vue";
// 假如爷爷和父亲同时提供一个provide，孙子用谁的？
provide("test", "爸爸给的test");
</script>
  
  <style>
</style>