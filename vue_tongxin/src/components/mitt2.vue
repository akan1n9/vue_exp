<template>
  <div style="background-color: #1e8ec6">
    <h1>我是mitt2</h1>
    <h1>展示来自mitt1的数据 ：{{ mittasx }}</h1>
  </div>
</template>

<script setup>
import { ref,onUnmounted } from "vue";
import mitt from "../util/mitt";
const mittasx = ref("暂时没有");
mitt.on("Hello", (data) => {
  //   console.log(data);
  mittasx.value = data;
});

// 销毁事件

onUnmounted(() => {
  mitt.off("Hello", (data) => {
    //   console.log(data);
    mittasx.value = data;
  });
});
</script>

<style scoped>
</style>