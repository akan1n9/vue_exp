<template>
  <div style="background-color: #93db0d">
    {{ msg1 }}, {{ attrs.msg2 }}, {{ attrs.title }}
  </div>
  <button @click="attrs.onParentFun">看看attrs里面的onParentFun</button>
  <button @click="parFunction">看看props里面的parFunction</button>
</template>

<script setup>
import { useAttrs } from "vue";

defineProps({
  msg1: String,
  parFunction: Function,
});

// attrs：包含父作用域里除 class 和 style 除外的非 props 属性集合
// “透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on 事件监听器
const attrs = useAttrs();
console.log(attrs);
</script>

<style>
</style>