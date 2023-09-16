<template>
  <div style="background-color: blueviolet">
    <h1>pinia初体验</h1>
    <h3>姓名：{{ name }}</h3>
    <h3>介绍：{{ fullName }}</h3>
    <button @click="handleName">修改</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNamerStore } from "../../store/namer";
const namerStore = useNamerStore();
const { name, fullName } = storeToRefs(namerStore);

function handleName() {
  namerStore.updateName("李宁");
}
</script>

<style>
</style>