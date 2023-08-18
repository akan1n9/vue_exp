<template>
  <div style="background-color: #88708c">
    <h3>我是子组件下一级孙组件</h3>
    <h3>
      name:{{ name }} , age:{{ age }}, sex:{{ sex }},
      假如爷爷和父亲同时提供一个provide，孙子用谁的？:{{ test }}
    </h3>
    <button @click="change">改变</button>
  </div>
</template>
  
<script setup>
import { inject } from "vue";
const name = inject("name", "默认值");
const age = inject("age", "默认值");
const changeName = inject("changeName");
const sex = inject("sex", "默认值"); //看能不能找到provide的东西，如果没有，就把默认值赋上

const change = () => {
  changeName("使用provide传来的方法改变readonly");
  age.value = 20;
  console.log(name, age);
};

// 假如爷爷和父亲同时提供一个provide，孙子用谁的？
const test = inject("test", "我用谁的");
</script>
  
<style>
</style>