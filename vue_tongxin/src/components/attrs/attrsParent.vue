<template>
  <div style="background-color: #b9d026">
    <h1>attrsParent</h1>
    <button @click="parentFun">调用自身parentFun</button>
    <attrs-child
      v-on:parentFun="parentFun"
      :msg1="msg1"
      :msg2="msg2"
      title="333"
      :parFunction="sayHello"
    />
  </div>
</template>

<script setup>
import attrsChild from "./attrsChild.vue";
import { ref } from "vue";
const msg1 = ref("用props接受");
const msg2 = ref("不用props接受");
const parentFun = () => {
  alert("Hello");
};

const sayHello = () => {
  alert("props,hello");
};
</script>

<style>
</style>